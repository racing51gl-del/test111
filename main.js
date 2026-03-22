const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to update button text based on current theme
const updateButtonText = () => {
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '라이트모드';
  } else {
    themeToggle.textContent = '다크모드';
  }
};

// Check for saved theme preference in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Set initial button text
updateButtonText();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the new theme preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', ''); // Or 'light-mode'
  }

  // Update button text after toggling
  updateButtonText();
});