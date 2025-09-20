const container = document.querySelector('.container');
const cadastrarBtn = document.querySelector('.cadastrar-btn');
const loginBtn = document.querySelector('.login-btn');

cadastrarBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});