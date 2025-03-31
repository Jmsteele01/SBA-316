let points = [0, 0, 0, 0, 0];

let question2 = document.getElementsByName("Question 2");

let answer2 = "";

console.log(question2[0].value);

let x = 0;
do{
    if(question2[x].checked)
    {
        answer2 = question2[x].value;
        points[x]++;
        break;
    }
x++;
}while(x < question2.length);

console.log(answer2);

console.log(document.getElementById("q3"));

function test()
{
    console.log("foobar");

    let x = 0;
do{
    if(question2[x].checked)
    {
        answer2 = question2[x].value;
        points[x]++;
        break;
    }
x++;
}while(x < question2.length);
console.log(answer2);
};