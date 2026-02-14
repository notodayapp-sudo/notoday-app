
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("waitlist-form");
    const successBox = document.getElementById("success-box");
    const smallText = document.querySelector("#form-area small");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const button = form.querySelector("button");
        button.textContent = "Enviando...";
        button.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            mode: "no-cors"
        });

        setTimeout(() => {
            form.style.display = "none";
            smallText.style.display = "none";
            successBox.style.display = "block";
        }, 1500);
    });

});
