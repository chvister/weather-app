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
        `?q=${name}&units=metric&appid=ef3e0a3db891971abc90401d074e22fa`,
    }),
  }),
});

export const { useGetWeatherByNameQuery } = api;
