module.exports = {
    apps : [{
      script: 'index.js',
    }], 
    // Deployment Configuration
    deploy : {
      production : {
         "user" : "ubuntu",
         "host" : ["1.14.1.37"], // 指定服务器地址
         "ref"  : "origin/master", // 指定分支
         "repo" : "git@github.com:yuansudong/pm2.git",
         "path" : "/home/ubuntu/new",
         "pre-setup": "echo '安装之前,会在远程服务器上执行这条命令' > ~/pre-setup.txt",
         "post-setup": "echo '安装之后,会在远程服务器上执行这条命令' > ~/post-setup.text",
         "pre-deploy" : "echo '在更新之前会在远程服务器上执行这条命令 12'",  // 更新HOOK, 在拉取代码之前,会在远程服务器上执行这条命令 
         "post-deploy" : "npm install", // 更新HOOK, 在拉取代码之后,会在远程的服务器上执行这条命令
         "pre-deploy-local" : "echo '在更新之前或者部署之前' > ~/a.txt" // 更新HOOK,在更新之前,会在本地的服务上执行这条命令.
      }
    }
  };
