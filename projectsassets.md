# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)


# Solution code

## project 1

```javascript 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); //from where does the event is coming from - yellow box, white box ....
    // if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    //}
  });
});




```

## solution code
## project 2 

```javascript 
//submit event

// const height = parseInt( document.querySelector('#height').value)
//const weight = parseInt(document.querySelector('#weight').value)
//if written here then it will give you empty inputs
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  // .value will give a string

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if(BMI<18.6){
      results.innerHTML = `<span> ${BMI}underweight</span>`;
    }
    else if(BMI == 18.6||BMI <24.9 || BMI ==24.9){
      results.innerHTML = `<span> ${BMI}  normal range</span>`;
    }
    else if(BMI >24.9){
      results.innerHTML = `<span> ${BMI}overweight</span>`;
    }
    
  }
});


```

## solution code
## project 3 

```javascript


const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

//setInterval(function(){} , 1000)// this is the syntax , 1000= 1s

setInterval(function () {
  //
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 2000);


```