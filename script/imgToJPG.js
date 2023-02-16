const { readdir, rename } = require('fs');
const path = require('path');
const dir_pos = path.resolve(__dirname, "../pos")
const dir_neg = path.resolve(__dirname, "../neg")

const imgToJPG = (dir) => {
  readdir(dir, 'utf-8', (err, files) => {
    if (err) throw err
    files.forEach((file, index) => {
      const oldName = file
      const newName = index + 1 + ".jpg"
      rename(path.resolve(dir, oldName), path.resolve(dir, newName), (err) => {
        if (err) return console.log(err.message)
        console.log(`${oldName}重命名为${newName}成功`)
      })
    })
  })
}

// imgToJPG(dir_pos)
imgToJPG(dir_neg)