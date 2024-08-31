document.addEventListener("DOMContentLoaded", function() {
    // Set a timeout to hide the splash screen after 1 second
    setTimeout(function() {
        const splashScreen = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');
        
        // Hide the splash screen
        splashScreen.style.display = 'none';
        
        // Show the main content
        mainContent.classList.remove('hidden');
    }, 2000); // 1 second delay
});