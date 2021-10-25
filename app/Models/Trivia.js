

export class Trivia {
    constructor(data) {
        this.question = data.question
    }
    get Template() {
        return '${this.question}'
    }
}