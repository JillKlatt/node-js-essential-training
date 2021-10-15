const fs = require('fs')

const md = `

#This is a new file

* fs.readdir
* fs.readFile
* fs.writeFile

`

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err){
        throw err
    }
    console.log("file saved")
})