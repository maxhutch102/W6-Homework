$(document).ready(function(){
    
    function displayWeather(weather) {
        console.log(weather);
        let tempCurrent = weather.list[0].main.temp;
        let sunCurrent = weather.list[0].weather[0].main;
        let humCurrent = weather.list[0].main.humidity;
        let dateCurrent = weather.list[0].dt_txt;
        console.log(tempCurrent);
        console.log(sunCurrent);
        console.log(humCurrent);
        console.log(dateCurrent);
        for (i = 1; i < weather.list.length; i++) {
            let temp = weather.list[i].main.temp;
            let sun = weather.list[i].weather[0].main;
            let hum = weather.list[i].main.humidity;
            console.log(hum);
            let date = weather.list[i].dt_txt;
            let cardMain = $("<div>");
            cardMain.attr("class", "card");
            cardMain.attr("style", "width: 18rem;");
            $("#forcastHere").append(cardMain);
            let cardBody = $("<div>");
            cardBody.attr("class", "card-body");
            cardMain.append(cardBody);
            let dateElement = $("<h5>");
            dateElement.text(date);
            dateElement.attr("class", "card-title");
            cardBody.append(dateElement);
            let tempElement = $("<h6>");
            tempElement.text("Temperature: " + temp);
            tempElement.attr("class", "card-subtitle");
            cardBody.append(tempElement);
            let humElement = $("<h6>");
            humElement.text("Humidity: " + hum + "%");
            humElement.attr("class", "card-subtitle");
            cardBody.append(humElement);
            let sunElement = $("<i>");
            if (sun === "Clear") {
                sunElement.attr("class", "fas fa-sun    ");
                cardBody.append(sunElement);
            } else if (sun === "Clouds") {
                sunElement.attr("class", "fa fa-cloud");
                cardBody.append(sunElement);
            };

            



            console.log(temp);
            

        }


    };
    
    
    $("#submit").on("click", function(event){
        
        let search = $("#city").val().trim();
        console.log(search);
        
        event.preventDefault();
        let apiKey = "0177c05140d44ea0e11f1a34f4b2f4b3";
        let queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&cnt=6" + "&units=imperial" + "&appid=" + apiKey;
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function(response){
            let cityList = $("<button>");
            cityList.text(search);
            $(".cityBtns").append(cityList);
            displayWeather(response);
            console.log(response);
        });
    });

});