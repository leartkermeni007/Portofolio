 document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("upCu30MNExU0ZkT2l"); // Replace with your actual EmailJS user ID

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_6zw8b8a", "template_5q5i96g", this)
            .then(function () {
                alert("Email sent successfully!");
            })
            .catch(function (error) {
                alert("Failed to send email: " + JSON.stringify(error));
            });
    });
});
 document.addEventListener("DOMContentLoaded", function () {
    function goToNextSection() {
      // Scroll by 100vh (viewport height)
      window.scrollBy({
        top: window.innerHeight + 20,  // Scroll by 100vh (viewport height)
        behavior: 'smooth',
      });
    }

    const startButton = document.querySelector(".button-85");
    if (startButton) {
      startButton.addEventListener("click", goToNextSection);
    }
  });
  butter.init({
  wrapperId: 'butter'
});

butter.init({
  cancelOnTouch: true
});

butter.init({
  wrapperDamper: 0.04
});
