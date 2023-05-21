document.addEventListener("DOMContentLoaded", async function () {
    let correct_image = document.getElementById("correct-picture");
    let incorrect_image = document.getElementById("incorrect-picture")

    let button = document.getElementById("enter-button");
    let answer = document.getElementById("answer");
    button.addEventListener("click", async function(event){
        event.preventDefault()
        answer = answer.value
        answer = answer.toUpperCase()
        console.log(answer)
        
        if (answer == "JUPITER") {
            let results = await fetch('http://127.0.0.1:5000/sample_image',{
                methods: 'GET'
            });
            decoded = await results.json()
            button.addEventListener("click", async function(event){
                correct_image.src = decoded
		        correct_image.style.height = "auto"
                correct_image.style.width = "800px"
            })
            
        }
    })

    /*
    let results = await fetch('http://127.0.0.1:5000/sample_image',{
        methods: 'GET'
    });
    decoded = await results.json()
    answer.addEventListener("click", async function(event){
        image.src = decoded
		image.style.height = "auto"
        image.style.width = "800px"
    })
    */
});


