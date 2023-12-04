/*---------------------- Dark Mode -----------------------*/
const darkbtn = document.getElementById('darkbtn');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkbtn.checked = true;
}

darkbtn.addEventListener('change', () => {
    if (darkbtn.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

/*---------------------- Contact-Me validation -----------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
      // If the form is valid, you can perform additional actions (e.g., submit the form to a server)
      alert("Form submitted successfully!");
    }
  });

  function validateForm() {
    let isValid = true;

    // Reset previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove());

    // Validate name
    const nameInput = form.querySelector('.contact-input[name="name"]');
    if (nameInput.value.trim() === "") {
      displayErrorMessage(nameInput, "Name is required");
      isValid = false;
    }

    // Validate email
    const emailInput = form.querySelector('.contact-input[name="email"]');
    if (
      emailInput.value.trim() === "" ||
      !isValidEmail(emailInput.value.trim())
    ) {
      displayErrorMessage(emailInput, "Valid email is required");
      isValid = false;
    }

    // Validate subject
    const subjectInput = form.querySelector('.contact-input[name="subject"]');
    if (subjectInput.value.trim() === "") {
      displayErrorMessage(subjectInput, "Subject is required");
      isValid = false;
    }

    // Validate message
    const messageInput = form.querySelector('.contact-input[name="message"]');
    if (messageInput.value.trim() === "") {
      displayErrorMessage(messageInput, "Message is required");
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    // You can implement a more advanced email validation if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function displayErrorMessage(input, message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    const inputContainer = input.closest(".contact-content");
    inputContainer.appendChild(errorMessage);
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)




