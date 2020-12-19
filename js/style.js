

const toggleMode = document.querySelector('.toggle-mode');
const switchMode = document.querySelector('.switch');



toggleMode.addEventListener('change', () => {
  const element = document.body;
  if (toggleMode.checked) {
    element.classList.add("dark-mode");
    switchMode.classList.add("active");
  } else {    
    element.classList.remove("dark-mode");
    switchMode.classList.remove("active");
  }
})
