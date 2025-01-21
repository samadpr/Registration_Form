# Registration Form

This project is a simple user registration form built with HTML, CSS, JavaScript, and jQuery. It includes validation for input fields and a popup modal to display the submitted data.

## Features

- User-friendly form with validation for:
  - First name and last name (required fields).
  - Username (required field).
  - Email address (validated format).
  - Phone number with country code and validation using `intl-tel-input`.
  - Password (minimum 6 characters, includes uppercase, lowercase, and a number).
- Displays a popup modal showing the entered data upon successful form submission.
- Auto-detects the user's country for phone input based on their IP address using `ipapi`.
- Refreshes the form when the popup is closed.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the form and popup modal.
- **JavaScript (ES6)**: For form validation and dynamic functionality.
- **jQuery**: For DOM manipulation and event handling.
- **intl-tel-input**: For international phone number validation and country code selection.
- **ipapi**: For geolocation-based country detection.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
