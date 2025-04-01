let points = [0, 1, 2, 3, 4];
function submission()
{
    let question1 = document.getElementsByName("Question 1");
    let question2 = document.getElementsByName("Question 2");
    checkQuestion(question1, false)
    console.log(points);
    console.log(getResults(points));
// let fColor = document.getElementById(q3)
// console.log(fColor);

//resets points
points = [0, 1, 2, 3, 4];
};

function checkQuestion(question, isRadio)
{
    let answer = "";
    let x = 0;
    do{
        if(question[x].checked)
        {
            answer = question[x].value;
            points[x] += 100;
            console.log(question[x] +": "+ points[x]);
            if(isRadio)
                return answer; 
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
        case 3: return "Eevee";
        case 4: return "Pikachu";
        default: return "Error";
    }
}