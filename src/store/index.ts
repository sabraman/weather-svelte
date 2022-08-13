import type { WeatherResponseType } from "../utils/types";
import { getWeatherData } from "../utils/api";
import { writable } from "svelte/store";

const MOSCOW_LOCATION = {
  latitude: 55.7558,
  longitude: 37.6173,
};

export const location = writable({
  latitude: Number(localStorage.getItem("latitude")) || MOSCOW_LOCATION.latitude,
  longitude:
    Number(localStorage.getItem("longitude")) || MOSCOW_LOCATION.longitude,
});

export const data = writable<WeatherResponseType>();

export const useFahrenheit = writable(
  Boolean(localStorage.getItem("useFahrenheit"))
);

export const isError = writable(false);

location.subscribe(async (newLocation) => {
  localStorage.setItem("latitude", String(newLocation.latitude));
  localStorage.setItem("longitude", String(newLocation.longitude));

  try {
    const weatherData = await getWeatherData(
      newLocation.latitude,
      newLocation.longitude
    );

    data.set(weatherData);
  } catch (error) {
    console.log(error);

    isError.set(true);
  }
});

useFahrenheit.subscribe((newValue) => {
  localStorage.setItem("useFahrenheit", newValue ? "1" : "");
});
