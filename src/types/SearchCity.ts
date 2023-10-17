import { Dispatch, SetStateAction } from "react";

export type SearchCityProps = {
    setCities: Dispatch<SetStateAction<string[]>>;
  }