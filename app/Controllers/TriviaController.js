import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";

function _draw() {
    let trivia = ProxyState.trivia
    let template = ''
    trivia.forEach(t => template += t.Template)
    document.getElementById('app').innerHTML = template
}

export class TriviaController {
    constructor() {
        console.log("trivia controller loaded")
        ProxyState.on('trivia', _draw)
        this.getTrivia()
    }

    async getTrivia(url) {
        try {
            await triviasService.getTrivia(url)
            console.log('controller: get trivia finished');
        }
        catch (error) {
            console.error('error error error', error)
        }
    }
}