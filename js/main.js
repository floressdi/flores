const themeButton = document.querySelector('#theme-button'),
      lightTheme = 'light-theme',
      toggleIcon = document.getElementById('toggle-icon'), //cambiamos los const
      btnWeb = document.getElementById('btn-web'),
      webAlert = document.getElementById('web-alert'),
      toggleBack = document.getElementById('toggle-back');

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(lightTheme);
    toggleIcon.classList.toggle('bx-sun');
    toggleIcon.classList.toggle('bxs-moon');

    //Guardamos el modo en localstorage
    if(document.body.classList.contains('light-theme')){
        localStorage.setItem('light-mode', 'true');
    } else {
        localStorage.setItem('light-mode', 'false');
    }
});

//obtenemos el modo actual
if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add(lightTheme);
    toggleIcon.classList.toggle('bx-sun');
    toggleIcon.classList.toggle('bxs-moon');
} else {
    document.body.classList.remove(lightTheme);
}


btnWeb.addEventListener('click', ()=>{
    webAlert.classList.add('show-alert');
})
toggleBack.addEventListener('click', ()=>{
    webAlert.classList.remove('show-alert');
})