// Function to hide the spinner initially
window.onload = function() {
    document.querySelector('.spinner').style.display = 'none';
};

// Select the menu icon and the parent element containing the dropdown menu
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenuContainer = document.querySelector('header');

// Check if elements are selected correctly
console.log(menuIcon, dropdownMenuContainer);

// Toggle the 'menu-active' class on the header when the menu icon is clicked
menuIcon.addEventListener('click', function() {
    dropdownMenuContainer.classList.toggle('menu-active');
});