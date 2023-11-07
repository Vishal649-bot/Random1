
console.log(document.getElementById('main-header').textContent);

let headertitle =  document.getElementById('main-header') 
headertitle.style.borderBottom = 'solid 3px black'

let titles = document.getElementsByClassName('title')
titles[0].style.fontWeight = 'bold'
console.log(titles[0]);

// var items = document.getElementsByClassName('list-group-item')
// items[2].style.backgroundColor = 'green'
// items[0].style.fontWeight = 'bold'
// items[1].style.fontWeight = 'bold'
// items[2].style.fontWeight = 'bold'
// items[3].style.fontWeight = 'bold'
// console.log(items);


var li = document.getElementsByTagName('li')

console.log(li);
for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'gray'
    
}