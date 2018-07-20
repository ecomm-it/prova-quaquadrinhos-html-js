/** ScrollTO function. Using jQuery library AnimatedScroll.js */
$(document).ready(function () {
    $(document).on('click', '#inscrever-se', function (e) {
        e.preventDefault();
        $("#inscrever-form").animatedScroll(
            {
                duration: 'normal',
                easing: 'easeOutExpo'
            }
        );
    });
});

/** Open Modal. It uses https://github.com/kylefox/jquery-modal. Which is pretty simple and kind of uses minimal js and html*/
document.getElementById('openModal').addEventListener('click', () => {
    let email = document.getElementById('email');
    if (email.value) {
        localStorage.setItem('email', JSON.stringify(email.value));
        $('#ex1').modal();
        email.value = '';
    }
});
