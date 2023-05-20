let truck = document.getElementById("truck");
let x = 800;
let y = 750;
let moveX = 0;
let moveY = 0;
let rotation = -90;
let scale = 1;
let truck_size = 1;
var truck_speed = 8;
var inter = 500;
var inter2 = 1000;
var inter3 = 5000;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function detectMobile() {
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  return isMobile;
}

window.onload = function() {
  if (detectMobile()) {
      var message = document.createElement('div');
      message.innerHTML = '<div>This game is not available on mobile devices. Please visit from a desktop or laptop to play. Visit our <a href="https://www.aaafreight.net">website!</a>.</div>';
      message.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url('images/bg.png'); background-repeat: no-repeat; color: #fff; padding: 20px; text-align: center; font-size: 24px; z-index: 9999;";
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      document.body.appendChild(message);
  } else {

var game = (function() {
  var score = 0;
  var level = 1;
  var img_speed = 1;

  function spawnImage() {
    var img = document.createElement('img');
    img.src = 'images/load.png'; // Replace with the path to your image
    img.style.position = 'absolute';
    img.style.width = '1.5%';

    // Set the random position
    var randomX = Math.floor(100 + Math.random() * 1700);
    var randomY = 100;
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';

    // Append the image to the body
    document.body.appendChild(img);

    function updatePosition() {
      var currentTop = parseInt(img.style.top, 10);
      var currentLeft = parseInt(img.style.left, 10);
      var screenHeight = window.innerHeight;
      var price = 100;
      truck_speed = 8 + game.getLevel() * 0.4;
      img_speed = 1 + level * 0.2;
      truck.style.width = (15 + level / 2) + '%';
      img.style.width = (1.5 + (level - 1) / 100) + '%';

      // Check if the image has reached the bottom of the screen
      if (currentTop >= screenHeight - img.height) {
        img.remove(); // Remove the image element from the DOM
      } else {
        img.style.top = (currentTop + img_speed) + 'px'; // Update the position

        // Check for collision with the 'truck' element
        var truckElement = document.getElementById('truck');
        var imgRect = img.getBoundingClientRect();
        var truckRect = truckElement.getBoundingClientRect();

        if (checkCollision(imgRect, truckRect)) {
          img.remove(); // Remove the image element from the DOM
          score += price;
          level = Math.floor((score/100 + 20) / 20);
          inter = 1500 / (level * 2);
          document.getElementById("level").innerHTML = "Level " + level;
          document.getElementById("score").innerHTML = "Score $" + score.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
          requestAnimationFrame(updatePosition); // Call the function again for the next animation frame
        }
      }
    }
    requestAnimationFrame(updatePosition);
  }

  function spawnImage2() {
    var img = document.createElement('img');
    console.log(score)
    img.src = 'images/load.png'; // Replace with the path to your image
    img.style.position = 'absolute';
    img.style.width = '2.5%';

    // Set the random position
    var randomX = Math.floor(100 + Math.random() * 1700);
    var randomY = 100;
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';

    // Append the image to the body
    document.body.appendChild(img);

    function updatePosition() {
      var currentTop = parseInt(img.style.top, 10);
      var currentLeft = parseInt(img.style.left, 10);
      var screenHeight = window.innerHeight;
      var price = 250.00;
      img_speed = 1 + level * 0.2;
      truck_speed = 8 + game.getLevel() * 0.4;
      truck.style.width = (15 + level / 2) + '%';
      img.style.width = (2.5 + (level - 1) / 100) + '%';

      // Check if the image has reached the bottom of the screen
      if (currentTop >= screenHeight - img.height) {
        img.remove(); // Remove the image element from the DOM
      } else {
        img.style.top = (currentTop + img_speed) + 'px'; // Update the position

        // Check for collision with the 'truck' element
        var truckElement = document.getElementById('truck');
        var imgRect = img.getBoundingClientRect();
        var truckRect = truckElement.getBoundingClientRect();

        if (checkCollision(imgRect, truckRect)) {
          img.remove(); // Remove the image element from the DOM
          score += price;
          level = Math.floor((score/100 + 20) / 20);
          inter = 1500 / (level * 2);
          document.getElementById("level").innerHTML = "Level " + level;
          document.getElementById("score").innerHTML = "Score $" + score.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
          requestAnimationFrame(updatePosition); // Call the function again for the next animation frame
        }
      }
    }
    requestAnimationFrame(updatePosition);
  }

  function spawnImage3() {
    var img = document.createElement('img');
    console.log(score)
    img.src = 'images/load.png';
    img.style.position = 'absolute';
    img.style.width = '4%';

    // Set the random position
    var randomX = Math.floor(100 + Math.random() * 1700);
    var randomY = 100;
    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';

    // Append the image to the body
    document.body.appendChild(img);

    function updatePosition() {
      var currentTop = parseInt(img.style.top, 10);
      var currentLeft = parseInt(img.style.left, 10);
      var screenHeight = window.innerHeight;
      var price = 500.00;
      img_speed = 1 + level * 0.2;
      truck_speed = 8 + game.getLevel() * 0.4;
      truck.style.width = (15 + level / 2) + '%';
      img.style.width = (5 + (level - 1) / 100) + '%';

      // Check if the image has reached the bottom of the screen
      if (currentTop >= screenHeight - img.height) {
        img.remove(); // Remove the image element from the DOM
      } else {
        img.style.top = (currentTop + img_speed) + 'px'; // Update the position

        // Check for collision with the 'truck' element
        var truckElement = document.getElementById('truck');
        var imgRect = img.getBoundingClientRect();
        var truckRect = truckElement.getBoundingClientRect();

        if (checkCollision(imgRect, truckRect)) {
          img.remove(); // Remove the image element from the DOM
          score += price;
          level = Math.floor((score/100 + 20) / 20);
          inter = 1500 / (level * 2);
          document.getElementById("level").innerHTML = "Level " + level;
          document.getElementById("score").innerHTML = "Score $" + score.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
          requestAnimationFrame(updatePosition); // Call the function again for the next animation frame
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

  setInterval(spawnImage, inter); // Call spawnImage every 1 second (1000 milliseconds)
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
  // prevent the default behavior of arrow keys
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

// Updates the position every frame
function update() {
  x += moveX;
  y += moveY;

  // Prevents the truck from going off-screen
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

  // Applies the rotation and position to the truck
  truck.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scaleX(${scale})`;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);

// Set the inactivity duration in milliseconds
const inactivityDuration = 1000;
let cursorTimeout;

// Function to hide the cursor
function hideCursor() {
  document.body.classList.add('hidden-cursor');
}

// Function to show the cursor
function showCursor() {
  document.body.classList.remove('hidden-cursor');
}

// Function to reset the cursor timer
function resetCursorTimer() {
  clearTimeout(cursorTimeout);
  showCursor();
  cursorTimeout = setTimeout(hideCursor, inactivityDuration);
}

// Add event listeners to track cursor movements
document.addEventListener('mousemove', resetCursorTimer);
document.addEventListener('mousedown', resetCursorTimer);
document.addEventListener('keypress', resetCursorTimer);

// Start the initial timer
cursorTimeout = setTimeout(hideCursor, inactivityDuration);

}
};
