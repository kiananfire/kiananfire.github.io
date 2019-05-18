let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/凉宫春日1.jpg') {
      myImage.setAttribute('src', 'images/凉宫春日1.jpg');
    } else {
      myImage.setAttribute('src', 'images/凉宫春日2.jpg');
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '我怀疑你在搞黄色，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  /*
  只读的localStorage 属性允许你访问一个Document 源（origin）的对象 Storage；
  其存储的数据能在跨浏览器会话保留。
  localStorage 类似 sessionStorage，
  但其区别在于：存储在 localStorage 的数据可以长期保留；
  而当页面会话结束——也就是说，当页面被关闭时，存储在 sessionStorage 的数据会被清除 。
  */
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;