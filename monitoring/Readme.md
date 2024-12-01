To set up **ELK (Elasticsearch, Logstash, and Kibana)** in your **Kubernetes** cluster using **Helm**, you can follow these steps to enable monitoring and logging for your MERN app. This process involves deploying the ELK stack on your Kubernetes cluster using Helm charts.

### Prerequisites:
1. **Helm** installed on your local machine and configured to interact with your Kubernetes cluster.
2. Your MERN app already deployed on Kubernetes (since you mentioned you have it deployed).
3. Kubernetes cluster (like **GKE**, **EKS**, or a self-hosted Kubernetes setup).

### Step 1: Add Helm Repositories for ELK
First, you need to add the official Helm chart repositories for the ELK stack.

```bash
helm repo add elastic https://helm.elastic.co
helm repo update
```

### Step 2: Install Elasticsearch with Helm
Elasticsearch is the data storage and search component of the ELK stack. We will install Elasticsearch first.

```bash
helm install elasticsearch elastic/elasticsearch \
  --set replicas=3 \
  --set resources.requests.memory=2Gi \
  --set resources.requests.cpu=1 \
  --set resources.limits.memory=4Gi \
  --set resources.limits.cpu=2 \
  --namespace logging
```

This installs Elasticsearch in the `logging` namespace (create it if it doesn’t exist).

```bash
kubectl create namespace logging
```

### Step 3: Install Kibana with Helm
Kibana provides a web UI to interact with Elasticsearch. Now, install Kibana:

```bash
helm install kibana elastic/kibana \
  --set replicas=1 \
  --set resources.requests.memory=1Gi \
  --set resources.requests.cpu=500m \
  --set resources.limits.memory=2Gi \
  --set resources.limits.cpu=1 \
  --namespace logging
```

### Step 4: Install Logstash with Helm
Logstash processes incoming logs and sends them to Elasticsearch. Install Logstash:

```bash
helm install logstash elastic/logstash \
  --set replicas=2 \
  --set resources.requests.memory=2Gi \
  --set resources.requests.cpu=1 \
  --set resources.limits.memory=4Gi \
  --set resources.limits.cpu=2 \
  --namespace logging
```

You can configure Logstash to collect logs from various sources. You can use a Logstash configuration file to set the input and output to Elasticsearch.

### Step 5: Configure Log Collection from MERN App
You'll need to ensure that your MERN app (both frontend and backend) sends logs to Logstash, which will forward them to Elasticsearch.

1. **Install Filebeat or Fluentd to collect logs** from your Kubernetes pods and send them to Logstash. We’ll use **Filebeat** here.

```bash
helm install filebeat elastic/filebeat \
  --set elasticsearch.hosts[0]=http://elasticsearch.logging.svc.cluster.local:9200 \
  --set logstash.enabled=true \
  --set logstash.hosts[0]=logstash.logging.svc.cluster.local:5044 \
  --namespace logging
```

2. Ensure your MERN app pods are outputting logs to standard output or a specific file, which Filebeat or Fluentd will collect.

3. **Configure the Logstash input** for Filebeat logs. This is done by modifying the Logstash configuration to process logs coming from Filebeat:

You can either modify the Logstash config via a config map or provide a custom configuration file for Logstash to use.

Here's an example of a simple configuration for `logstash.conf`:

```text
input {
  beats {
    port => 5044
  }
}

filter {
  # Add filtering rules here (e.g., parsing json logs)
}

output {
  elasticsearch {
    hosts => ["http://elasticsearch.logging.svc.cluster.local:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}
```

### Step 6: Access Kibana Dashboard
Once the stack is deployed, you can access Kibana to view your logs.

You can expose Kibana externally using a Kubernetes service or port-forwarding to access the Kibana web UI.

```bash
kubectl port-forward svc/kibana-kibana 5601:5601 --namespace logging
```

Then, access Kibana in your browser at:

```
http://localhost:5601
```

username = elastic
password =>

```bash
kubectl get secrets --namespace=logging elasticsearch-master-credentials -ojsonpath='{.data.password}' | base64 -d
```

You can now view logs, set up dashboards, and analyze the logs from your MERN app.

### Step 7: Set Up Log Index Patterns in Kibana
Once Kibana is running, you need to set up an index pattern for the logs:

1. Open Kibana in your browser (`http://localhost:5601`).
2. Navigate to **Management > Index Patterns**.
3. Create a new index pattern with the pattern matching the logs, for example, `logs-*`.

Discover > Data source 
new index pattern > kubernetes.namespace : "ns1" 


### Step 8: (Optional) Monitor Metrics with Elastic APM
You can also enable **Elastic APM** (Application Performance Monitoring) to track metrics and performance of your MERN app (Node.js backend). This can be done by installing the APM server:

```bash
helm install apm-server elastic/apm-server \
  --set elasticsearch.hosts[0]=http://elasticsearch.logging.svc.cluster.local:9200 \
  --namespace logging
```

Then, integrate the **Elastic APM agent** into your Node.js backend by adding the APM Node.js client:

```bash
npm install elastic-apm-node --save
```

Add the following code to your Node.js app:

```javascript
const apm = require('elastic-apm-node').start({
  serviceName: 'mern-backend',
  serverUrl: 'http://apm-server.logging.svc.cluster.local:8200',
  secretToken: 'YOUR_SECRET_TOKEN',  // If you have authentication enabled
  environment: 'production'
});
```

This setup will allow you to monitor the performance of your app, track errors, and view it in Kibana.

### Conclusion:
Now your Kubernetes environment has **Elasticsearch**, **Logstash**, and **Kibana** (ELK stack) installed using Helm. Your MERN app is configured to send logs to **Logstash**, which processes and forwards them to **Elasticsearch**, allowing you to view and analyze your logs in **Kibana**. Additionally, if you configure Elastic APM, you will also be able to monitor application performance.