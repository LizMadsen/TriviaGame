

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
                <p class="card-text">Question Content</p>
                <a href="#" class="btn btn-primary my-3">Answer1</a><p>
                <a href="#" class="btn btn-primary">Answer2</a><p>
                <a href="#" class="btn btn-primary">Answer3</a><p>
                <a href="#" class="btn btn-primary">Answer4</a>
            </div>
        `
    }
}