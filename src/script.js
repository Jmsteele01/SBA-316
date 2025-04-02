const opening = document.body.querySelector(".opening");
let title = document.createElement("h1");
let description = document.createElement("p");

opening.appendChild(title);
opening.appendChild(description);

title.textContent = "Pokemon Starter Quiz!"
description.textContent = "Which Kanto starter are you?"

// opening.textContent = "Waaaa";

// const setText = document.body.querySelector("#set-text");
// setText.addEventListener("click", () => {
//   story.textContent = "It was a dark and stormy night...";
// });

// const clearText = document.body.querySelector("#clear-text");
// clearText.addEventListener("click", () => {
//   story.textContent = "";
// });

// let body = document.querySelector('body');

// let div1 = document.createElement('div');
// let div2 = document.createElement('div');

// body.appendChild(div1);
// body.appendChild(div2);

// let ordered = document.createElement('ol');
// let unordered = document.createElement('ul');

// div1.appendChild(ordered);
// div2.appendChild(unordered);

// function createListItems(parent, num)
// {
//     for(let i =0; i < num; i++)
//     {
//         let newLI = document.createElement('li');
//         parent.appendChild(newLI);

//     }
// }

// createListItems(ordered, 3);
// createListItems(unordered, 5);

document.getElementById("submit_btn").addEventListener("click", submission);

function submission()
{
    let points = [0, 0, 0];
    let question1 = document.getElementsByName("Question 1");
    let question2 = document.getElementsByName("Question 2");
    checkQuestion(question1, points);
    console.log(points);
    checkQuestion(question2, points);
    let fColor = document.getElementById("q3");
    checkColor(fColor.value, points);
    console.log(getResults(points));

    console.log(points);

    //resets points
   //points = [0, 0, 0];

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