var fs = require('fs');
let components = []
const files = fs.readdirSync('./images')
files.forEach(function (item, index) {
    if(item !=='shadow' || item !=='video' ||item !=='hand' ){
        components.push({"number":index,"image_name":item})
    }
})
let str = JSON.stringify(components)
 fs.writeFile('./imagesname.json',str,function(err){
 if (err) {res.status(500).send('Server is error...')}
})