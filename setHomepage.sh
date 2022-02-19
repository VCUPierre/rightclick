homepageBase=https://right-link.com/
customDir=$1

echo "Setting Homepage in package.json to ${customDir}"

json -I -f package.json -e "this.homepage='${homepageBase}${customDir}'"

npm run serverDeploy ${customDir}