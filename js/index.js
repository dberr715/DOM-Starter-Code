'use strict';

function makeMadLib() {
    event.preventDefault();
    const adjective1 = document.getElementById('textBlank1').value;
    const adjective2 = document.getElementById('textBlank2').value;
    const thing1 = document.getElementById('textBlank3').value;
    const place1 = document.getElementById('textBlank4').value;

    document.getElementById('textBlank1').value = '';
    document.getElementById('textBlank2').value = '';
    document.getElementById('textBlank3').value = '';
    document.getElementById('textBlank4').value = '';
    const imageArea = document.getElementById('imageArea');
    const theMadLib = `The ${adjective1} dog ran up the hill to see the ${adjective2} cat.
      The cat was underneath a ${thing1} hiding from anyone or anything that might appear.  
      That ${adjective1} dog saw the cat hiding so the cat jumped  into the ${place1} to get away.`;
    
    document.getElementById('theMadLib').innerHTML = theMadLib;
    const img = document.createElement('img');
    console.log(img);
    console.log('hello');
    img.src = 'https://stpaulpet.com/wp-content/uploads/dog-facts-cat-facts.jpg';
    console.log(img);
    imageArea.appendChild(img);
}

const imagemadLibsForm = document.getElementById('madLibsForm');
const imgAreaSpot = document.getElementById('imgArea');
console.log(imagemadLibsForm);

imagemadLibsForm.addEventListener('submit', function (event){
    event.preventDefault();
    
  
    imgAreaSpot.appendChild(img);
});

    

