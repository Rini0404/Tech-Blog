const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    await fetch(`/api/post`, {
         // Create the functionality to help create the buttons for your website.

    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  