// //get modal element
// var modal = document.getElementById('simpleModal');
// // get open modal button 
// var modalBtn = document.getElementById('modalBtn');
// // get close modal
// var closeBtn = document.getElementsByClassName('closeBtn')[0];
// // get close modal from the down
// var btnBata = document.getElementById('btnBata');
// // listen for open click
// modalBtn.addEventListener('click', openModal);

// // listen for close click
// closeBtn.addEventListener('click', closeModal);

// // listen for outside click
// window.addEventListener('click', outsideClick);

// // close modal from down
// btnBata.addEventListener('click', downClose);

// // function open modal
// function openModal(){
//     modal.style.display = 'block';
// }

// // function to close modal
// function closeModal(){
//     modal.style.display = 'none';
// }

// // function close down
// function downClose() {
//     modal.style.display = 'none';
    
// }

// // function to close outside modal

// function outsideClick(z) {
//     if(z.target == modal){
//         modal.style.display = 'none';
//     }
    
// }




var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var btnBata = document.getElementById('btnBata');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeWindow);
btnBata.addEventListener('click', closeDown);

function openModal() {
modal.style.display = 'block';    
}

function closeModal() {
    modal.style.display = 'none';
}

function closeWindow(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        
    }
    
}

function closeDown() {
    modal.style.display = 'none';
    
}

