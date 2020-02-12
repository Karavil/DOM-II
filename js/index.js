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

body.addEventListener('dblclick', () =>{
   anime({
      targets: 'body',
      rotate: '1turn',
      duration: 1000
    });
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
      anime({
         targets: image,
         height: '200%',
         easing: 'easeInOutQuad',
         direction: 'alternate',
         loop: true
      })
   });

   image.addEventListener('dragend', (event) => {
      event.target.style.height = originalHeight;
   });

   image.addEventListener('load', () => console.log('image loaded'));

   image.addEventListener('dblclick', (event) => {
      event.target.style.transform = 'rotate(180deg)';
   });
});

document.addEventListener("visibilitychange", function() {
   if (document.visibilityState === 'visible') {
     alert('Window visible');
   }
 });

 anime({
   targets: 'body',
   rotate: '3turn',
   duration: 4000
 });



