const handlePostData = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const post_input = document.querySelector('#post_input_box').value.trim();
  const post_description = document
    .querySelector('#post_description_bx')
    .value.trim();

  if (post_input && post_description) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/addpost', {
      method: 'POST',
      body: JSON.stringify({ post_input, post_description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById('post_button')
  .addEventListener('click', handlePostData);
