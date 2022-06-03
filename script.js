const html = document.querySelector('html');
const colorChooser = document.querySelector('#Color');

colorChooser.addEventListener('click',()=>{
  colorChooser.classList.toggle('clicked');
  html.classList.toggle('black');
})

const body = document.querySelector('body');
const selectors = document.querySelectorAll('.Gamecontainer span');
const result = document.querySelector('.result')

let markeds = {
  row1:0,row2:0,row3:0,
  column1:0,column2:0,column3:0,
  angular1:0,angular2:0
}
  selectors.forEach(selector => selector.addEventListener('click',RandomClick));
  selectors.forEach(selector => selector.addEventListener('touchstart',RandomClick));



function RandomClick(e){
  e.target.classList.add("active")
  body.dataset.type == "X" ? e.target.dataset.choose = "X" : e.target.dataset.choose = "O";
  body.dataset.type == "X" ?  body.dataset.type = "O" :  body.dataset.type = "X";

  Verification(e.target);
}


function Verification(Type){
  const types = Type.dataset.locations.split(',');
  types.forEach(kind =>{
    selectors.forEach(select => {
      if(select.dataset.locations.includes(kind))
      if(Type.dataset.choose == select.dataset.choose && Type != select)
      markeds[kind] += 1;

      for(let value in markeds){
        if(markeds[value] == 3){
        body.dataset.type == "X" ? result.innerHTML = `O vencedor é : O` : result.innerHTML = ` O vencedor é : X` 
          selectors[0].parentNode.style.pointerEvents = 'none';
      }
      }
      })
  })
}


const Reset = document.querySelector('#Reset');
Reset.addEventListener('click', ()=>{
  markeds = {
    row1:0,row2:0,row3:0,
    column1:0,column2:0,column3:0,
    angular1:0,angular2:0
  }
  selectors.forEach(select => {
    select.dataset.choose = ''
    select.classList.remove('active');
  })
  body.dataset.type="X";
  result.innerHTML = '';
  selectors[0].parentNode.style.pointerEvents = 'all';
} )