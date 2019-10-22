var name;
var name = [];
var name2;
var userTR = document.getElementById('nameTR');

document.getElementById('form').addEventListener("submit", (e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById('form').reset();

});

function Create() {
    let storage = JSON.parse(localStorage.getItem("names"));
    name = document.getElementById("name").value;
    if(name = ''){
        alert('Write the Name');

    }else{
        if(storage == null){
            name.push(name);
            localStorage.setItem("names", JSON.stringify(names));

        }else{
            names = JSON.parse(localStorage.getItem("names"));
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names));
        }
    }
}

function Read(){
    userTR.innerHTML = '';
    names2 = JSON.parse(localStorage.getItem("names"));
    if(names2 != null){
        for(var i = 0; i < names2.length)
    }
}