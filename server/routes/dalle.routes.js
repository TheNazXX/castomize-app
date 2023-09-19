import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: "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"
});


const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.status(200).json({message: "Hello form Dall.E 2.0"})
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
    });

    
    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})


export default router;