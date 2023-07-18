
    // JavaScript code to show landing page after video playback
    const videoContainer = document.getElementById('video-container');
    const landingPage = document.getElementById('landing-page');
    
    const video = document.getElementById('video');
    video.onended = function() {
      videoContainer.style.display = 'none';
      landingPage.style.display = 'block';
    };
    
    // JavaScript code to load user profile
    function loadProfile(userId) {
      // Perform actions based on the selected user profile
      console.log('Loading user profile:', userId);
      // You can redirect to a specific page or perform any other desired action here
    }
    
    // JavaScript code to unmute the video
    function unmuteVideo() {
      video.muted = false;
      video.play();
    }

    video.onended = function() {
        window.location.href = 'users.html';
      };

      function loadProfile(userId) {
        // Show loading overlay
        document.querySelector('.loading-overlay').classList.add('active');
  
        // Perform actions based on the selected user profile
        console.log('Loading user profile:', userId);
  
        // Simulate a delay before opening the new page
        setTimeout(function() {
          // Open different pages based on the selected user profile
          if (userId === 1) {
            window.open('page1.html', '_blank');
          } else if (userId === 2) {
            window.open('page2.html', '_blank');
          } else if (userId === 3) {
            window.open('page3.html', '_blank');
          } else if (userId === 4) {
            window.open('page4.html', '_blank');
          }
  
          // Hide loading overlay
          document.querySelector('.loading-overlay').classList.remove('active');
        }, 500); // Adjust the delay as needed
      }

      //dnvnfjvbnfdb fb bfnvb fbv fb vfb vb fcbv jfb vjb fvb kfjdb kjb kjbvkjbjkvb bv jb vjkbvjbvj

      