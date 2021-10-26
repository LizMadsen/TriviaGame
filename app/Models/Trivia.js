

export class Trivia {
    constructor(data) {
        console.log(data)
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }
    get Template() {
        return `
                <h5 class="card-title align-font-center">Question</h5>
                <p class="card-text">${this.question}</p>
                <a href="#" class="btn btn-primary my-3">${this.correctAnswer}</a><p>
                <a href="#" class="btn btn-primary">${this.incorrectAnswer[0]}</a><p>
                <a href="#" class="btn btn-primary">${this.incorrectAnswer[1]}</a><p>
                <a href="#" class="btn btn-primary">${this.incorrectAnswer[2]}</a>
        `
    }
}