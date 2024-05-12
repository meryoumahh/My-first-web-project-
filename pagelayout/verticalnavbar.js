var toggleClick = document.querySelector(".my-toggleBox");
var container2 = document.querySelector(".my-container2");
toggleClick.addEventListener('click',()=>{
    toggleClick.classList.toggle('active');
    container2.classList.toggle('active');
})

