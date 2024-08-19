#!/bin/bash

# Function to check command existence
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Update system packages
sudo yum update -y

# Check if Node.js 16.x is installed
if ! command_exists node || ! node -v | grep -q "v16"; then
    echo "Node.js 16.x is not installed. Installing..."
    curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
    sudo yum install -y nodejs
else
    echo "Node.js 16.x is already installed."
fi

# Check if Yarn is installed
if ! command_exists yarn; then
    echo "Yarn is not installed. Installing..."
    curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
    sudo yum install -y yarn
else
    echo "Yarn is already installed."
fi

# Check if the JSON package is installed globally
if ! npm list -g json >/dev/null 2>&1; then
    echo "The JSON package is not installed globally. Installing..."
    sudo npm install -g json
else
    echo "The JSON package is already installed globally."
fi

# Check if sshpass is installed
if ! command_exists sshpass; then
    echo "sshpass is not installed. Installing..."
    sudo yum install -y gcc wget make
    wget http://downloads.sourceforge.net/project/sshpass/sshpass/1.09/sshpass-1.09.tar.gz
    tar xvzf sshpass-1.09.tar.gz
    cd sshpass-1.09
    ./configure
    make
    sudo make install
    cd ..
else
    echo "sshpass is already installed."
fi

eval "$(ssh-agent -s)"

# Check if SSH key is already added to ssh-agent
if ! ssh-add -l | grep -q "$(ssh-keygen -lf ~/.ssh/id_rsa_ec2 | awk '{print $2}')"; then
    echo "Adding SSH key to ssh-agent..."
    name=<passphrase>
    sshpass -p "$name" -P assphrase ssh-add ~/.ssh/id_rsa_ec2
else
    echo "SSH key is already added to ssh-agent."
fi

# Verify installations
echo "Verifying installations..."
node -v
npm -v
yarn -v
json --version
ssh-add -l

echo "Setup is complete."