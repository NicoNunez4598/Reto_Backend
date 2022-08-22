import { Schema } from "mongoose";
import { connectDBProcess } from "../../mongo";

export const VideoStatusProcess = {
    INIT: 'INICIO',
    END: 'FIN',
    ERR: 'ERROR'
}

const TikTokVideoSchemas = new Schema({
    tikTokId: {type: Schema.Types.ObjectId}
})

const VideoReelSchema = new Schema({
    lastStatusOfProcess: {type: String, enum: VideoStatusProcess},
    srcLink: {type: String},
    tikTokVideos: [TikTokVideoSchemas]
}, {timestamps: true})

const VideoReelModel = connectDBProcess.model('VideoReels', VideoReelSchema)

export default VideoReelModel