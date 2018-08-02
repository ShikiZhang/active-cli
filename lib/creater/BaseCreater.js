const path = require('path')
const memFs = require('mem-fs');
const FileEditor = require('mem-fs-editor');


/**
 *  基础的文件操作类
 *  所有其他 Creater 继承就可以进行文件操作
 * @class BeseCreater
 */
class BeseCreater {
  constructor (appName,targetDir) {
    this.tplDir = path.join(__dirname,'../', 'template')
    this.appName = appName
    this.targetDir = targetDir
    this.sharedFs = memFs.create();
    this._fs = FileEditor.create(this.sharedFs);
    console.log('12313')
  }

  /**
   * 使用模板生成文件
   * 生成之后存在内存中
   * @param {*} name
   * @param {string} [target='']
   * @param {*} data
   * @memberof BeseCreater
   */
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
  /**
   * 将内存中的文件提交到硬盘上
   * 所有creat 之后必须调用
   * @param {*} cb
   * @memberof BeseCreater
   */
  commit(cb){
    this._fs.commit(cb)
  }
}

module.exports = BeseCreater

