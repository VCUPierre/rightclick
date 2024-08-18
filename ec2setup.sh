#!/bin/bash

# Update and install necessary tools
sudo yum update -y
sudo yum install -y gcc-c++ make

# Install Node.js 16.x
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs

# Install Yarn
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install -y yarn

# Install the json package globally
sudo npm install -g json

# Verify installations
node -v
npm -v
yarn -v
json --version

echo "Node.js, Yarn, and the json package have been successfully installed."