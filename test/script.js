// Sample movie data
const movies = [
    { id: 1, name: "Goat" },
    { id: 2, name: "Pushpa 2" },
    { id: 3, name: "Kanguva" }
];

// Load movies in dropdown
window.onload = function () {
    const movieDropdown = document.getElementById("movie");
    if (movieDropdown) {
        movies.forEach(movie => {
            const option = document.createElement("option");
            option.value = movie.id;
            option.textContent = movie.name;
            movieDropdown.appendChild(option);
        });
    }

    const movieList = document.getElementById("movieList");
    if (movieList) {
        movies.forEach(movie => {
            const card = `
                <div class="col-md-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${movie.name}</h5>
                            <a href="booking.html" class="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
            `;
            movieList.innerHTML += card;
        });
    }
};

// Handle registration
document.getElementById("registerForm")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("User registered successfully!");
});

// Handle login
document.getElementById("loginForm")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login successful!");
});

// Handle booking
document.getElementById("bookingForm")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Booking confirmed!");
});
