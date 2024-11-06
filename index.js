function showUserInput()
{
    const box=document.querySelector(".box");
    const input = document.querySelector('input');
    const userInput =input.value;
    const tx = document.createElement('div');
    tx.setAttribute('class','tx');
    const span = document.createElement('span');
    span.classList.add('user');
    span.classList.add('textBox');


    span.textContent = userInput;
    tx.appendChild(span);
    box.appendChild(tx);

    const tx1 = document.createElement('div');
    tx1.setAttribute('class','tx');
    const span1 = document.createElement('span');
    span1.classList.add('bot');
    
    // userInput=userInput.toLowerCase();
    if(userInput.includes("hello")||userInput.includes("hi")||userInput.includes("hey"))
    {
        span1.textContent = randomGreet();
    }
    tx1.appendChild(span1);
    box.appendChild(tx1);
    input.value="";
}

// function showBotReply()
// {
//     const input = document.querySelector('input');
//     const userInput =input.value;
    
// }
function randomGreet()
{
    const x =Math.floor(Math.random()*5);
    switch(x)
    {
        case 1:
            return "go fuck your self";
        case 2:
            return "Hello how can I help you";
        case 3:
            return "Hi need any help?";
        case 4:
            return "Hey how is your day going";
        default: return "sorry busy";
    }

}

const send=document.querySelector('.span');
send.addEventListener('click',showUserInput);

// send.addEventListener("click",showBotReply);