// CH1-Quick Review JavaScript Click Events and Page Interactions Within the DOM
const divs = document.querySelectorAll('div');

const invVal = document.querySelector('.inpval');
console.log('invput-tag ', invVal);
console.log('invVal-value: ', invVal.value);

divs.forEach((divTg,index) => {
  console.log('divTg: ', divTg);
  //div.textContent = 'Div: # ' + index; // just applies the text, even if you add HTML elements 
  divTg.innerHTML = '<strong>Div: # ' + index + '</strong>'; // applies the html tags
  divTg.addEventListener('click',(e)=> {
    console.log('divTg.addEventListener(click, (e) => {');
    console.log('divTg.e.target: ', e.target);  
    divTg.classList.toggle('box');  
  })
});

const hTag = document.querySelector('h1');
console.log('hTag: ', hTag);
hTag.addEventListener('click',(e) => {
  console.log('hTag.addEventListener(click, (e) => {');
  console.log('e.target: ', e.target);
  if(hTag.textContent === 'JavaScript') {
    hTag.textContent = 'Test';
  } else {
    hTag.textContent = 'JavaScript';
  }
})