window.onload = function () {
    const meetingForm = document.getElementById("meetingForm");
    const generatedLinkSection = document.getElementById("generatedLink");
    const linkElement = document.getElementById("link");
  
    meetingForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting the traditional way
  
      const meetingId = document.getElementById("meetingId").value;
      const accessKey = document.getElementById("access").value;
  
      // Generate the Zoom meeting link
      const meetingLink = https://zoom.us/j/${meetingId}?access=${accessKey};
  
      // Display the generated link
      generatedLinkSection.style.display = "block";
      linkElement.href = meetingLink;
      linkElement.innerText = meetingLink;
    });
  };