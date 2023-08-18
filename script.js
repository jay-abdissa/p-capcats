const colorPicker = document.getElementById('colorPicker');
const pet = document.getElementById('pet');

// Initial pet customization data
const petData = {
  color: '#ff5733'
};

// Apply pet customization
function applyCustomization() {
  pet.style.backgroundColor = petData.color;
}

// Event listener for color picker
colorPicker.addEventListener('input', (event) => {
  petData.color = event.target.value;
  applyCustomization();
});

// Initialize pet customization
applyCustomization();
