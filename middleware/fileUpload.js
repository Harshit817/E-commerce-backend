//import the multer
const multer=require('multer')
//configure storage with filename and location

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../../upload/');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g, '_')+file.originalname);
        console.log(new Date().toISOString()+file.originalname);
    }
});

export const upload=multer({storage:storage});