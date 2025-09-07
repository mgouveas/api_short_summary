import ytdl from '@distube/ytdl-core'
import fs from 'fs'
import path from 'path'
import { parser } from './parser.js'


export const download = (url) => {
    console.log("Parseando url.")
    const videoId = parser(url)
     
    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log("Iniciando o download do vídeo: " + videoURL)

    // Garante que a pasta tmp existe
    const dir = path.join(process.cwd(), 'tmp')
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    console.log("Realizando download do vídeo.")
    ytdl(videoURL, {quality: 'lowestaudio', filter: "audioonly"})
    .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        if(seconds > 60){
            throw new Error("Vídeo não encontrado. Verifique o link inserido.")
        }
    })
    .on("end", () => {
        console.log("Download do vídeo finalizado.")
    })
    .on("error", (error) => {
        console.log("Não foi possível fazer o download do vídeo. Detalhes do erro:", error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}