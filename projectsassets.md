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