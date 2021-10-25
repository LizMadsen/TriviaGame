

export class Trivia {
    constructor(data) {
        this.question = data.question
        this.correctAnswer = data.correctAnswer
        this.incorrectAnswer = data.incorrectAnswer
    }
    get Template() {
        return `
            < div class="card-body" >
                <h5 class="card-title">Question</h5>
                <p class="card-text">${this.question}</p>
                <a href="#" class="btn btn-primary my-3">${this.correctAnswer}</a><p>
                <a href="#" class="btn btn-primary">${this.correctAnswer}</a><p>
                <a href="#" class="btn btn-primary">${this.incorrectAnswer}</a><p>
                <a href="#" class="btn btn-primary">${this.correctAnswer}</a>
            </div>
        `
    }
}