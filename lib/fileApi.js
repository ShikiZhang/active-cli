const memFs = require("mem-fs");
const editor = require("mem-fs-editor");

const store = memFs.create();
const fs = editor.create(store);

// all file eidt 
// todo err case handle
// doc https://github.com/SBoudrias/mem-fs-editor

/**
 * read json
 * 
 * @export
 * @param {*} path
 * @returns object
 */
export function readJSON(path){
  return fs.readJSON(path)
}

/**
 * copyTpl
 *
 * @export
 * @param {*} from
 * @param {*} to
 * @param {*} data
 */
export function copyTpl(from, to, data){
  // todo tamplate path 
  fs.copyTpl(from, to, data)
}

/**
 * copyTpl
 *
 * @export
 * @param {*} cb
 */
export function commit(cb){ 
  fs.commit(cb)
}