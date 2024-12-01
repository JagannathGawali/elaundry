#!/bin/bash

# Install ingress-nginx
helm install ingress-nginx ingress-nginx/ingress-nginx \
    --create-namespace \
    --namespace ingress-basic \
    --set controller.service.annotations."service\.beta\.kubernetes\.io/azure-load-balancer-health-probe-request-path"=/healthz \
    --set controller.service.externalTrafficPolicy=Local

# Check if ingress-nginx installation was successful
if [ $? -ne 0 ]; then
    echo "Failed to install ingress-nginx"
    exit 1
fi

# Create namespace ns1
kubectl create ns ns1

# Check if namespace creation was successful
if [ $? -ne 0 ]; then
    echo "Failed to create namespace ns1"
    exit 1
fi
# Change directory to ~/K8s_project/ShriramLaundry/myapp
cd ~/K8s_project/ShriramLaundry/myapp

# Install myapp-release
helm install myapp-release . -n ns1

# Check if myapp-release installation was successful
if [ $? -ne 0 ]; then
    echo "Failed to install myapp-release"
    exit 1
fi

echo "All commands executed successfully"