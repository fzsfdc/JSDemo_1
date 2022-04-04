// CH1-JavaScript DOM Manipulation and JavaScript DOM Element Creation Event Listeners
console.dir(document);
console.log('URL: ', document.URL);

let hTag= document.querySelector('h1');
console.log(hTag);
hTag.textContent = 'New JavaScript content';
console.log(hTag);

console.log('innerTxt: ', hTag.innerText);
console.log('textCnt: ', hTag.textContent);

const divTag = document.querySelector('div');
console.log('div takes first: ', divTag);

const divs = document.querySelectorAll('div');
console.log('divs :', divs)


// Op1: forEach + function
divs.forEach(function(divT) {
  console.log('divT-Opt1(index) ', divT);
});

// Op2: forEach + Arrow
divs.forEach((divT) => {
  console.log('divT-Opt2(index) ', divT);
});

// Opt3: forEach + Arrow, one line;
divs.forEach((divT, index) => console.log('divT-Opt3(index) ', divT));

// Opt4: forEach + Arrow, one line;
divs.forEach((divT, index, arr) => {
  console.log('divT-Opt4(index) ', divT);
  divT.textContent = 'New' + index;
  //console.log('arr-Opt4(index) ', arr);
});

divs[0].textContent += ' added via divs as array[0]';