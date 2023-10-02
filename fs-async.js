//same as other but here we are importing only the require method and destructurign it so the we didnot have to use fs.writefile or fs.readFile instead we will use writeFile without fs

const {readFile, writeFile} = require('fs')

//Reads the contents of a file asynchronously. It takes a file path, options (optional), and a callback function that is invoked with an error and the file data.

//when we writeFile, first parameter is file name and if the file name exist then node will overwrite the data but if the file name if not there then nodejs will create a new file there and write the data inside. the other paramerete are call back function that is invoked when the write opereation is complete or if error occurs

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    writeFile('./content/madebynode.txt', `i was the text you wrote in new file and the first read data is ${first}`, (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log(result)
    })
})

//the above code is very messsy and it is called callback hell and to make this code better we can write async and await or promise

