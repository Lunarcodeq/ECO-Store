const buttons = document.querySelectorAll(".button")
const store = document.getElementById('store');

store.addEventListener('click', (event) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.isLogged) {
        event.preventDefault();
        alert("Please log in to access the store")
    } else {
        window.location.href = './Store/index.html'
    }
})
