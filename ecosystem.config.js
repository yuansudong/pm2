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
         "path" : "/home/yuansudong/new",
         "post-deploy" : "npm install"
      }
    }
  };
