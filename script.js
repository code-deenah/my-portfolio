document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form Data:', formData);
});
