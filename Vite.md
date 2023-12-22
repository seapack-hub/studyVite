
vite官网：[Vite中文网](https://vitejs.cn/)
## 为什么使用Vite?
Vite可以解决大型应用中构建工具需要很长时间才能启动开发服务器（让项目跑起来）的问题，提高项目启动效率。
## Vite与Webpack的区别
### 启动服务器过程不同
Webpack启动服务器是是**先遍历依赖，然后打包，最后启动服务器**，其过程如图所示：<br />
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35619076/1702822739043-040440d6-a64d-42fc-a2ee-3496d151ba85.png#averageHue=%23eeecea&clientId=u92161aa6-1264-4&from=paste&height=374&id=u1ae00205&originHeight=468&originWidth=836&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=40878&status=done&style=none&taskId=u73c91aaa-edd0-44a1-a710-251c4152dda&title=&width=668.8)<br />它是先通过入口文件（entry）遍历所需的依赖然后将其打包成Bundle.js文件，之后才启动服务器。<br />这样做就会带来一个问题：**当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍，基于这种方式打包的话需要遍历所有依赖，耗时会很久，也就导致启动会非常慢。**

但Vite则避免了这个问题，它先启动服务器，然后按需加载相关的依赖，如下图所示：<br />
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35619076/1702823412416-f1561f37-80db-46f6-bf42-92714318e9f1.png#averageHue=%23e3e2e0&clientId=u92161aa6-1264-4&from=paste&height=381&id=u4ee3bb28&originHeight=476&originWidth=837&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=44727&status=done&style=none&taskId=uedff91c7-b115-4cca-8f1f-419e16fdc56&title=&width=669.6)<br />Vite 通过在一开始将应用中的模块区分为 **依赖** 和 **源码** 两类，改进了开发服务器启动时间。

- **依赖**：大多为在开发时不会变动的纯 JavaScript。
- **源码**：通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）。

Vite是**直接启动服务器，然后在浏览器请求源码时进行转换并按需提供源码，就是根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理**。不会遍历所有的依赖文件，节省了时间。
## Vite脚手架与Vite的区别
Vite脚手架(create-vite)和Vite对于初学者而言很容易把它们弄混，它们虽然是同一个团队开发的，但却是不同的东西。<br />Vite脚手架与Vite的关系就和**Vue-cli和webpack**的关系一样。Vite脚手架是**自动帮助我们构建项目的工具**，而Vite是**构建工具。**<br />我们可以**通过Webpack，Vite等构建工具从零开始构建一个项目**，但在实际的开发过程中是不现实的，这样操作太繁琐了。于是开发团队对构建工具进行二次封装产生了对应的脚手架(create-vite,Vue-cli)，通过这些脚手架可以自动帮助我们构建一个完整的项目，而不需要我们通过构建工具一步步构建项目。<br />比如通过Vue-cli构建的Vue项目里面自动配置了webpack。<br />总结一下：**Vite脚手架是对Vite构建工具的二次封装，帮助我们自动构建项目。**
## 安装
```javascript
//全局安装
npm install vite -g
```
Lodash 是 JavaScript 社区最出名的一个工具库，提供了许多高效、高兼容性的工具函数。