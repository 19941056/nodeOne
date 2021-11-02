const dotenv=require("dotenv");
dotenv.config();
const moongose=require("mongoose");

const mongoDb=process.env.MONGO_DB;

const connect=async()=>{
    try{
        const db=await moongose.connect(mongoDb,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        const {name,host}=db.connection;
        console.log(`Base de datos conectada ${name} en ${host}`)
    }catch(error){
        console.log('Error de conexion Db',error);

    }
}
module.exports={connect};