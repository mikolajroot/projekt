//skrypt do walidacji formularza rejestracji
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordRepeat= document.getElementById("password-repeat").value;
    let isValid = true;
  
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const passwordRepeatError = document.getElementById("password-repeat-error");
  
    usernameError.textContent = "";
    passwordError.textContent = "";
    passwordRepeatError.textContent = "";
  
    if (username === "") {
      usernameError.textContent = "Nazwa użytkownika nie może być pusta";
      
    }
  
    if (password === "") {
      passwordError.textContent = "Hasło nie może być puste";
      
    }
    if (passwordRepeat === "") {
      passwordRepeatError.textContent = "Hasło nie może być puste";
      
    }
    if (password !== passwordRepeat) {
        passwordRepeatError.textContent = "Hasła muszą być takie same";
        
    }
  
    
  }
  //skrypt do usunięcia błędów po kliknięciu przycisku reset
  const resetButton = document.querySelector('input[type="reset"]');
  const errorMessages = document.querySelectorAll('.error-message');
  
  resetButton.addEventListener('click', () => {
    errorMessages.forEach(errorMessage => {
      errorMessage.textContent = '';
    });
  });
    