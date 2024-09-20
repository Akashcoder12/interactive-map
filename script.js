// Initialize the map and set the view to a specific location
var map = L.map('map').setView([28.6139, 77.2090], 13); // Coordinates for New Delhi

// Add map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker data: array of locations
var locations = [
    { name: "Location 1", lat: 28.6139, lng: 77.2090, description: "New Delhi" },
    { name: "Location 2", lat: 26.7606, lng: 83.3732, description: "Gorakhpur" },
    { name: "Location 3", lat: 26.9157, lng: 70.9083, description: "Jaislmer" },
    { name: "Location 4", lat: 19.0760, lng: 72.8777, description: "Mumbai" },
    { name: "Location 5", lat: 31.1471, lng: 75.3412, description: "Punjab" },
    { name: "Location 6", lat: 26.2585, lng: 82.0660, description: "Sultanpur" },
    { name: "Location 7", lat: 26.7922, lng: 82.1998, description: "Ayodhaya" },
    // Add more locations (at least 5)
];

// Function to add markers to the map
locations.forEach(function(location) {
    var marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
});

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var matchedLocation = locations.find(function(location) {
        return location.name.toLowerCase().includes(searchQuery);
    });

    if (matchedLocation) {
        map.setView([matchedLocation.lat, matchedLocation.lng], 13);
    }
});
