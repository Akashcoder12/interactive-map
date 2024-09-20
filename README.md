1. Project Title:
Interactive Map Web Application

3. Project Overview:
This project is an interactive map web application built using HTML, CSS, and JavaScript. The map displays points of interest (POIs) and allows users to interact with markers to view additional information about specific locations. A search functionality is also implemented, allowing users to search for locations on the map.

4. Technologies Used:
HTML: Used to structure the map and UI elements.
CSS: Used for styling the map, markers, and search bar.
JavaScript: Used to implement map functionality, marker placement, pop-ups, and the search feature.
Leaflet.js: An open-source JavaScript library used to render the map and handle map interactions.
OpenStreetMap: The map tiles are rendered using this service.
5. Features:
Map Display: The map is displayed using Leaflet.js, centered on a default location (New Delhi, India).
Marker Placement: The map includes markers representing at least five unique locations, each with a pop-up window displaying the name and a short description of the location.
Interactive Pop-ups: When a user clicks on a marker, a pop-up window shows detailed information about that location.
Search Functionality: Users can search for specific locations by typing in the search bar, and the map will automatically center on the matching location, displaying its associated marker.
Custom Styling: The map and its elements are styled using CSS for a clean and user-friendly interface.
Responsiveness: The map is designed to work seamlessly across different screen sizes, including mobile devices.
6. Instructions to Use:
Opening the Map: Open the index.html file in a web browser.
Viewing Markers: The map will display markers at different locations. Click on any marker to view more details about the location.
Search for a Location: Use the search bar to type in the name of a location (e.g., "Location 1"). If the location exists, the map will zoom in and display the marker for that location.
Interacting with the Map: You can pan around the map and zoom in or out using the map controls.
7. Screenshots:
(Insert screenshots of your map interface, markers, and pop-up windows here.)

Screenshot 1: Default map view with markers.
Screenshot 2: Pop-up window showing additional information.
Screenshot 3: Search functionality in action.
7. How It Works (Technical Details):
Map Initialization: The map is initialized with coordinates using Leaflet.js and displayed within the #map div.
Markers: JavaScript is used to dynamically place markers on the map based on an array of locations. Each marker is linked to a pop-up that displays information.
Search Functionality: The search bar listens for user input and matches it with available locations. When a match is found, the map is centered on that location and displays the associated marker.
8. Project Files:
The project consists of the following files:

index.html: Main HTML file that contains the structure of the map and UI.
style.css: CSS file for styling the map and its elements.
script.js: JavaScript file for handling map functionality, marker interactions, and search functionality.
leaflet.css and leaflet.js: External libraries used for map rendering.
9. Future Enhancements:
Adding animations to the markers or pop-ups.
Implementing geolocation to allow users to see their current location on the map.
Adding filters for different categories of locations (e.g., restaurants, parks).
10. Conclusion:
This project helped in understanding how to integrate a mapping service into a web application using HTML, CSS, and JavaScript. It also demonstrates the use of JavaScript libraries like Leaflet.js to handle real-time map interaction and improve the user experience.
