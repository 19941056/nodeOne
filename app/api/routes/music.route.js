const express=require('express');
const router=express.Router();
const {isAuth}=require('../../../middlewares/auth.middleware');

 const {createMusic, getAllMusic, getMusicById}=require('../controllers/music.controller');

 router.post('/create',[isAuth],createMusic);
 router.get('/', getAllMusic);
 router.get('/:musicId', [isAuth],getMusicById);

 module.exports=router;


