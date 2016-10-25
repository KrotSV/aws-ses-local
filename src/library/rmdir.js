import fs from 'fs'

const deleteFolderRecursive = path => {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = `${path}/${file}`
      if(fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

export default deleteFolderRecursive