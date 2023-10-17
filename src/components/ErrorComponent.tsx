import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

type ErrorProp = {
  isError: boolean;
  cityName: string;
};

const ErrorComponent: FunctionComponent<ErrorProp> = ({
  isError,
  cityName,
}) => {
  return (
    <div>
      {isError && (
        <>
          <br />
          <br />
          <span className="error-message">
            <FontAwesomeIcon icon={faFrown} />
            <span style={{ fontSize: "20px" }}>
              Sorry, City not found {cityName}
            </span>
          </span>
        </>
      )}
    </div>
  );
};

export default ErrorComponent;
