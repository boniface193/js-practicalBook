let title = document.createElement('title');
title.innerText = 'what is the title';
document.head.appendChild(title);

let div = document.createElement('div');
let span = document.createElement('span');
span.innerText = "your logo";
div.appendChild(span);
document.body.appendChild(div);


let ul = document.createElement('ul');
let listTerms = ["Net","Blog","Contact","About Us"];

for (first of listTerms){
    let li = document.createElement('li');
    let anc = document.createElement('a');
    anc.setAttribute('href',"#");
    anc.innerText = first;
    li.appendChild(anc);
    ul.appendChild(li);
    document.body.appendChild(ul);
}

let vid = document.createElement('div');
let formy = document.createElement('form');
let submit = document.createElement('input');
let inputy = document.createElement('select');
let labely = ["Last Name","Country"];
let inputy1 = document.createElement('input');
let inputy2 = document.createElement('input');
inputy2.innerText = "First Name";
inputy2.setAttribute('type',"text");
inputy2.setAttribute('id',"fname");
inputy2.setAttribute('name',"firstname");
inputy2.setAttribute('placeholder',"Your Name...");
formy.appendChild(inputy2);
let opic = ["Australia","Canada","USA"];
let optio = document.createElement('option');
optio.setAttribute('value',"Australia");
optio.innerText = "Australia";
let optio1 = document.createElement('option');
optio1.setAttribute('value',"Canada");
optio1.innerText = "Canada";
let optio2 = document.createElement('option');
optio2.setAttribute('value',"USA");
optio2.innerText = "USA";


for(lab of labely){
    let label = document.createElement('label');
    label.innerText = lab;
    formy.appendChild(inputy1);
    inputy1.setAttribute('type',"text");
    inputy1.setAttribute('id',"lname");
    inputy1.setAttribute('name',"lastname");
    inputy1.setAttribute('placeholder',"Your Last Name...");
    formy.appendChild(label)
}

inputy.appendChild(optio2);
inputy.appendChild(optio1);
inputy.appendChild(optio);
formy.appendChild(inputy);
formy.appendChild(submit);
submit.setAttribute('type',"submit");
submit.setAttribute('value',"Submit");
vid.appendChild(formy);
document.body.appendChild(vid);

