//style for body
var body = document.querySelector("body");
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "borderBox";



//create h1 tag 
var h6 = document.createElement("h6");
var h6_text = document.createTextNode("Image Slider");
h6.appendChild(h6_text);
var textDiv = document.querySelector("#text-div");
var text = textDiv.appendChild(h6);
text.style.color = "#fff";
text.style.position = "absolute";
text.style.fontWeight = "none";
text.style.fontSize = "40px";
text.style.textAlign = "center";
text.style.marginLeft = "105px";
text.style.marginTop = "90px";
text.style.fontFamily = 'Bebas Neue';
text.style.letterSpacing = "1px";


//style for hr tag
var hr = document.querySelector("hr");
hr.style.width = "90px";
hr.style.height = "3px";
hr.style.background = "#fff";
hr.style.border = "none";
hr.style.outline = "none";
hr.style.position = "absolute";
hr.style.marginLeft = "137px";
hr.style.marginTop = "130px";





//style for main page
var mainPage = document.querySelector("#main-page");

mainPage.style.height = "100vh";
mainPage.style.width = "100%";
mainPage.style.background = "url('google.jpg')";
mainPage.style.backgroundSize =  "cover";
mainPage.style.backgroundRepeat = "noRepeat";
  



//style for slide
var mySlide = document.querySelector("#slide-page");

mySlide.style.width = "80%";
mySlide.style.height = "420px";
mySlide.style.border = "2px solid #fff";
mySlide.style.outline = "none";
mySlide.style.borderRadius = "20px";
mySlide.style.position = "absolute";
mySlide.style.marginTop = "180px";
mySlide.style.marginLeft = "30px";
mySlide.style.padding = "5px";


//style for button 1
var myBtn = document.getElementById("buttons");
myBtn.style.display = "flex";
myBtn.style.alignItems = "center";
myBtn.style.justifyContent = "space-evenly";
myBtn.style.marginTop = "20px";


//style for button 2
var myBtn_1 = document.querySelectorAll("#buttons button")[0];
myBtn_1.style.background = "#4584ef";
myBtn_1.style.padding = "12px 35px";
myBtn_1.style.outline = "none";
myBtn_1.style.color = "#fff";
myBtn_1.style.border = "none";
myBtn_1.style.borderRadius = "7px";
myBtn_1.style.fontFamily = 'Bebas Neue';
myBtn_1.style.letterSpacing = "1px";
myBtn_1.style.fontSize = "15px";


//style for button 2
var myBtn_2 = document.querySelectorAll("#buttons button")[1];
myBtn_2.style.background = "#4584ef";
myBtn_2.style.padding = "12px 35px";
myBtn_2.style.outline = "none";
myBtn_2.style.color = "#fff";
myBtn_2.style.border = "none";
myBtn_2.style.borderRadius = "7px";
myBtn_2.style.fontFamily = 'Bebas Neue';
myBtn_2.style.letterSpacing = "1px";
myBtn_2.style.fontSize = "15px";

//event listener button 1
myBtn_1.addEventListener("mouseover",function(){
  myBtn_1.style.background = "coral";
});

myBtn_1.addEventListener("mouseout",function(){
  myBtn_1.style.background = "#4584ef";
});



//button 2 event listeener
myBtn_2.addEventListener("mouseover",function(){
  myBtn_2.style.background = "coral";
});

myBtn_2.addEventListener("mouseout", function() {
  myBtn_2.style.background = "#4584ef";
});




//slider start
var photos = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg"];
var count = 0;
var imgTag = document.querySelector("img");
imgTag.style.transition = "2s";


imgTag.addEventListener("mouseover",function(){
  imgTag.style.transform = "rotateY(180deg)";
});


imgTag.addEventListener("mouseout",function(){
  imgTag.style.transform = "rotateY(0deg)";
});


function next() {
  count++;
  imgTag.src = photos[count];
  if(count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  }
  
}



function back() {
  count--;
  imgTag.src = photos[count];
  if(count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  }
}




