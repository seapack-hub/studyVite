import "./componentB.css"
//1.创建一个div元素
let div = document.createElement('div');

//2.给div元素添加一个类名并设置文本
div.classList.add('footer');
div.innerText = 'componentB';

//3.将div添加到body上
document.body.appendChild(div);