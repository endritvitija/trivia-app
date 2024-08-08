import { View, Text } from "react-native";
import React from "react";
import { AnswerContainer, AnswerText } from "./styles";
import { FontAwesome6 } from "@expo/vector-icons";

type AnswerProps = {
  title: string;
  selected: boolean | null;
  onPress: () => void;
};

const Answer = ({ title, selected, onPress }: AnswerProps) => {
  return (
    <AnswerContainer selected={selected} onPress={onPress}>
      <AnswerText selected={selected}>{title}</AnswerText>
      <FontAwesome6
        name={selected ? "check-circle" : "circle"}
        color={selected ? "#8a2be2" : "#D5D2D5"}
        size={24}
      />
    </AnswerContainer>
  );
};

export default Answer;
