// readFile && writeFile
const {readFile , writeFile} = require('fs')
console.log('start');
readFile('./pathFolder/content/first.txt','utf8', (err, value)=>{
    if (err){
        console.log(err)
        return
    }
    const first = value
    readFile('./pathFolder/content/first.txt', 'utf8', (err, value)=>{
       if (err){
        console.log(err)
        return
    }  
    const second = value
    //no encoding for writing files
    writeFile('./pathFolder/content/noAsync.txt',  
    `value: of first ${first} &  second- ${second}`,(err, value)=>{
         if (err){
        console.log(err)
        return
    } 
    console.log('done with this task');
    })
    })
})
console.log('starting a new file');
