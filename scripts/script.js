document.addEventListener("DOMContentLoaded", function() {

    const loginBtn = document.querySelector('.button_white');
    const signupBtn = document.querySelector('.button_orange');
    const loginModal = document.querySelector('.modal-login');
    const registerModal = document.querySelector('.modal-registr');
    const closeBtns = document.querySelectorAll('.close-btn');

    function openModal(modal) {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            openModal(loginModal);
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            openModal(registerModal);
        });
    }

    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
});
