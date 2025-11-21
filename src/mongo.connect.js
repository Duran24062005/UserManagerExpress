import mongoose from "mongoose";
import { config } from "./config.js";


const uri = config.mongodb.cloud_uri ? config.mongodb.cloud_uri : `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;


export const connection2 = mongoose.connect(uri).then((db)=>{
    console.log(`Conexión exitosa con MongoDB`);
    console.log(uri);
    
    
}).catch((err)=>{
    console.log('Ha ocurrido un error: ' - err);
    
});