const path = require('path')
const memFs = require('mem-fs');
const FileEditor = require('mem-fs-editor');
class BeseCreater {
  constructor (appName,targetDir) {
    this.tplDir = path.join(__dirname,'../', 'template')
    this.appName = appName
    this.targetDir = targetDir
    this.sharedFs = memFs.create();
    this._fs = FileEditor.create(this.sharedFs);
    console.log('12313')
  }
  addTpl(name, target = '', data){
    const from = path.join(this.tplDir, name)
    const to = path.join(this.targetDir, target, name)
    console.log(from)
    console.log(to)

    this._fs.copyTpl(
      from,
      to,
      data
    )
  }
  commit(cb){
    this._fs.commit(cb)
  }
}

module.exports = BeseCreater

