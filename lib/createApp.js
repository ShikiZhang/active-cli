const fs = require('fs')
const path = require('path')
const log = console.log
const chalk = require('chalk')
const AppCreater = require('./creater/AppCeater')

// 生成器入口 读取配置文件  进行校验工作
function createApp(appName){
  const targetDir = path.resolve(appName)
  if(fs.existsSync(targetDir)){
    log(chalk.red(`项目 ${appName} 已存在`))
    return
  }
  console.log(targetDir)
  const app = new AppCreater(appName, targetDir)
  app.create(function(){
    console.log('完成')
  })
}
module.exports = createApp