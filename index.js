  //DETECTING BUTTON CLICK 
var NoOfDrumButtons=document.querySelectorAll(".drum").length;   
for(var i=0;i< NoOfDrumButtons;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
 
});
}


// DETECTING KEYBOARD PRESS

document.addEventListener("keydown",function(event){
  
     makeSound(event.key);
     buttonAnimation(event.key);
   } );


// AUDIO PLAY FUNCTION

function makeSound(key)
{
   switch(key)
  {
     case "w" :
        var audio=new Audio("tom-1.mp3");
        audio.play();
        break;
     
     case "a" :
      var audio=new Audio("tom-2.mp3");
      audio.play();
      break;

      case "s" :
         var audio=new Audio("tom-3.mp3");
         audio.play();
         break;

      case "d" :
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;

      case "j" :
               var audio=new Audio("snare.mp3");
               audio.play();
               break;

      case "k" :
                  var audio=new Audio("crash.mp3");
                  audio.play();
                  break;

       case "l" :
                     var audio=new Audio("kick-bass.mp3");
                     audio.play();
                     break;

      default: console.log(innerHTML);
  }

}

//ADD ANIMATION TO BUTTONS

function buttonAnimation(currentKey)
{

var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
 setTimeout(function(){
    activeButton.classList.remove("pressed");},100);
 

}