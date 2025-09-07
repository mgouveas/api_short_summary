import cors from 'cors'
import express from 'express'

import { download } from '../app/download.js'
import { transcribe } from '../app/transcribe.js'
import { convert } from '../app/convert.js'

const app = express()
app.use(cors())

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());


app.post('/transcription', async (request, response) => {
    const url = request.body.url

    if (!url) {
        return response.status(400).json({ error: 'URL não fornecida no corpo da requisição.' });
    }

    try {
        console.log("Iniciando processo.")
        await download(url)
        const audioConverted = await convert()

        const transcription = await transcribe(audioConverted)

        return response.json({
            transcription: transcription
        })
    }
    catch (error) {
        console.log("Erro ao realizar o download do vídeo: " + error)
        return response.json({
            message: "Erro ao realizar o download do vídeo: " + error
        })
    }
})

app.listen(3333, () => console.log('Server is running on port 3333'))