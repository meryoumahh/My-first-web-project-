var toggleClick = document.querySelector(".toggleBox");
var container2 = document.querySelector(".container2");
toggleClick.addEventListener('click',()=>{
    toggleClick.classList.toggle('active');
    container2.classList.toggle('active');
})

