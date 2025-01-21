
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("#phone");

    const iti = intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
          fetch("https://ipapi.co/json")
              .then((res) => res.json())
              .then((data) => callback(data.country_code))
              .catch(() => callback("US"));
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });
  


$(document).ready(function () {
    $("#submitBtn").click(function () {
      let isValid = true;
      let errorMessages = [];
  
      $(".error").remove();
  
      const firstName = $("#firstName").val().trim();
      if (firstName === "") {
        $("#firstName").after('<div class="error">First Name is required.</div>');
        isValid = false;
      }
  
      const lastName = $("#lastName").val().trim();
      if (lastName === "") {
        $("#lastName").after('<div class="error">Last Name is required.</div>');
        isValid = false;
      }

      const username = $("#username").val().trim();
      if (username === "") {
        $("#username").after('<div class="error">Username is required.</div>');
        isValid = false;
      }
  
      const email = $("#email").val().trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email === ""){
        $("#email").after('<div class="error">Email is required.</div>');
        isValid = false;
      }
      else if (!emailPattern.test(email)) {
        $("#email").after('<div class="error">Invalid email format.</div>');
        isValid = false;
      }
  
      const phone = $("#phone").val().trim();
      if (!iti.isValidNumber()) {
        // $("#phone").after('<div class="error">Phone number is required.</div>');
        $("#phone").after('<div class="error">Invalid phone number format. Include country code. E.g., +1234567890</div>');
        isValid = false;
    }

      const password = $("#password").val().trim();
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if (password === "") {
        $("#password").after('<div class="error">Password is required.</div>');
        isValid = false;
      }
      else if(!passwordPattern.test(password)){
        $("#password").after('<div class="error">Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number.</div>');
        isValid = false;
      }
  
      const bio = $("#shortBio").val().trim();

      if (isValid) {
        const formData = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Bio:</strong> ${bio || "No bio provided"}</p>
       `;

       $("#popupContent").html(formData);

       const targeted_popup_class = "popup-data";
       $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      }
    });

    $('[data-popup-close]').click(function (e) {
        e.preventDefault();
        const targeted_popup_class = $(this).attr("data-popup-close");
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350, function () {
          location.reload();
        });
      });
  });
});