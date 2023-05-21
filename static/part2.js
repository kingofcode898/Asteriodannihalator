document.addEventListener("DOMContentLoaded", async function () {
    let correct_image = "https://static.vecteezy.com/system/resources/thumbnails/011/148/560/small/right-and-wrong-vector-design-illustration-isolated-on-transparent-background-free-png.png"
    let incorrect_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png"
    
    let button_one = document.getElementById("enter-button-one");
    let answer_one = document.getElementById("answer-one");
    button_one.addEventListener("click", async function(event){
        event.preventDefault()
        check_one = answer_one.value;
        check_one = check_one.toUpperCase();
        console.log(check_one)

        let result_display = document.createElement('img')
        if (check_one == "JUPITER") {
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
        check_two = answer_two.value
        check_two = check_two.toUpperCase()
        console.log(check_two)

        let result_display = document.createElement('img')
        if (check_two == "NEPTUNE") {
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
        check_three = answer_three.value
        check_three = check_three.toUpperCase()
        console.log(check_three)

        let result_display = document.createElement('img')
        if (check_three == "VENUS") {
            result_display.src = correct_image
        }
        else{
            result_display.src = incorrect_image
        }
        document.getElementById("question-three").appendChild(result_display);
    })
});
