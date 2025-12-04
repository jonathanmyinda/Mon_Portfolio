document.getElementById("contactForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const error = document.getElementById("errorMessage");

    const fields = [name, mail, subject, message];

    let hasError = false;

    fields.forEach(field => {
        if (field.value.trim() === "") {
            hasError = true;
            field.classList.add("border-red-500");
            field.classList.remove("border-gray-800");
        } else {
            field.classList.remove("border-red-500");
            field.classList.add("border-gray-800");
        }
    });

    if (hasError) {
        e.preventDefault();
        error.textContent = "Veuillez remplir tous les champs avant d'envoyer le message.";
        error.classList.remove("hidden");
    } else {
        error.classList.add("hidden");
    }
});
