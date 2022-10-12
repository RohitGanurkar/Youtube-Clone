import express from "express" ;
import {verifyToken} from '../verifyToken.js'
import { addVideo, addView, deleteVideo, getByTags, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo )

//update a video
router.put("/:id", verifyToken, updateVideo )

//delete a video
router.delete("/:id", verifyToken, deleteVideo )

//get a video
router.get("/find/:id", getVideo )

//get a video
router.put("/view/:id", addView )

//get a video
router.get("/trend", trend )

//get a video
router.get("/random", random )

//get a video
router.get("/sub", verifyToken , sub )
//get a video

router.get("/tags" , getByTags )
//get a video

router.get("/search" , search )

export default router;
