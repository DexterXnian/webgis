
//let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");



if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

let myImage = document.querySelector("img");
let imageArray = ["images/index.png", "images/index2.png"];
let currentIndex = 0;

myImage.onclick = function () {
  currentIndex = (currentIndex + 1) % imageArray.length;
  myImage.setAttribute("src", imageArray[currentIndex]);
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


// window.onbeforeunload = function () {
//   // 在页面关闭前清除 localStorage 中的名字数据
//   localStorage.removeItem("name");
//   e.returnValue = "你确定要离开吗？";
// };


button1.onclick = function () {
  setUserName();
};


button2.onclick = function () {
  window.location.href = "map.html";
};
