const box=document.querySelector(".box");
const input = document.querySelector('input');

function showUserInput()
{
    if(input.value=="")
        return;
    newUserDiv(input.value);
    newBotDiv(BotReply());
    input.value="";
    scrollToTop();
}


function newBotDiv(msg)
{
    const div = document.createElement('div');
    const span= document.createElement('span');

    div.setAttribute('class','textDiv');
    span.setAttribute('class','bot');

    span.textContent = msg;

    div.appendChild(span);
    box.appendChild(div);
}

function newUserDiv(msg)
{
    const div = document.createElement('div');
    const span= document.createElement('span');

    div.setAttribute('class','textDiv userDiv');
    span.setAttribute('class','user');

    span.textContent = msg;

    div.appendChild(span);
    box.appendChild(div);
}
function BotReply()
{
    const Userinput = input.value.toLowerCase()  ;
    const doc =nlp(Userinput);
    if(doc.has("hi")||doc.has("hello")||doc.has("hey"))
        return "Hello, How can I help you?";
    else if(doc.has("name"))
        return "I am a simple chatbot,dont have a name yet.";
    else if(doc.has("anantha"||doc.has("create")))
        return "Anantha, is my creator.";
    else
        return "Sorry, I didn't understand that."
}

function scrollToTop() {
    box.scrollTop = box.scrollHeight;
}

const send=document.querySelector('.sendBtn');
send.addEventListener('click',showUserInput);
