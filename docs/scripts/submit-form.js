window.onload = function () {
    let form = document.getElementsByClassName("site-contacts-message-form")[0];

    form.addEventListener("submit", function (e) {
        e.preventDefault()
        grecaptcha.ready(function () {
            grecaptcha.execute('6Le_QUQaAAAAAH4O2mg_Cw35NYunY-xTlDeMvy6a', { action: 'submit' }).then(function (token) {
                alert('success')
            });
        })
    })
}

