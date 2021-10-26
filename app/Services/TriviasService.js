import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { api } from "./AxiosService.js"

class TriviasService {
    constructor() {
        console.log('Trivia Service loaded!')
    }

    async getTrivia() {
        console.log('service: getting the trivia');

        const response = await api.get(api.baseURL)
        console.log('api getTrivia response', response.data)

        ProxyState.trivia = response.data.results.map(t => new Trivia(t))

    }

}

export const triviasService = new TriviasService()