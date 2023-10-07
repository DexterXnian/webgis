
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/index.png") {
        myImage.setAttribute("src", "images/index2.png");
    } else {
        myImage.setAttribute("src", "images/index.png");
    }
};


function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  

window.onbeforeunload = function() {
    // 在页面关闭前清除 localStorage 中的名字数据
    localStorage.removeItem("name");
    e.returnValue = "你确定要离开吗？";
  };
  

myButton.onclick = function () {
    setUserName();
};


