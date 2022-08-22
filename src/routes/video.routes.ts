import { Response, } from 'restify';
import { Router, } from 'restify-router';
import videoController from '../controllers/video.controllers';

const router = new Router();

router.get('/execute', async (req, res): Promise<Response> => {
  try {
    await videoController.executeProcessToBuildReel()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.get('/ffmpeg', async (req, res): Promise<Response> => {
  try {
    await videoController.testingFfmpeg()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/cutvideo', async (req, res): Promise<Response> => {
  try {
    const {nameVideo, startTime, endTime, numberCpusAvailables} = req.body
    console.log("🚀 ~ file: video.routes.ts ~ line 28 ~ router.get ~ nameVideo", nameVideo)
    await videoController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

export default router;