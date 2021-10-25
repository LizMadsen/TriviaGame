import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { api } from "./AxiosService.js"

class TriviasService {
    constructor() {
        console.log('Trivia Service loaded!')
    }

    async getTrivia(url = 'trivia') {
        console.log('service: getting the trivia');

        const response = await api.get(url)
        console.log('api getTrivia response', response.data)

        ProxyState.trivia = Response.data.results.map(t => new Trivia(t))
    }

}

export const triviasService = new TriviasService()