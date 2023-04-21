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
         "pre-deploy" : "echo '在更新之前会在远程服务器上执行这条命令 12' > ~/a.txt",
         "post-deploy" : "npm install",
         "pre-deploy-local" : "echo '我怎么没有看见你呢' > ~/a.txt"
      }
    }
  };
