export const parser = (url) => {
    try {
        const params = url.split("/shorts/")
        const videoId = params[1].split("?")
        return videoId[0]
    }
    catch (error) {
        throw new Error("Erro ao parsear a url.")
    }
    
    
}
