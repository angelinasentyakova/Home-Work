'use strict'

let allElems = document.querySelectorAll('.left-topfooter__title');

allElems.forEach((elem)=>{
    
    elem.addEventListener('click', function(){
      
        let parentElem = this.parentNode;

        let contentBlock = parentElem.querySelector('.left-topfooter__list')
        contentBlock.classList.toggle('active');
        
    })
})