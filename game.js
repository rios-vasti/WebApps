
let bluMacaw = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
let rainforest1 = new Image();
let rainforest2 = new Image();
let macawPosX = 0; 
let macawPosY = 0; 
let macawH = 446;
let macawW = 400;
let motion = 10;
let numFrame = 0; 
let images = []
let backgroundH = 700;
let backgroundW = 1838-20;
let shiftBackgorund = 0;//backgroundW/2;
let shiftBackgorund2 = backgroundW;//+backgroundW/2;
let backgroundSpeed = 8; 
function init()
{
  for (let i = 0; i < 10; i++)
  {
    bluMacaw[i].src = 'images/macawAnimation/frame'+ i + '.png' 
    rainforest1.src = 'images/tropicalRainforest3.png'
    rainforest2.src = 'images/tropicalRainforest3.png'
    // console.log(bluMacaw[i]);

  }
  //bluMacaw.src = 'macawAnimation/frame0.png' 
  
}

function keys(){
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 87) { //up
      if (macawPosY  > 0){
        macawPosY = macawPosY - motion;
        // console.log("up pressed"); 
        // console.log(imageY); 
      } 
      // imageY = imageY - motion;
      // console.log(imageY); 
    }
    else if (event.keyCode == 83) { //down
      if (macawPosY + macawH < canvas.height){
      macawPosY = macawPosY + motion;
      // console.log("down pressed"); 
      // console.log(imageY); 
      }
      // imageY = imageY + motion;
      // console.log(imageY); 
    }
    }, true);
}
setInterval(function(){  
  if (numFrame < 9)
  {
    numFrame = numFrame + 1;
    
  }
  else 
  {
    numFrame = 0;
  }  

  if (shiftBackgorund > -backgroundW)//-(backgroundW)
  {
    shiftBackgorund = shiftBackgorund - backgroundSpeed;

  }
  else
  {
    shiftBackgorund = backgroundW;
    //console.log("image1: " + shiftBackgorund);
  }

  if (shiftBackgorund2 > -backgroundW)//-(backgroundW)
  {
    shiftBackgorund2 = shiftBackgorund2 - backgroundSpeed;
  }
  else 
  {
    shiftBackgorund2 = backgroundW;
    //console.log("image2: " + shiftBackgorund2);
  }  

  //console.log(shiftBackgorund, shiftBackgorund2);
}
  , 50);

function draw() {
  // console.log(numFrame); 

  let canvas = document.getElementById('canvas');
  if (canvas.getContext) 
  {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(0, imageY, 40, 24);
    //ctx.drawImage(rainforest,0, 0, canvas.width, canvas.height)
    ctx.drawImage(rainforest1, shiftBackgorund2, 0, backgroundW, backgroundH, 0, 0, backgroundW, canvas.height);
    ctx.drawImage(rainforest1, shiftBackgorund, 0, backgroundW, backgroundH, 0, 0, backgroundW, canvas.height);
    
    ctx.drawImage(bluMacaw[numFrame], 250, macawPosY);
    window.requestAnimationFrame(draw);

  }
  

}


init();