// Accessible contact-form validation.
// - Errors are written into each field's own <p id="...-error"> so screen
//   readers announce them via aria-describedby.
// - The overall result is announced once through a single aria-live region,
//   so assistive tech isn't interrupted mid-sentence.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  function setError(field, message) {
    var wrapper = field.closest(".field");
    var errorEl = document.getElementById(field.id + "-error");
    if (message) {
      wrapper.classList.add("has-error");
      errorEl.textContent = message;
      field.setAttribute("aria-invalid", "true");
    } else {
      wrapper.classList.remove("has-error");
      errorEl.textContent = "";
      field.removeAttribute("aria-invalid");
    }
  }

  function validate() {
    var valid = true;

    var name = form.elements["name"];
    if (!name.value.trim()) {
      setError(name, "Please enter your name.");
      valid = false;
    } else {
      setError(name, "");
    }

    var email = form.elements["email"];
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      setError(email, "Please enter your email address.");
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      setError(email, "Please enter a valid email address, like name@example.com.");
      valid = false;
    } else {
      setError(email, "");
    }

    var message = form.elements["message"];
    if (!message.value.trim()) {
      setError(message, "Please enter a message.");
      valid = false;
    } else {
      setError(message, "");
    }

    return valid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.classList.remove("visible");

    if (validate()) {
      status.textContent = "Thanks! Your message looks good and is ready to send.";
      status.classList.add("visible");
      // In a real deployment, this is where you'd send the data to a server.
      form.reset();
    } else {
      var firstError = form.querySelector('[aria-invalid="true"]');
      status.textContent = "Please fix the highlighted fields before sending.";
      status.classList.add("visible");
      if (firstError) firstError.focus();
    }
  });
});
