  let isRegister = false;

    function toggleForm() {
      const nameField = document.getElementById('name');
      const formTitle = document.getElementById('formTitle');
      const submitBtn = document.getElementById('submitBtn');
      const toggleText = document.getElementById('toggleText');
      const toggleLink = document.querySelector('.toggle a');

      isRegister = !isRegister;

      if (isRegister) {
        nameField.style.display = 'block';
        formTitle.textContent = 'Register';
        submitBtn.textContent = 'Register';
        toggleText.textContent = 'Already have an account?';
        toggleLink.textContent = 'Login';
      } else {
        nameField.style.display = 'none';
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = 'Register';
      }
    }

const submitBtn = document.getElementById("submitBtn");
const deleteBtn = document.getElementById("delete")

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const user = {
    email: email,
    isLogged: true
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "../ECO/index.html"
})

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();

  localStorage.clear();
})