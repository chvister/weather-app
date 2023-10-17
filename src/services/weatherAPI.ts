import { WeatherResponse } from "../types/WeatherResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  }),
  reducerPath: "weatherAPI",
  endpoints: (build) => ({
    getWeatherByName: build.query<WeatherResponse, string>({
      query: (name) =>
        `?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetWeatherByNameQuery } = api;
