const BeseCreater = require('./BaseCreater')

class AppCreater extends BeseCreater{
  constructor(appName,targetDir){
    super(appName, targetDir)
  }
  create(cb){
    console.log('生成 package.json')
    this.addTpl('package.json','',{
      name: this.appName
    })
    this.commit(cb)
  }
}

module.exports = AppCreater