document.getElementById("checkBtn").addEventListener("click", function() {
    let phoneNumber = document.getElementById("phoneInput").value;
    fetch(`https://phoneinfobackend.onrender.com/check_number?number=${phoneNumber}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = `
            <p><strong>Number:</strong> ${data.number}</p>
            <p><strong>Valid:</strong> ${data.valid ? "✅ Yes" : "❌ No"}</p>
            <p><strong>Carrier:</strong> ${data.carrier}</p>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>Time Zone:</strong> ${data.time_zone}</p>
        `;
    })
    .catch(error => console.error("Error fetching data:", error));
});
