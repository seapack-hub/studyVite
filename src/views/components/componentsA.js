//引入样式
// import './componentA.css'
import componentModule from './componentA.module.css'

console.log('css模块化：',componentModule)
//1.创建一个div元素
let div = document.createElement('div');

//2.给div元素添加一个类名并设置文本
// div.classList.add('footer');
div.classList.add(componentModule.footer);
div.classList.add(componentModule.footerName);
div.innerText = 'componentA'

//3.将div添加到body上
document.body.appendChild(div);