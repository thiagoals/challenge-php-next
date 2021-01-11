import moment from "moment";
const fs = require("fs");
const formidable = require("formidable");
const slugify = require("slugify");
const path = require("path");

export const config={
    api: {
        bodyParser: false
    }
}

export default async (req,res) => {
    
    const timeStamp = moment().format("DD-MM-YYYY");
    fs.mkdir(`./public/${timeStamp}`, {recursive: true}, function(response){
        console.log(`Pasta criada com sucesso`);
    });

    let filePath;
    const data = await new Promise((resolve,reject)=>{
        const form = formidable({
            multiple:false,
            uploadDir:`./public/${timeStamp}`,
        })
    
        form.keepExtensions = true;
        form.keepFileName= true;
        form.on("fileBegin", function(name,file){
            filePath = path.join (`public/${timeStamp}`, slugify(file.name));
            file.path = filePath;
        });
        form.parse(req,(err,fields,files)=>{
            if(err) return reject(err);
            resolve(files);
        });
    });
    res.json(data);
}