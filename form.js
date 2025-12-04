document.getElementById("contactForm").addEventListener("submit", function(e) {
    if (!this.checkValidity()) {
        e.preventDefault();
    }
});
