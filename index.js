const fs = require('fs-extra')
const path = require('path')
const fm = require('hexo-front-matter')

const setId = (post) => {
  
  let flist = fs.walkSync(path.join(process.cwd(), 'source'))
  let idList = []
  let missingId = []

  flist.forEach( (fpath) => {
    if(fpath.endsWith('.md')){
      let content = fm.parse(fs.readFileSync(fpath, "utf8"))
      if(content.id || 0) {
        idList.push(content.id)
      }
      else{
        missingId.push(fpath)
      }
    }
  })
  
  let beginId = Math.max.apply(null, idList) + 1
  
  missingId.forEach( (fpath,index) =>{
    let content = fm.parse(fs.readFileSync(fpath, "utf8"))
    content.id = beginId + index
    console.log(`${fpath} -> ${content.id}`)
    fs.writeFileSync(fpath, fm.stringify(content))
  })
}

hexo.on('new', setId)
