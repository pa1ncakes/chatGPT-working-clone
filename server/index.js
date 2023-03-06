import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import env  from 'dotenv';
import { Configuration,OpenAIApi } from 'openai';

const app = express();

env.config();
app.use(cors());
app.use(bodyParser.json());

//configurw openai
const config = new Configuration({
    organization: "org-Fvf776t9mFUWVwR42eiSdwiM",
    apoKey: process.env.OPENAI_API_KEY
});

//listening
app.listen("3080", () => console.log("Server running on port 3080"));


//dummy route to check if server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

//post route for making requests to openai
app.post("/", async (req, res) => {
    const { message } = req.body

    try
    {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            maxTokens: 100,
            temperature: 0.5,
        })


        res.json({messafe: response.data.choices[0].value})
    
    
    }   catch(e){
        console.log(e)
        res.send(e).status(400)
    }
})