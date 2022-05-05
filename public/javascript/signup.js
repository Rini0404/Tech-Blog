const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/user', {
         // Create the functionality to help create the buttons for your website.

    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);