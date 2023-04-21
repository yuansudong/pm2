module.exports = {
    apps : [{
      script: 'index.js',
    }], 
    // Deployment Configuration
    deploy : {
      production : {
         "user" : "ubuntu",
         "host" : ["1.14.1.37"],
         "ref"  : "origin/master",
         "repo" : "git@github.com:yuansudong/pm2.git",
         "path" : "/home/ubuntu/new",
         "post-deploy" : "npm install",
         "pre-deploy-local" : "echo 'This is a local executed command'"
      }
    }
  };
