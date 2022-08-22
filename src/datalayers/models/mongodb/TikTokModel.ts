import { Schema } from "mongoose";
import { connectDBProcess } from "../../mongo";

const TikTokSchema = new Schema({
    videoLink: {type: String},
    src: {type: String}
}, {timestamps: true})

const TikTokModel = connectDBProcess.model('TikTok', TikTokSchema)

export default TikTokModel