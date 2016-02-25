/* gulp configuration file */

module.exports = function(){
  var clientPath = "./src/client/";
  var scriptsPath = clientPath + "scripts/";
  var buildPath = "./build/";
  var sassPath = clientPath + "scss/";
  var tempPath = "./tmp/";
  var serverPath = "./src/server/";
  
  var config = {
      //file paths
      buildPath: buildPath,
      clientPath: clientPath,
      tempPath: tempPath,
      
      index: clientPath + "index.html",
      sassFiles: sassPath + "**/*.scss",
      
      //node server
      node: {
          server: serverPath + "server.js",
          defaultPort: 7000,
          bsReloadDelay: 1000,
          serverPath: './'
      },
      
      //browserSync
      bs: {
          defaultPort: 4000,
          defaultBrowser: "google chrome"
      },
      
     js: {
          appjs: scriptsPath + "js/app.js",
          scripts: scriptsPath + "js/*.js",
          exclude: "!./src/client/scripts/js/app.js"
      },
      
      //bower settings for injection (wiredep)
      bower: {
          json: require("./bower.json"),
          directory: clientPath + "libs/",
          ignorePath: "../.."
      },
      
      //Typescripts settings for use when converting to javascript
      typescript: {          
          filePaths: [
              scriptsPath + "app.ts",           
              scriptsPath + "controllers/*.ts",
              scriptsPath + "directives/*.ts" 
          ],             
          javascriptOutput: scriptsPath + "js/"          
      }
  };
  
  config.getWiredepDefaultOptions = function(){
    var options = {
        bowerJson: config.bower.json,
        directory: config.bower.directory ,
        ignorePath: config.bower.ignorePath  
    };
    
    return options; 
  };
  
  return config;  
};