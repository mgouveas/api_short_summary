import cors from 'cors'
import express from 'express'

import { download } from '../app/download.js'

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
        console.log("iniciando donwload do Vídeo")
        await download(url)
        response.json({
            message: "Download do vídeo realizado com sucesso!"
        })
    }
    catch (error) {
        console.log("Erro ao realizar o download do vídeo: " + error)
        response.json({
            message: "Erro ao realizar o download do vídeo: " + error
        })
    }
})

app.listen(3333, () => console.log('Server is running on port 3333'))