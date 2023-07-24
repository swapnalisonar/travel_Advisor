import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '1d2020b3b5msh73b7eae9b38041fp1394e8jsn4f3edbb5ce89',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data?.filter((place) => (place.name && place.num_reviews > 0));
    }
    catch (error) {
        console.error(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather`, {
            params: {
                lat: lat,
                lon: lng
            },
            headers: {
                'X-RapidAPI-Key': '1d2020b3b5msh73b7eae9b38041fp1394e8jsn4f3edbb5ce89',
                'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
            }
        });
        return data;
    }
    catch (error) {
        console.error(error);
    }
};