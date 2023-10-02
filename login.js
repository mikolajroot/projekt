//skrypt do walidacji formularza logowania
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let isValid = true;
  
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
  
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    if (username === "") {
      usernameError.textContent = "Nazwa użytkownika nie może być pusta.";
      isValid = false;
    } else if (username.length > 20) {
      usernameError.textContent = "Nazwa użytkownika nie może przekraczać 20 znaków.";
      isValid = false;
    }
  
    if (password === "") {
      passwordError.textContent = "Hasło nie może być puste.";
      isValid = false;
    }
    localStorage.removeItem("points");
    return isValid;

  }
  //skrypt do usunięcia błędów po kliknięciu przycisku reset
  const resetButton = document.querySelector('input[type="reset"]');
  const errorMessages = document.querySelectorAll('.error-message');
  
  resetButton.addEventListener('click', () => {
    errorMessages.forEach(errorMessage => {
      errorMessage.textContent = '';
    });
  });