import {WEATHER} from './Weather';

export const WEATHERS: WEATHER[] =
[
    {
        latitude: 42.3601,
        longitude:71.0589,
        timezone:"EST",
        currently: {"time":1586838610,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0035,"precipProbability":0.1,
            "precipType":"rain","temperature":33.99,"apparentTemperature":33.3,"dewPoint":33.55,"humidity ":0.91,"pressure":1018.2,
            "windSpeed":3.44,"windGust":5.72,"windBearing":280,"cloudCover":1,"uvIndex":3,"visibility":9.244,"ozone":329}
    },

    {
        latitude:42.3601,
        longitude:71.0589,
        timezone:"EST",
        currently: {"time":158655555,"summary":"Sunny","icon":"sunny","precipIntensity":0.0035,"precipProbability":0.1,
            "precipType":"rain","temperature":60.99,"apparentTemperature":60.3,"dewPoint":33.55,"humidity ":0.91,"pressure":1018.2,
            "windSpeed":3.44,"windGust":5.72,"windBearing":280,"cloudCover":1,"uvIndex":3,"visibility":9.244,"ozone":329}
    }


]