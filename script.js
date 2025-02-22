/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleTheme");
    
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });
});