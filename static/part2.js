document.addEventListener("DOMContentLoaded", async function () {
    let correct_image = "https://static.vecteezy.com/system/resources/thumbnails/011/148/560/small/right-and-wrong-vector-design-illustration-isolated-on-transparent-background-free-png.png"
    let incorrect_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png"
    
    let score = 0
    //let win_message = "Good Job! Thanks for playing!"
    //let lose_message = "Nice Try! Replay the game to learn these facts."

    let button_one = document.getElementById("enter-button-one");
    let answer_one = document.getElementById("answer-one");
    button_one.addEventListener("click", async function(event){
        event.preventDefault()
        answer_one = answer_one.value
        answer_one = answer_one.toUpperCase()
        console.log(answer_one)

        let result_display = document.createElement('img')
        if (answer_one == "JUPITER") {
            result_display.src = correct_image
        }
        else{
            result_display.src = incorrect_image
        }
        document.getElementById("question-one").appendChild(result_display);
    })

    let button_two = document.getElementById("enter-button-two");
    let answer_two = document.getElementById("answer-two");
    button_two.addEventListener("click", async function(event){
        event.preventDefault()
        answer_two = answer_two.value
        answer_two = answer_two.toUpperCase()
        console.log(answer_two)

        let result_display = document.createElement('img')
        if (answer_two == "NEPTUNE") {
            result_display.src = correct_image
        }
        else{
            result_display.src = incorrect_image
        }
        document.getElementById("question-two").appendChild(result_display);
    })

    let button_three = document.getElementById("enter-button-three");
    let answer_three = document.getElementById("answer-three");
    button_three.addEventListener("click", async function(event){
        event.preventDefault()
        answer_three = answer_three.value
        answer_three = answer_three.toUpperCase()
        console.log(answer_three)

        let result_display = document.createElement('img')
        if (answer_two == "VENUS") {
            result_display.src = correct_image
        }
        else{
            result_display.src = incorrect_image
        }
        document.getElementById("question-three").appendChild(result_display);
    })

    if (score == 3){
        let score_display = document.createElement('div');
        score_display.textContent = "Good Job! Thanks for playing!";
    }
    else (score < 3){
        let score_display = document.createElement('div');
        score_display.textContent = "Nice Try! Replay the game to learn these facts.";
    }
});


