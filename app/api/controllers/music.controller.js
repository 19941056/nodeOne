const Music =require('../models/music');
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createMusic=async(req,res,next)=>{
    try{
        const newMusic = new Music();
        newMusic.name=req.body.name;
        newMusic.artist=req.body.artist;
        newMusic.cover=req.body.cover;
        newMusic.year=req.body.year;
        const MusicDb=await newMusic.save();
        return res.json({
            status:201,
            message: HTTPSTATUSCODE[201],
            data:{music:MusicDb.name}
        })
    }catch (error){
        return next(error)
    }
}

const getAllMusic=async(req,res,next)=>{
    try {
        // Si no pasais paginación por query params quitar el if
            const musics= await Music.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { music: musics }
            });
       
    } catch (error) {
        return next(error)
    }
}

const getMusicById=async(req,res,next)=>{
    try{
        const {musicId}=req.params;
        const   musicById=await Music.findById(musicId);
        return res.json({
            status:200,
            data:{music: musicById}
        })
    }catch(error){
        return next(error)
    }
}

module.exports={createMusic,getAllMusic,getMusicById};