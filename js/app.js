'use strict';

alert('Please answer the quistion by either typing yes or no, y or n');
let favColor = prompt('Is black My favourite color?');

if(favColor.toLowerCase() === 'yes' || favColor.toLowerCase() === 'y')
{
  alert('Correct, my favourite color is black');
  // console.log('Correct, my favourite color is black');
}

else if(favColor.toLowerCase() === 'no' || favColor.toLowerCase() === 'n')
{
  alert('Wrong, my favourite color is black');
}

else
{
  alert('Invalid Input, Please type yes or no, y or n, You can refresh the page to retake the quiz again ;)');
}

let dogCat = prompt('I would rather have a cat than a dog as a pet?');

if(dogCat.toLowerCase() === 'yes' || dogCat.toLowerCase() === 'y')
{
  alert('Wrong, my favourite pet is a dog');
}

else if(dogCat.toLowerCase() === 'no' || dogCat.toLowerCase() === 'n')
{
  alert('Correct, my favourite pet is a dog');
  // console.log('Correct, my favourite pet is a dog');
}

else
{
  alert('Invalid Input, Please type yes or no, y or n, You can refresh the page to retake the quiz again ;)');
}

let summerWinter = prompt('I am a Summer person?');

if(summerWinter.toLowerCase() === 'yes' || summerWinter.toLowerCase() === 'y')
{
  alert('Correct, my favourite season is Summer');
  // console.log('Correct, my favourite season is Summer');
}

else if(summerWinter.toLowerCase() === 'no' || summerWinter.toLowerCase() === 'n')
{
  alert('Wrong, my favourite season is Summer');
}

else
{
  alert('Invalid Input, Please type yes or no, y or n, You can refresh the page to retake the quiz again ;)');
}

let musicType = prompt('My favourite music type is country?');

if(musicType.toLowerCase() === 'yes' || musicType.toLowerCase() === 'y')
{
  alert('Wrong, my favourite music type is Rock and Roll');
}

else if(musicType.toLowerCase() === 'no' || musicType.toLowerCase() === 'n')
{
  alert('Correct, my favourite music type is Rock and Roll');
  // console.log('Correct, my favourite music type is Rock and Roll');
}

else
{
  alert('Invalid Input, Please type yes or no, y or n, You can refresh the page to retake the quiz again ;)');
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction();};

// Get the navbar
let navbar = document.getElementById('navbar');

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}