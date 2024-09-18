// Package Filtering by Month
document.getElementById("month-filter").addEventListener("change", function() {
    const selectedMonth = this.value;
    const packages = document.querySelectorAll("#package-list li");

    packages.forEach(packageItem => {
        if (selectedMonth === "all" || packageItem.getAttribute("data-month") === selectedMonth) {
            packageItem.style.display = "list-item";
        } else {
            packageItem.style.display = "none";
        }
    });
});


// Responsive Menu Toggle
document.getElementById("menu").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});
