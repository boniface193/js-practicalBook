let header = document.createElement('header')
let img = document.createElement('img')
let nav = document.createElement('nav')
let ul = document.createElement('ul')
let a = document.createElement('a')
let btn = document.createElement('button')
let info = ['Services', 'Project', 'About']

for(into of info){
    let li = document.createElement('li')
    let anchor = document.createElement('a')
    anchor.setAttribute('href','#')
    anchor.innerText = into
    li.appendChild(anchor)
    ul.appendChild(li)
}
ul.setAttribute('class', 'nav_links')
nav.appendChild(ul)
img.setAttribute('src','./img/E-COP.png')
img.setAttribute('class','logo')
img.setAttribute('alt','logo')

header.appendChild(img)
header.appendChild(nav)
a.setAttribute('href', '#')
a.setAttribute('class', 'cta')
btn.innerText = 'Contact'
a.appendChild(btn)
header.appendChild(a)
document.body.appendChild(header)
