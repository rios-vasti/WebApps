
let bluMacaw = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
let rainforest = new Image();
let imageX = 0; 
let imageY = 0; 
let imageH = 446;
let imageW = 400;
let motion = 5;
let numFrame = 0; 
let images = []
function init()
{
  for (let i = 0; i < 10; i++)
  {
    bluMacaw[i].src = 'images/macawAnimation/frame'+ i + '.png' 
    rainforest.src = 'images/rainforest.png'
    // console.log(bluMacaw[i]);

  }
  //bluMacaw.src = 'macawAnimation/frame0.png' 
  
}

function keys(){
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 87) { //up
      if (imageY  > 0){
        imageY = imageY - motion;
        // console.log("up pressed"); 
        // console.log(imageY); 
      } 
      // imageY = imageY - motion;
      // console.log(imageY); 
    }
    else if (event.keyCode == 83) { //down
      if (imageY + imageH < canvas.height){
      imageY = imageY + motion;
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
  }  }, 50);

function draw() {
  // console.log(numFrame); 

  let canvas = document.getElementById('canvas');
  if (canvas.getContext) 
  {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(0, imageY, 40, 24);
    //ctx.drawImage(rainforest, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bluMacaw[numFrame], 0, imageY);
    window.requestAnimationFrame(draw);

  }
  

}


init();