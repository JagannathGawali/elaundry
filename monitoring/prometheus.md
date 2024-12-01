helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
helm repo update
kubectl create namespace monitoring
helm install kind-prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --set prometheus.service.nodePort=30000 --set prometheus.service.type=NodePort --set grafana.service.nodePort=31000 --set grafana.service.type=NodePort --set alertmanager.service.nodePort=32000 --set alertmanager.service.type=NodePort --set prometheus-node-exporter.service.nodePort=32001 --set prometheus-node-exporter.service.type=NodePort
kubectl get svc -n monitoring
kubectl get namespace


















I understand that you're new to Prometheus, Grafana, and Kubernetes. No worries—I'll walk you through the process step-by-step, starting from the basics. We'll set up monitoring for your Node.js application running on Kubernetes using Prometheus for collecting metrics and Grafana for visualization. Here's a detailed, step-by-step guide:

---

## **Step 1: Set up Prometheus and Grafana in Kubernetes**

### 1.1 **Install Helm**
Helm is a package manager for Kubernetes, and it simplifies the deployment of applications on Kubernetes. If you don't have Helm installed, follow these steps:

- **Linux/macOS**:
  ```bash
  curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
  ```

- **Windows**:
  Download the latest version of Helm from [Helm GitHub releases](https://github.com/helm/helm/releases) and follow the instructions for Windows.

After installing Helm, verify it with:

```bash
helm version
```

---

### 1.2 **Install Prometheus and Grafana using Helm**

In Kubernetes, we’ll use the **kube-prometheus-stack**, which bundles Prometheus and Grafana together.

1. **Add the Helm repository for Prometheus:**
   Run these commands to add the Prometheus community Helm charts repository to Helm:

   ```bash
   helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
   helm repo update
   ```

2. **Install Prometheus and Grafana with Helm:**
   Run this command to install Prometheus and Grafana in your Kubernetes cluster:

   ```bash
   helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
   ```

   - This command installs Prometheus, Prometheus Operator, Alertmanager, and Grafana under the `monitoring` namespace.
   - `--create-namespace` ensures that the `monitoring` namespace is created if it doesn't exist.

---

### 1.3 **Access Grafana Dashboard**

Now that Grafana is installed, you can access the Grafana UI to visualize metrics.

1. **Get the Grafana admin password:**
   Run this command to retrieve the admin password for Grafana:

   ```bash
   kubectl get secret --namespace monitoring prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
   ```

2. **Access Grafana UI:**
   Run this command to forward the Grafana port to your local machine:

   ```bash
   kubectl port-forward service/prometheus-grafana 3000:80 --namespace monitoring
   ```

   - Now, you can access Grafana at `http://localhost:3000`. Use the username `admin` and the password you retrieved earlier.

---

## **Step 2: Expose Metrics from Your Node.js Application**

Next, we need to ensure that your Node.js application exposes metrics so that Prometheus can scrape them.

### 2.1 **Add Prometheus Client to Your Node.js Application**

1. **Install the Prometheus client:**
   In your Node.js app directory, install the `prom-client` library:

   ```bash
   npm install prom-client
   ```

2. **Modify your Node.js app to expose metrics:**
   Here's an example of how you can modify your Node.js app (assuming you're using Express) to expose the `/metrics` endpoint:

   ```javascript
   const express = require('express');
   const promClient = require('prom-client');
   const app = express();

   // Create a Registry to hold all metrics
   const register = new promClient.Registry();

   // Collect default metrics (e.g., memory usage, CPU)
   promClient.collectDefaultMetrics({ register });

   // Custom metric: Total request count
   const requestCount = new promClient.Counter({
     name: 'nodejs_app_requests_total',
     help: 'Total number of requests',
     labelNames: ['method', 'status'],
   });

   // Define a /metrics route that Prometheus will scrape
   app.get('/metrics', async (req, res) => {
     res.set('Content-Type', register.contentType);
     res.end(await register.metrics());
   });

   // A sample route for the app
   app.get('/', (req, res) => {
     requestCount.inc({ method: 'get', status: '200' });
     res.send('Hello, Prometheus!');
   });

   // Start the server
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
   });
   ```

   - This will expose your app's metrics at `http://<your-app-ip>:<port>/metrics`.
   - You can add more custom metrics as needed (e.g., request durations, errors, etc.).

