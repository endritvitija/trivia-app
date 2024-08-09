import React from "react";
import { ActivityIndicator } from "react-native";

import { LoadingContainer } from "./styles";
import commonStyles from "../../styles/commonStyles";

const Loading = () => {
  return (
    <LoadingContainer style={commonStyles.fullScreen}>
      <ActivityIndicator size="small" />
    </LoadingContainer>
  );
};

export default Loading;
