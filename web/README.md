# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


docker build -t jagannathgawali7/elaundry-web:dev-19-08-2024 .
docker run -d -p 8080:80 --name elaundry-web jagannathgawali7/elaundry-web:dev-19-08-2024

http://localhost:8080/

docker push jagannathgawali7/elaundry-web:dev-19-08-2024

docker push jagannathgawali7/elaundry-web



cd deploy/

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

 kubectl get pods
 kubectl get services
 frontend-service   NodePort  10.99.68.238  <none>  80:31578/TCP   27s

 minikube ip => 192.168.49.2
 http://192.168.49.2:31578


minikube addons enable ingress
kubectl get pods -n ingress-nginx
kubectl apply -f frontend-ingress.yaml
sudo gedit /etc/hosts
192.168.49.2 frontend.local
http://frontend.local/




helm 



exec into mysql pod
mysql -u root -p -h 127.0.0.1
Password is rootpassword;



mysql -u root -p -h 127.0.0.1rootpassword



************************************************
Start Minikube
1. minikube start --memory 4096 --cpus 2



************************************************************************
Build Push Web Docker Image
1. docker build -t jagannathgawali7/elaundry-web:dev-17-11-2024 .
2. docker push jagannathgawali7/elaundry-web:dev-17-11-2024 

************************************************************************


Install Shriram Laundry
0. kubectl create ns ns1
1. cd myapp
2. helm install myapp-release . -n ns1
3. helm uninstall myapp-release -n ns1
4. helm upgrade myapp-release . -n ns1


***********************************************************************


Install nginx-ingress (On Azure)

https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/load-bal-ingress-c/create-unmanaged-ingress-controller?tabs=azure-cli

NAMESPACE=ingress-basic

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx \
  --create-namespace \
  --namespace ingress-basic \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/azure-load-balancer-health-probe-request-path"=/healthz \
  --set controller.service.externalTrafficPolicy=Local

**************************************************************************