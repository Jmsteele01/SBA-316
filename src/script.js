const opening = document.body.querySelector(".opening");
let title = document.createElement("h1");
let description = document.createElement("p");

opening.appendChild(title);
opening.appendChild(description);

title.textContent = "Pokemon Starter Quiz!"
description.textContent = "Which Kanto starter are you?"

document.getElementById("submit_btn").addEventListener("click", submission);
document.getElementById("reset_btn").addEventListener("click", resetQuiz);

const results = document.body.querySelector(".results");
let userPkm = document.createElement("h1");

results.appendChild(userPkm);

function submission()
{
    let points = [0, 0, 0]; //points for bulbasaur, charmander, and squirtle in that order
    let question1 = document.getElementsByName("Question 1");
    let question2 = document.getElementsByName("Question 2");

    //gets answers to first question and adds points
    checkQuestion(question1, points);

    //gets answers to second question and adds points
    checkQuestion(question2, points);

    //gets the value of the chosen color and distrubtes points based on selection
    let fColor = document.getElementById("q3");
    checkColor(fColor.value, points);

    //shows the user what pokemon they are
    showResults(getResults(points));

    //changes the background to selected color from q3
    document.body.style.backgroundColor = fColor.value;
};

function checkQuestion(question, score)
{    let x = 0;
    do{
        if(question[x].checked)
        {
            switch (question[x].value)
            {
                case "b": score[0]+=150;
                break;
                case "c": score[1]+=150;
                break;
                case "s": score[2]+=150;
                break;
                default: console.log("No valid input");
            }
        }
    x++;
    }while(x < question.length);
};

function getResults(finalScores)
{
    let result = 0;
    let highScore = 0;
    for(let x = 0; x < finalScores.length; x++)
    {
        if(highScore < finalScores[x])
        {
            highScore = finalScores[x];
            result = x;
        }
    }
    
    switch(result)
    {
        case 0: return "Bulbasaur";
        case 1: return "Charmander";
        case 2: return "Squirtle";
        default: return "Missingno";
    }
}

function checkColor(colorSelect, score)
{
    let r = parseInt(colorSelect.substring(1, 3), 16);
    let g = parseInt(colorSelect.substring(3, 5), 16);
    let b = parseInt(colorSelect.substring(5, 7), 16);

    console.log(r);

    score[0] += g;
    score[1] += r;
    score[2] += b;
}

function resetQuiz()
{
    document.body.style.removeProperty("background-color");
    results.firstChild.textContent = "";
}

function showResults(winner)
{
    results.firstChild.textContent = "You are a "+winner+"!";
}