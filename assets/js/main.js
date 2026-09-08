const menuButton = document.querySelector(".hamburger-btn");
const menuLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menuLinks.classList.toggle("active");
});

const mailInput = document.querySelector("#mail");
const emailFeedback = document.querySelector("#email-feedback");

mailInput.addEventListener("input", () => {
  if (mailInput.value === "") {
    emailFeedback.textContent = "Error! It cannot be empty";
    emailFeedback.style.color = "#ff0000";
  } else if (mailInput.value.includes("@") === false) {
    emailFeedback.textContent = "Error! It must include an @";
    emailFeedback.style.color = "#ff0000";
  } else {
    emailFeedback.textContent = "Valid!";
    emailFeedback.style.color = "#00cb00";
  }
});
