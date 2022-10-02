'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnShowModalWindow = document.querySelectorAll('.show-modal-window');
const btnHideModalWindow = document.querySelector('.close-modal-window');


for(let i = 0;i<btnShowModalWindow.length;i++){
    btnShowModalWindow[i].addEventListener('click',function(){
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    const closeModalWindow = function(){
        modalWindow.classList.add('hidden'); 
        overlay.classList.add('hidden');

    };

    btnHideModalWindow.addEventListener('click',closeModalWindow);
    overlay.addEventListener('click',closeModalWindow);

    document.addEventListener('keydown',function(e){
        if(e.key==='Escape' && !modalWindow.classList.contains('hidden')){
            closeModalWindow();
        };
        
    });

};

