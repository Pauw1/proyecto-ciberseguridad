$(document).ready(function() {

    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        alert('¡Formulario enviado con éxito!');
        this.reset();
    });

    $('.feedback-btn').on('click', function() {
        let feedback = $(this).data('feedback');
        $('#feedbackText').text(feedback).show();

        setTimeout(function() {
            $('#feedbackText').hide();
        }, 4000);
    });
});