# test-protractor
This reporsitory is for testing angular based application with protractor.
Protractor Page object pattern is used to write test suites. 

# Pre-requisite 
nodejs (latest)

npm   (latest)

java-8

# Steps to start test. 
checkout project and unzip to a folder. 

verify java, node and npm version (should be latest)
```
npm -version
node -version
java -version
```
## Install protractor
`npm install -g protractor`

## Install node modules from package.json
`npm install `

## Run test
`protractor test.conf.js`

## You could run specific suite too. 
```
protractor test.conf.js --suite login

protractor test.conf.js --suite login,employee
```

### References: 
https://www.protractortest.org/#/page-objects

https://www.protractortest.org/#/server-setup

