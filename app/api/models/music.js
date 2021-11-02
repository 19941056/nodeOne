const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MusicSchema= new Schema(
    {
      name:{type:String,required: true },
      artist:{type:String,required:true},
      cover:{type:String,required:false},
      year:{type:Number,required:true}
    } 
  );
  const Music=mongoose.model('music',MusicSchema);
  module.exports=Music;