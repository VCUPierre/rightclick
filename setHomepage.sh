homepageBase=https://right-link.com/
# customDir=$1 // use for passing in name

customDir=$(json -f src/assets/index.json NAME)

echo "Setting Homepage in package.json to ${customDir}"

json -I -f package.json -e "this.homepage='${homepageBase}${customDir}'"

npm run serverDeploy ${customDir}