---

### 2.2 **Expose Your Node.js Application in Kubernetes**

We need to expose your Node.js app to make the `/metrics` endpoint available for Prometheus to scrape.

1. **Create a Kubernetes Service for your Node.js App:**
   Define a Kubernetes Service for your Node.js application to expose it within the cluster. Create a file `nodejs-app-service.yaml`:

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: nodejs-app
     namespace: default
   spec:
     selector:
       app: nodejs-app  # This should match your app's labels
     ports:
       - protocol: TCP
         port: 8080   # The port Prometheus will scrape
         targetPort: 3000  # The port your app is serving metrics on
   ```

   Apply the service:

   ```bash
   kubectl apply -f nodejs-app-service.yaml
   ```

2. **Deploy your Node.js app to Kubernetes**:  
   Ensure your Node.js app is deployed in Kubernetes. If it's not deployed yet, you'll need to create a deployment for it. Here's an example deployment YAML (`nodejs-app-deployment.yaml`):

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nodejs-app
     namespace: default
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: nodejs-app
     template:
       metadata:
         labels:
           app: nodejs-app
       spec:
         containers:
           - name: nodejs-app
             image: <your-nodejs-app-image>  # Use your image here
             ports:
               - containerPort: 3000
   ```

   Apply the deployment:

   ```bash
   kubectl apply -f nodejs-app-deployment.yaml
   ```

---

### 2.3 **Configure Prometheus to Scrape Your Node.js Application**

Prometheus uses service discovery to find services in Kubernetes, and you can annotate your service to tell Prometheus to scrape it.

1. **Annotate the Service** to tell Prometheus to scrape it:

   ```bash
   kubectl annotate service nodejs-app prometheus.io/scrape=true prometheus.io/port=8080 --namespace default
   ```

   - `prometheus.io/scrape=true`: Tells Prometheus to scrape this service.
   - `prometheus.io/port=8080`: The port where Prometheus will scrape the `/metrics` endpoint.

2. Prometheus will now automatically discover your service and start scraping metrics from the `/metrics` endpoint.

---

## **Step 3: Create Dashboards in Grafana**

1. **Login to Grafana**:
   Go to `http://localhost:3000`, login with the username `admin` and the password you retrieved earlier.

2. **Add Prometheus as a Data Source**:
   - Go to **Configuration** > **Data Sources** (gear icon on the left sidebar).
   - Select **Prometheus** and set the URL as `http://prometheus-kube-prometheus-prometheus.monitoring.svc:9090` (this is the default service name for Prometheus in the `monitoring` namespace).
   - Click **Save & Test**.

3. **Create a Dashboard**:
   - Click the **+** icon on the left sidebar and select **Dashboard**.
   - Click **Add new panel**.
   - In the **Query** section, select **Prometheus** as the data source.
   - For the **metric**, use a Prometheus query like:

     ```prometheus
     nodejs_app_requests_total
     ```

   - You can customize your dashboard with graphs, tables, and alerts as needed.

---

## **Step 4: Access and Visualize Your Metrics**

Once everything is set up, you can monitor your Node.js application in real-time:

- **Grafana** will display your metrics, such as the total number of requests, errors, etc.
- You can also set up **alerts** in Grafana to get notified when certain metrics cross a threshold (e.g., high request latency or error rate).

---

## **Conclusion**

You have successfully set up Prometheus and Grafana to monitor your Node.js application running on Kubernetes! Now, Prometheus collects metrics from your app, and Grafana visualizes them, allowing you to track performance and health.

Feel free to add more custom metrics and fine-tune the dashboards as per your needs. This setup will help you keep track of your application’s performance in Kubernetes efficiently!




https://spacelift.io/blog/prometheus-kubernetes