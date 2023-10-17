import React, { FunctionComponent } from "react";
import { CityWeather } from "./CityWeather";
import { WrapperCityWeatherProps } from "../types/WrapperCityWeather";
import { useGetWeatherByNameQuery } from "../services/weatherAPI";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";

const WrapperCityWeather: FunctionComponent<WrapperCityWeatherProps> = ({
  cityName,
}) => {
  const { data, isError, isLoading } = useGetWeatherByNameQuery(cityName);
  return (
    <div>
      <LoadingComponent isLoading={isLoading} />
      <ErrorComponent isError={isError} cityName={cityName} />
      {data && data.main && (
        <>
          <CityWeather
            name={data.name}
            country={data.sys.country}
            description={data.weather[0].description}
            icon={data.weather[0].icon}
            windSpeed={data.wind.speed}
            temp={data.main.temp}
          />
        </>
      )}
    </div>
  );
};

export default WrapperCityWeather;
