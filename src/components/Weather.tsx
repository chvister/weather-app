import React, { FunctionComponent } from "react";
import { useState } from "react";
import WrapperCityWeather from "./WrapperCityWeather";
import SearchCity from "./SearchCity";

const Weather: FunctionComponent = () => {
  const [cities, setCities] = useState<string[]>([]);
  return (
    <div>
      <h1 className="app-name">
        Weather App<span>🌤</span>
      </h1>
      <SearchCity setCities={setCities} />
      {cities.length > 0 &&
        cities.map((city: string, index: number) => (
          <WrapperCityWeather key={index} cityName={city} />
        ))}
    </div>
  );
};

export default Weather;
