const path = require('path')
const memFs = require('mem-fs');
const FileEditor = require('mem-fs-editor');
const fs = require('fs')
const log = console.log
/**
 *  基础的文件操作类
 *  所有其他 Creater 继承就可以进行文件操作
 * @class BeseCreater
 */
class BeseCreater {
  constructor (targetDir) {
    this.tplDir = path.join(__dirname,'../', 'template')
    this.targetDir = targetDir
    this.sharedFs = memFs.create();
    this._fs = FileEditor.create(this.sharedFs);
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
    log(from)
    log(to)

    this._fs.copyTpl(
      from,
      to,
      data
    )
  }

  copyFlie(from, to){
    const fromPath = path.join(this.tplDir, from)
    const toPath = path.join(this.targetDir, to)
    // log(from)
    // log(to)

    this._fs.copy(
      fromPath,
      toPath
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
  /**
   * 文件夹copy函数
   * 目前使用同步函数 待优化 
   * 优化方案 将文件树降维为数组  然后进行异步文件生成 Promise.all 进行同步
   * @param {*} src
   * @param {*} dist
   * @memberof BeseCreater
   */
  memCopyDir(src, dist){
    const srcPath = path.join(this.tplDir, src)
    const distPath = path.join(this.targetDir, dist)
    // todo handler err
    const fileList =  fs.readdirSync(srcPath)
    const self = this
    fileList.forEach(function(fliePath){
      let _src = path.join(srcPath, fliePath)
      let _dist = path.join(distPath, fliePath)
      const stat = fs.statSync(_src)
        // if(err){
        //   // todo handler err
        //   log(`load ${_src} err`)
        // } else {
          // 判断是文件还是目录
          if(stat.isFile()) {
            self.copyFlie(path.join(src, fliePath), path.join(dist, fliePath));
              log('adas', path.join(src, fliePath))
              log('12323', path.join(dist, fliePath))
          } else if(stat.isDirectory()) {
            // 当是目录是，递归复制
            self.memCopyDir(path.join(src, fliePath), path.join(dist, fliePath))
          }
        // }
    })
  }
}

module.exports = BeseCreater

