const logout = async function() {
    const response = await fetch('/api/user/logout', {
       // Create the functionality to help create the buttons for your website.

    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logout-link').addEventListener('click', logout);
  