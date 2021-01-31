window.onload = function() {
    let form = document.getElementsByClassName("site-contacts-message-form")[0];
    
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        alert("success")
    })
}

