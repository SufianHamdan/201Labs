'use strict';
let mark = 0;
alert('Please answer the quistion by either typing yes or no, y or n');
let favColor = prompt('Is black My favourite color?');

if(favColor.toLowerCase() === 'yes' || favColor.toLowerCase() === 'y')
{
  alert('Correct, my favourite color is black');
  // console.log('Correct, my favourite color is black');
  mark++;

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
  mark++;

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
  mark++;

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
  mark++;

}

else
{
  alert('Invalid Input, Please type yes or no, y or n, You can refresh the page to retake the quiz again ;)');
}

let missyClean = prompt('Am i a missy person');

if(missyClean.toLowerCase() === 'yes' || missyClean.toLowerCase() === 'y')
{
  alert('Wrong, I am a Clean person');
}

else if(missyClean.toLowerCase() === 'no' || missyClean.toLowerCase() === 'n')
{
  alert('Correct, I am a Clean person');
  // console.log('Correct, I am a Clean person');
  mark++;

}

else
{
  alert('Invalid Input, Please type yes or no, y or n, You can refresh the page to retake the quiz again ;)');
}


let userNumber = prompt('Can you guess what is my lucky number between 1 - 100');
let noAttempt = 4;
while(noAttempt > 1)
{
  if(parseInt(userNumber) === 50)
  {
    mark++;
    alert('Correct');
    break;
  }
  else if(parseInt(userNumber) <= 40)
  {
    alert('Too Low');
  }
  else if(parseInt(userNumber) >= 60)
  {
    alert('Too High');
  }
  else
  {
    alert('invalid input');
  }
  noAttempt--;
  userNumber = prompt('Can you guess what is my lucky number between 1 - 100, ' +noAttempt+' Attempt');
}

alert('Can you guess what language do i know');
let attempts = 6;
let myAnswer = ['c#','html','css','javascript','java', 'sql'];
//let userAnswer = prompt('type the correct answer \n (c# HTML CSS Java Javascript python SQl PHP');

for(let j = -5; j<attempts; j++)
{
  let userAnswer = prompt('type the correct answer \n (c# HTML CSS Java Javascript python SQl PHP '+attempts+' attempts left');
  attempts--;
  for(let i = 0; i<myAnswer.length; i++)
  {
    if(userAnswer === myAnswer[i])
    {
      alert('correct!');
      attempts = j;
      mark++;

    }
  }
}

let userName = prompt('Can you type your name please');

alert('Good job '+userName+' you have got '+mark+' out of 7, have a good day');

console.log(attempts);


