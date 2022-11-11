class UI {
    constructor() {
        this.description = document.querySelector("#description")
        this.temp = document.querySelector("#temp")
        this.city = document.querySelector("#location")
    }

    drawWeather(data) {
        let celsius = Math.round(parseFloat(data.main.temp) - 273.15)

        this.description.innerHTML = "The weather outside is: " + data.weather[0].description
        this.temp.innerHTML = "There are " + celsius + "&deg;" + " degrees outside"
        this.city.innerHTML = "In " + data.name
    }
}