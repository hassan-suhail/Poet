function generateLicense() {
    // Get input values
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
  
    // Display values in the licenseDisplay div
    document.getElementById("displayFirstName").innerText = `First Name: ${firstName}`;
    document.getElementById("displayMiddleName").innerText = `Middle Name: ${middleName}`;
    document.getElementById("displayLastName").innerText = `Last Name: ${lastName}`;
    document.getElementById("displayAddress").innerText = `Address: ${address}`;
  
    // Show the licenseDisplay div
    document.getElementById("licenseDisplay").style.display = "block";
  }
  