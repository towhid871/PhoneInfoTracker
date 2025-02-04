function fetchPhoneInfo() {
    let phoneNumber = document.getElementById("phoneInput").value;
    if (phoneNumber === "") {
        alert("Please enter a phone number!");
        return;
    }

    fetch(`https://your-backend-url.com/phoneinfo?number=${phoneNumber}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <p><strong>Location:</strong> ${data.location}</p>
                <p><strong>Time Zone:</strong> ${data.timezone}</p>
                <p><strong>Carrier:</strong> ${data.carrier}</p>
            `;
        })
        .catch(error => console.error("Error fetching data:", error));
}  
    