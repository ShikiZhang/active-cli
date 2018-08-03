const BeseCreater = require('./BaseCreater')

class AppCreater extends BeseCreater{
  constructor(appName,targetDir){
    // 这些属性放置的位置有待商榷
    super(targetDir)

    this.appName = appName
  }

  // 简单的项目生成函数
  create(cb){
    // console.log('生成 package.json')
    // this.addTpl('package.json','',{
    //   name: this.appName
    // })
    // this.addTpl('app.js','src',{
    //   name: this.appName,
    //   users: [1,2,2,3]
    // })
    // this.commit(cb)
    this.memCopyDir('shiki','')
    const self = this
    self.commit(cb)
  }
  createInit(){
    this.addTpl('package.json','',{
      name: this.appName
    })
  }
}

module.exports = AppCreater