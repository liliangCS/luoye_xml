const { readdirSync, writeFileSync } = require("fs")
const path =  require("path")

const createPos = (dir) => {
  let posStr = ""
  const dirs = readdirSync(dir)
  dirs.forEach(fileName => {
    posStr += `./pos/${fileName} 1 0 0 50 50\n`
  })
  try {
    writeFileSync(path.resolve(__dirname, "../pos.txt"), posStr)
    console.log("pos创建成功")
  } catch (error) {
    console.log("pos创建失败")
  }
}


const createNeg = (dir) => {
  let negStr = ""
  const dirs = readdirSync(dir)
  dirs.forEach(fileName => {
    negStr += `./neg/${fileName}\n`
  })
  try {
    writeFileSync(path.resolve(__dirname, "../neg.txt"), negStr)
    console.log("neg创建成功")
  } catch (error) {
    console.log("neg创建失败")
  }
}

createPos(path.resolve(__dirname, "../pos")) 
createNeg(path.resolve(__dirname, "../neg")) 