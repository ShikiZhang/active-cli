const BeseCreater = require('./BaseCreater')

class AppCreater extends BeseCreater{
  constructor(appName,targetDir){
    // 这些属性放置的位置有待商榷
    super(appName, targetDir)
  }

  // 简单的项目生成函数
  create(cb){
    console.log('生成 package.json')
    this.addTpl('package.json','',{
      name: this.appName
    })
    this.commit(cb)
  }
}

module.exports = AppCreater