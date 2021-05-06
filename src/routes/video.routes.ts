import { Router } from "express";
const router = Router();
import * as videoCtrl from "./videos.controller";

router.get("/videos", videoCtrl.getVideos);
router.post("/videos", videoCtrl.createVideos);
router.get("/videos/:id", videoCtrl.getVideo);
router.delete("/videos/:id", videoCtrl.deleteVideos);
router.put("/videos/:id", videoCtrl.updateVideos);

export default router;
