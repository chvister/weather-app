import React, { FunctionComponent } from "react";
import { InfinitySpin } from "react-loader-spinner";

type LoadingProp = {
  isLoading: boolean;
};

const LoadingComponent: FunctionComponent<LoadingProp> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <>
          <br />
          <br />
          <InfinitySpin width="100px" />
        </>
      )}
    </div>
  );
};

export default LoadingComponent;
