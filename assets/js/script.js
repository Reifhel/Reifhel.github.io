const button  = document.getElementById('switchTheme');

button.addEventListener('click', switchTheme);

function switchTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList[0];
    const themeButton = document.getElementById('themeButton');

    if(theme === 'light-theme') {
        themeButton.classList.toggle('fa-sun');
        themeButton.classList.toggle('fa-moon-o');
    }else{
        themeButton.classList.toggle('fa-sun');
        themeButton.classList.toggle('fa-moon-o');
    }
}