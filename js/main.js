/**********************************文档区*****************************************/
var text1=`/*
* 大家好，我是郑麒。
* 下面我来简单介绍一下我自己。
* 但是文字介绍过于单调。
* 今天，来点不一样的。
* 来做一个动态简历。
* 当然喽，我不太了解前端的技术，所以这个是从GitHub上下载下来的。
* 小郑在此感谢GitHub上各路的大佬们了。
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* 这样太单调了，给代码来点颜色 */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 在加上动态阴影吧 */
#code{
  animation: glow 800ms ease-out infinite alternate;
}

/* 现在正式开始 */

/* 我需要一张白纸 */
#paper {
  position: fixed;
  right: 0;
  width: 48%;
  height: 100vh;
  padding: 16px;
  background: #ccc;
}
#paper>.content{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* 于是我就可以在白纸上写字了，请看右边 */

`;

var text2=`# 自我介绍

郑麒
----
23岁，图形学几何处理方向的研究生，两年C++经验，参与过两个项目。
有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、行动派，喜欢将算法落地。
酷爱水果、喜欢散步，偶尔篮球和游戏，库里球迷

<br/>


技能
----
* 几何算法
* 渲染
* CAD模型显示
* 开源爱好者

技术及语言
----
  - **编程语言**: C++、python
  - **几何引擎**: OpenCasCade
  - **渲染引擎**: Vulkan/VulkanSceneGraph
  - ** 前端框架**: Qt、Imgui
  - **OS**: Windows
  - **Others**: Git、Visio、PPT

教育经历
----
1. 2019~2023 山东大学物理系学士
2. 2023~至今 山东大学软件工程硕士

工作经历
----
还没有捏，等硕士毕业吧


项目
----
1. CAD智能编辑
2. CAD模型查看器
3. PCB三维渲染
4. 搭建的个人主页以及动态简历

链接
----

* [技术博客](https://htl309.github.io/)
* [GitHub](https://github.com/htl309)
* [码云](https://gitee.com/htl309)
* [CSDN](https://blog.csdn.net/qq_46348003)



联系我
----
* 联系QQ：**963385291** 
* 主要涉及技术：**几何建模**、**Qt开发**、**Vulkan渲染**、**开源爱好者**、**C++** 

> 做着玩的，五一节的放松活动，图一乐，当然我也希望简历能更加丰富
`;

var text3=`
/* 由于使用的是Mmarkdown格式 */
/* 需要转换为Html */

/*
* 接下来使用一个优秀的库
* 将我们的Mmarkdown转换为Html
*/

`;
var text4=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

/**********************************执行代码区*****************************************/
writeLeft(()=>{
  qx(()=>{
      createPaper(()=>{
      writeRight(()=>{
        mdHtml(()=>{
          md(()=>{
            end()
          })
        })
      })
    })
  })
})




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },10)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },10)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },10)
}
