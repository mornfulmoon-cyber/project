'use strict'
document.addEventListener("DOMContentLoaded", function() {
    console.log('Скрипт отработал корректно')
});
const loginBtn = document.querySelector('.button_white');
const signupBtn = document.querySelector('.button_orange');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close-btn');

function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

loginBtn.addEventListener('click', function() {
    openModal(loginModal);
});

signupBtn.addEventListener('click', function() {
    openModal(registerModal);
});

closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        closeModal(modal);
    });
});

window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        closeModal(loginModal);
    }
    if (event.target === registerModal) {
        closeModal(registerModal);
    }
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    console.log('Вход:', email, password);
    alert('Вход выполнен! (демо-режим)');
    closeModal(loginModal);
    loginForm.reset();
});

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = registerForm.querySelectorAll('input')[0].value;
    const surname = registerForm.querySelectorAll('input')[1].value;
    const email = registerForm.querySelectorAll('input')[2].value;
    const password = registerForm.querySelectorAll('input')[3].value;
    console.log('Регистрация:', name, surname, email, password);
    alert('Регистрация прошла успешно! (демо-режим)');
    closeModal(registerModal);
    registerForm.reset();
});