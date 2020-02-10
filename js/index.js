// Your code goes here

//Change paragraph color on hover (red)
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((paragraph) => {
   paragraph.addEventListener('mouseenter', (event) => {
      event.target.style.color = 'red';
   });

   paragraph.addEventListener('mouseout', (event) => {
      event.target.style.color = 'green';
   });
});

//Set background to random color on any keyboard event (key press down)
function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

const body = document.querySelector('body');
body.addEventListener('keydown', () => {
   body.style.background = getRandomColor();
});

//Increase font size if scrolled on
paragraphs.forEach((paragraph) => {
   paragraph.addEventListener('wheel', (event) => {
      event.target.style.fontSize = '200%';
   });
});


//Increase height of images while being dragged, then set it to original height after drag
images = document.querySelectorAll('img');

images.forEach((image) => {
   const style = getComputedStyle(image);
   const originalHeight = style.height;
   let newHeight = parseInt(originalHeight);


   image.addEventListener('drag', (event) => {
      newHeight *= 1.005;
      event.target.style.height =  newHeight + 'px';
   });

   image.addEventListener('dragend', (event) => {
      event.target.style.height = originalHeight;
   });

   image.addEventListener('load', () => console.log('image loaded'));
});

