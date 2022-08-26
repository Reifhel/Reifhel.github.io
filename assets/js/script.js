const button  = document.getElementById('switchTheme');

button.addEventListener('click', switchTheme);

function switchTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}