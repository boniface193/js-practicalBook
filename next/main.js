var inpTest = document.querySelector('.inpTest')
var inpSubmit = document.querySelector('.inpSubmit')
var change = document.querySelector('.change')

inpSubmit.addEventListener('click', function(){
    var li = document.createElement('li')
    li.innerText = inpTest.value
    change.appendChild(li)
    document.body.appendChild(change)
})
