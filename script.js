const button_heart = document.querySelector('#button_heart');
const para = document.querySelector('#para')

button_heart.onclick = showpic;

function showpic()
{
    para.innerText = "I Love You";
    console.log("Hi");
}
