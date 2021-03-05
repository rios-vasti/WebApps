
let bluMacaw = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
let rainforest1 = new Image();
let rainforest2 = new Image();
let macawPosX = 0; 
let macawPosY = 0; 
let macawH = 446;
let macawW = 400;
let motion = 5;
let numFrame = 0; 
let images = []
let backgroundH = 240;
let backgroundW = 630;
let shiftBackgorund = backgroundW;
function init()
{
  for (let i = 0; i < 10; i++)
  {
    bluMacaw[i].src = 'images/macawAnimation/frame'+ i + '.png' 
    rainforest1.src = 'images/tropicalRainforest2.png'
    rainforest2.src = 'images/tropicalRainforest2.png'
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
  if (shiftBackgorund > 0)
  {
    shiftBackgorund = shiftBackgorund - 2;
    
  }
  else 
  {
    shiftBackgorund = backgroundW;
  }  
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
    ctx.drawImage(rainforest1, shiftBackgorund, 0, backgroundW/2, backgroundH, 0, 0, canvas.width, canvas.height);
    //ctx.drawImage(rainforest2, shiftBackgorund + backgroundW/2, 0, backgroundW/2, backgroundH, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bluMacaw[numFrame], 250, macawPosY);
    window.requestAnimationFrame(draw);

  }
  

}


init();