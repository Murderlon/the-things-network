#!/bin/bash
# Script to deploy the built code to a development or
# production environment

# Validate arguments
if [ "$#" -ne 4 ]; then
	echo "Error: Invalid number of arguments"
	echo "Usage: deploy.sh TARGET_HOST TARGET_USER PROJECT_NAME PROJECT_SUBDOMAIN"
	echo
	echo "  TARGET_HOST         IP/URL of the server on which should be deployed"
	echo "  TARGET_USER         User on the TARGET_HOST with SSH access via SSH key"
	echo "  PROJECT_NAME        Name of the project on the deployment server"
	echo "  PROJECT_SUBDOMAIN   Subdomain/branch of the current deployment (e.g. develop, master)"
	exit 1
fi

# Set variables
TARGET_HOST=$1
TARGET_USER=$2
PROJECT_NAME=$3
PROJECT_SUBDOMAIN=$4
TARGET_ROOT="/var/www/$PROJECT_NAME/$PROJECT_SUBDOMAIN"
TARGET_DOCUMENT_ROOT="$TARGET_ROOT/html"

# Deploy code
echo "Deploying front-end code to '$TARGET_HOST:$TARGET_DOCUMENT_ROOT' as '$TARGET_USER'..."
rsync --archive --compress --delete --force --rsh "ssh -p22" public/ $TARGET_USER@$TARGET_HOST:/$TARGET_DOCUMENT_ROOT
if [ $? -ne 0 ]; then "Error: Failed to deploy code"; exit 1; fi
echo "- ok"
echo
