
let api_url = "https://api.weatherapi.com/v1/current.json?key=5aee125a73944ded995195639240511&q=";

async function fetchData(){
    try {
        console.log(document.getElementById('city').value);
        const response = await fetch(api_url+document.getElementById('city').value.toLowerCase());
        const data = await response.json();
        document.getElementById('cityName').textContent = data.location.name;
        document.getElementById('degrees').textContent = data.current.temp_c + '°C';
        document.getElementById('humidity').textContent = "Humidity: " + data.current.humidity + '%';
        document.getElementById('weatherState').textContent = data.current.condition.text;
        const iconUrl = `https:${data.current.condition.icon}`;
        console.log(iconUrl);
        document.getElementById('weather-icon').setAttribute("src", iconUrl);
        
    } catch (error) {
        console.error("Oops something went wrong.")
        alert("Location not found!");
    }
}
