let truck = document.getElementById("truck");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let x = screenWidth*0.45;
let y = screenHeight;
let moveX = 0;
let moveY = 0;
let rotation = -90;
let scale = 1;
let truck_size = 1;
var truck_speed = 8;
var inter = 500;
var inter2 = 1000;
var inter3 = 5000;

function detectMobile() {
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  return isMobile;
}

window.onload = function() {
  if (detectMobile()) {
      var message = document.createElement('div');
      message.innerHTML = '<div id="mobile_message">This game is not available on mobile devices. <br> Please visit from a desktop or laptop to play. <br> Visit our <a id="website_link1" href="https://www.aaafreight.net">website</a>! <br> <br> <br> <br> <br> <br> <br> <a id="website_link2" href="https://www.aaafreight.net">AAA Freight!</a></div>';
      message.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url('images/bg.png'); background-repeat: repeat; background-position: center top; color: #000000; font-weight: bold; padding: 20px; text-align: center; font-size: 48px; z-index: 9999;";
      document.body.style.overflow = 'hidden';
      document.body.appendChild(message);
  } else {

var game = (function() {
  var score = 0;
  var level = 0;
  var img_speed = 1;
  var img_limit = 30;

  function spawnImage() {
    if (document.getElementsByTagName('img').length < img_limit) {
    var img = document.createElement('img');
    img.src = 'images/load.png';
    img.style.position = 'absolute';
    img.style.width = '1.5%';

    var randomX = Math.floor(100 + Math.random() * 1700);
    var randomY = 100;
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';

    document.body.appendChild(img);
    }

    function updatePosition() {
      var currentTop = parseInt(img.style.top, 10);
      var currentLeft = parseInt(img.style.left, 10);
      var screenHeight = window.innerHeight;
      var price = 100;
      truck_speed = 8 + game.getLevel() * 0.4;
      if (level < 50) {
      img_speed = 1 + level * 0.2;
      } else {
        img_speed = level;
        img_limit = 100
      }
      truck.style.width = (10 + level * 0.75) + '%';
      img.style.width = (1.5 + (level - 1) / 100) + '%';

      if (currentTop >= screenHeight - img.height) {
        img.remove();
      } else {
        img.style.top = (currentTop + img_speed) + 'px';

        // Check for collision with the 'truck' element
        var truckElement = document.getElementById('truck');
        var imgRect = img.getBoundingClientRect();
        var truckRect = truckElement.getBoundingClientRect();

        if (checkCollision(imgRect, truckRect)) {
          img.remove(); // Remove the image element from the DOM
          score += price;
          level = Math.floor((score/100 + 20) / 20) - 1;
          inter = 1500 / (level * 2);
          document.getElementById("level").innerHTML = "Level " + level;
          document.getElementById("score").innerHTML = "Score $" + score.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
          requestAnimationFrame(updatePosition);
        }
      }
    }
    requestAnimationFrame(updatePosition);
  }

  function spawnImage2() {
    if (document.getElementsByTagName('img').length < img_limit) {
    var img = document.createElement('img');
    console.log(score)
    img.src = 'images/load.png';
    img.style.position = 'absolute';
    img.style.width = '2.5%';

    var randomX = Math.floor(100 + Math.random() * 1700);
    var randomY = 100;
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';

    document.body.appendChild(img);
    }

    function updatePosition() {
      var currentTop = parseInt(img.style.top, 10);
      var currentLeft = parseInt(img.style.left, 10);
      var screenHeight = window.innerHeight;
      var price = 250.00;
      if (level < 50) {
      img_speed = 1 + level * 0.2;
      } else {
        img_speed = level;
        img_limit = 100
      }
      truck_speed = 8 + game.getLevel() * 0.4;
      truck.style.width = (10 + level * 0.75) + '%';
      img.style.width = (2.5 + (level - 1) / 100) + '%';

      if (currentTop >= screenHeight - img.height) {
        img.remove();
      } else {
        img.style.top = (currentTop + img_speed) + 'px';

        var truckElement = document.getElementById('truck');
        var imgRect = img.getBoundingClientRect();
        var truckRect = truckElement.getBoundingClientRect();

        if (checkCollision(imgRect, truckRect)) {
          img.remove();
          score += price;
          level = Math.floor((score/100 + 20) / 20) - 1;
          inter = 1500 / (level * 2);
          document.getElementById("level").innerHTML = "Level " + level;
          document.getElementById("score").innerHTML = "Score $" + score.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
          requestAnimationFrame(updatePosition);
        }
      }
    }
    requestAnimationFrame(updatePosition);
  }

  function spawnImage3() {
    if (document.getElementsByTagName('img').length < img_limit) {
    var img = document.createElement('img');
    console.log(score)
    img.src = 'images/load.png';
    img.style.position = 'absolute';
    img.style.width = '4%';

    var randomX = Math.floor(100 + Math.random() * 1700);
    var randomY = 100;
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';

    document.body.appendChild(img);
    }

    function updatePosition() {
      var currentTop = parseInt(img.style.top, 10);
      var currentLeft = parseInt(img.style.left, 10);
      var screenHeight = window.innerHeight;
      var price = 500.00;
      if (level < 50) {
      img_speed = 1 + level * 0.2;
      } else {
        img_speed = level;
        img_limit = 100
      }
      truck_speed = 8 + game.getLevel() * 0.4;
      truck.style.width = (10 + level * 0.75) + '%';
      img.style.width = (5 + (level - 1) / 100) + '%';

      if (currentTop >= screenHeight - img.height) {
        img.remove();
      } else {
        img.style.top = (currentTop + img_speed) + 'px';

        var truckElement = document.getElementById('truck');
        var imgRect = img.getBoundingClientRect();
        var truckRect = truckElement.getBoundingClientRect();

        if (checkCollision(imgRect, truckRect)) {
          img.remove();
          score += price;
          level = Math.floor((score/100 + 20) / 20) - 1;
          inter = 1500 / (level * 2);
          document.getElementById("level").innerHTML = "Level " + level;
          document.getElementById("score").innerHTML = "Score $" + score.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
          requestAnimationFrame(updatePosition);
        }
      }
    }
    requestAnimationFrame(updatePosition);
  }


  function checkCollision(rect1, rect2) {
    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }

  setInterval(spawnImage, inter);
  setInterval(spawnImage2, inter2);
  setInterval(spawnImage3, inter3);


  return {
    getLevel: function() {
      return level;
    },
    getScore: function() {
      return score;
    }
  };
})();

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  switch (event.key) {
    case "ArrowRight":
      if (rotation % 360 === 90) {
        rotation -= 90;
      } else if (rotation % 360 === 180) {
        rotation += 90; //180
      } else if (rotation % 360 === 270) {
        rotation += 90;
      } else if (rotation % 360 === 0) {
        rotation += 0;
      } else if (rotation % 360 === -90) {
        rotation += 90;
      } else if (rotation % 360 === -180) {
        rotation -= 90; //180
      } else if (rotation % 360 === -270) {
        rotation -= 90;
      }
      moveX = truck_speed;
      break;
    case "ArrowLeft":
      if (rotation % 360 === 0) {
        rotation += 90; //180
      } else if (rotation % 360 === 90) {
        rotation += 90;
      } else if (rotation % 360 === 180) {
        rotation += 0;
      } else if (rotation % 360 === 270) {
        rotation -= 90;
      } else if (rotation % 360 === -90) {
        rotation -= 90;
      } else if (rotation % 360 === -180) {
        rotation -= 0;
      } else if (rotation % 360 === -270) {
        rotation += 90;
      }
      moveX = -truck_speed;
      break;
    case "ArrowUp":
      if (rotation % 360 === 0) {
        rotation -= 90;
      } else if (rotation % 360 === 90) {
        rotation += 90; //180
      } else if (rotation % 360 === 180) {
        rotation += 90;
      } else if (rotation % 360 === 270) {
        rotation += 0;
      } else if (rotation % 360 === 0) {
        rotation -= 90;
      } else if (rotation % 360 === -90) {
        rotation -= 0;
      } else if (rotation % 360 === -180) {
        rotation += 90;
      } else if (rotation % 360 === -270) {
        rotation -= 90; //180
      }
      moveY = -truck_speed;
      break;

    case "ArrowDown":
      if (rotation % 360 === 0) {
        rotation += 90;
      } else if (rotation % 360 === 90) {
        rotation += 0;
      } else if (rotation % 360 === 180) {
        rotation -= 90;
      } else if (rotation % 360 === 270) {
        rotation += 90; //180
      } else if (rotation % 360 === 0) {
        rotation += 90;
      } else if (rotation % 360 === -90) {
        rotation += 90; //180
      } else if (rotation % 360 === -180) {
        rotation -= 90;
      } else if (rotation % 360 === -270) {
        rotation -= 0;
      }
      moveY = truck_speed;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      moveX = 0;
      break;
    case "ArrowRight":
      moveX = 0;
      break;
    case "ArrowUp":
      moveY = 0;
      break;
    case "ArrowDown":
      moveY = 0;
      break;
  }
});

function update() {
  x += moveX;
  y += moveY;

  if (x < 0) {
    x = 0;
  }
  if (x > 1920 - truck.offsetWidth) {
    x = 1920 - truck.offsetWidth;
  }
  if (y < 0) {
    y = 0;
  }
  if (y > 800 - truck.offsetHeight) {
    y = 800 - truck.offsetHeight;
  }
  if (y < 1 - truck.offsetHeight) {
    y = 1 - truck.offsetHeight;
  }

  truck.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scaleX(${scale})`;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);

const inactivityDuration = 1000;
let cursorTimeout;

function hideCursor() {
  document.body.classList.add('hidden-cursor');
}

function showCursor() {
  document.body.classList.remove('hidden-cursor');
}

function resetCursorTimer() {
  clearTimeout(cursorTimeout);
  showCursor();
  cursorTimeout = setTimeout(hideCursor, inactivityDuration);
}

document.addEventListener('mousemove', resetCursorTimer);
document.addEventListener('mousedown', resetCursorTimer);
document.addEventListener('keypress', resetCursorTimer);

cursorTimeout = setTimeout(hideCursor, inactivityDuration);

var element = document.getElementsByTagName('h3')[0];

document.addEventListener('keydown', function(event) {
  element.remove();
});
}
};
