# Short Transcription

Este projeto é uma API para transcrição automática de áudios extraídos de vídeos do YouTube Shorts. Ele faz o download do áudio, converte para o formato adequado e utiliza modelos de inteligência artificial para gerar a transcrição em português.

## Funcionalidades

- Download de áudio de vídeos do YouTube Shorts.
- Conversão do áudio para o formato WAV mono 16kHz.
- Transcrição automática do áudio utilizando modelos de IA.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [@xenova/transformers](https://github.com/xenova/transformers.js)
- [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)
- [@distube/ytdl-core](https://github.com/distubejs/ytdl-core)
- [node-wav](https://github.com/rochars/node-wav)

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/mgouveas/api_short_transcription.git
   cd api_short_transcription
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```sh
   npm run server
   ```

2. Faça uma requisição POST para `http://localhost:3333/transcription` com um JSON contendo a URL do YouTube Shorts:
   ```json
   {
     "url": "https://www.youtube.com/shorts/SEU_VIDEO_ID"
   }
   ```

3. O retorno será um JSON com a transcrição:
   ```json
   {
     "transcription": "Texto transcrito do áudio."
   }
   ```

## Estrutura do Projeto

```
src/
  app/
    convert.js
    download.js
    parser.js
    transcribe.js
  server/
    main.js
tmp/
```

- `src/app/`: Lógica de download, conversão e transcrição.
- `src/server/`: Servidor Express e rotas da API.
- `tmp/`: Arquivos temporários de áudio.

## Contribuindo

Contribuições são bem-vindas! Veja o [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes.

## Licença

Este projeto está licenciado sob a licença MIT.
