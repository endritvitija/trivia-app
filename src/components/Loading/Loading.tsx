import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";

const Loading = () => {
  return (
    <LoadingContainer style={{ flex: 1 }}>
      <ActivityIndicator size="small" />
    </LoadingContainer>
  );
};

export default Loading;
