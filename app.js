const { log } = require('console');
const fs = require('fs');

// fs.writeFile('stellar.txt',"Exple text",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File successfully created;");
//         fs.readFile('stellar.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(file);
//             }
//         })
//     }
// });

// fs.rename('stellar.txt','stellar2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully renanmed file");
//     }
// });

// fs.appendFile('stellar2.txt',"Modify data...",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Appended Data");
//     }
// })

// fs.unlink('stellar2.txt',(err)=>{
    // if(err){
    //              console.log(err);
    //        }else{
    //            console.log("Deleted Data!");
    //          }
// })

// fs.mkdir('dir4',(err)=>{
//     if(err){
//         console.log(err);
//   }else{
//       console.log("Deleted Data!");
//     }
// })

// fs.rmdir('dir4',(err)=>{
//     if(err){
//         console.log(err);
//   }else{
//       console.log("Deleted Data!");
//     }
// })
// fs.readdir('./',(err,files)=>{
//     if(err){
//         console.log(err);
//   }else{
//       console.log(files);
//     }
// })


const readStream = fs.createReadStream('./index.js');
const writeStream = fs.createWriteStream('./example2.txt');
// readStream.on('data',(buffer)=>{
//     writeStream.write(buffer);
// });
readStream.pipe(writeStream);

