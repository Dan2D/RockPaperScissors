
      var picIndex = 0;
      var img = new Array("../images/Image1.jpg", "../images/Image2.jpg", "../images/Image3.jpg");
    var bgImg = new Array("../images/paperBG1.jpg", "../images/scissorsBG2.jpg", "../images/rockBG3.jpg")
        var Timeout = setTimeout("spin()", 100);
        var x = 100;
        var hPlay = "";
        var rockP = "3.jpg";
        var paperP = "1.jpg";
        var scissorsP = "2.jpg";
        var p = 0;
        var c = 0;
        var slideIndex = 0;
        var u = 0;
        var rndScr = document.querySelector("#scoreBoard")
            rndScr.textContent = c + " - " + p;


bgSlide();

/*Background Slideshow*/

function bgSlide() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < bgImg.length; i++) {
        slides[i].style.opacity = 0;}
    slideIndex++;
    
    if(slideIndex > bgImg.length){slideIndex = 1;}
    slides[slideIndex-1].style.opacity = 1;
    setTimeout("bgSlide()", 9000);
}

/*Score Keeper*/
    window.onload = function () {
      /*document.getElementById("cScore").innerHTML = c;
      document.getElementById("pScore").innerHTML = p;*/
        document.getElementById("scoreBoard").innerHTML = c + " - " + p;
        }
  
    
/*Spinner & Spinner Controls*/  
           function pause() { 
           u = 1;}     
         /*while(x < 50000){
            x *= 1.5;
         spin();}}*/
    
    function spin() {
         if (u == 1){
             x *= 1.1;}
        
        if(x > 400){
            score();
            return;}
        
          picIndex++;
          if (picIndex >= img.length) {
              picIndex = 0;}
          
          document.getElementById("playPic").src = img[picIndex];
            Timeout = setTimeout("spin()", x);}

  

    function resume() {
        u = 0;
        para.textContent = "";
        if (c == 3 || p == 3){
             document.querySelector('#score').textContent = "";
             para.textContent = "";
              c = 0;
              p = 0;
         rndScr.textContent = c + " - " + p;}
            if (x < 400 ){
                return;}
            x = 60 + Math.random()*20;
            spin();}


/*Function tracks players choice by last letters of src str*/

         

var rock = document.querySelector('#RockPic');
rock.addEventListener("click", hClick);
var paper = document.querySelector('#PaperPic');
paper.addEventListener("click", hClick);
var scissors = document.querySelector('#ScissorPic');
scissors.addEventListener("click", hClick);
var para = document.querySelector('p');
var scrBrd = document.querySelector('#score');


function hClick (event){
    hPlay = this.src;
}
  /*Round Response & Score Keeper*/  
  function score() {
      if(x > 400){
        hPlay = hPlay.substr(hPlay.length-5);

        var cPlay = document.querySelector("#playPic").src;
        cPlay = cPlay.substr(cPlay.length - 5);
        
    
        if(cPlay == hPlay){
            para.textContent = "It's a tie!";}
      
       else if (cPlay == rockP && hPlay == scissorsP){
          para.textContent = "You Lose! Rock smashes scissors!";
           c++;}
      else if (cPlay == rockP && hPlay == paperP){
      para.textContent = "You Win! Paper sands rock!";
          p++;}
      
      else if(cPlay == paperP && hPlay == rockP){
          para.textContent = "You Lose! Paper rubs rock!";
          c++;}
      else if (cPlay == paperP && hPlay == scissorsP){
          para.textContent = "You win! Scissors cuts paper!";
          p++;}
      
      else if (cPlay == scissorsP && hPlay == rockP){
          para.textContent = "You Win! Rock beats sicssors!";
          p++;}
      else if (cPlay == scissorsP && hPlay == paperP){
          para.textContent = "You Lose! Scissors cut Paper!"
          c++;}
      
          rndScr.textContent = c + " - " + p;
      
      if (c == 3){
          para.textContent = "GAME OVER";
          scrBrd.textContent = c + " - " + p;
          return;}
      else if (p == 3){
          para.textContent = "You Won the GAME!";
          scrBrd.textContent = c + " - " + p;
          return;}
}}


