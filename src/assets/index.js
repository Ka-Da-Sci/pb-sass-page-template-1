// Manages FAQ Toggles
document.addEventListener("click", (event) => {
  const faq = document.querySelectorAll(".question");

  console.log('faq');
  for (let num = 0; num < faq.length; num++) {
    if (faq[num].contains(event.target)) {
      let targetAns = document.querySelector("#answer" + num);
      let plusMinusSign = document.querySelector("#sign" + num);
      if (targetAns.classList.contains("block")) {
        console.log(targetAns.classList);
        targetAns.classList.remove('block');
        targetAns.classList.add('hidden');
        plusMinusSign.innerHTML = "+";
      } else {
        targetAns.classList.remove('hidden');
        targetAns.classList.add('block');
        plusMinusSign.innerHTML = "-";
        plusMinusSign.classList.add("bolder-sign");
      }
    }
  }
});

// EMAIL FORM INPUTS VALIDATION FUNCTION
const emailValidation = (emailId, errorMessageId) => {
  const emailInput = document.getElementById(emailId);
  const errorMessage = document.getElementById(errorMessageId);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    event.preventDefault();
    emailInput.classList.add("error");
    errorMessage.style.display = "inline";
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  }

  document.getElementById(emailId).oninput = () => {
    errorMessage.style.display = "none";
  };
};
