const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
  
    const response = await fetch('/api/user/login', {
          // Create the functionality to help create the buttons for your website.

    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
  