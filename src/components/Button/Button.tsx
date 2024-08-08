import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ButtonContainer, ButtonSize, ButtonText } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  size?: ButtonSize;
  iconName?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  iconName,
  ...props
}) => {
  return (
    <ButtonContainer size={size} {...props}>
      <ButtonText>{title}</ButtonText>
      {iconName && <Feather name={iconName} size={20} color="#fff" />}
    </ButtonContainer>
  );
};

export default Button;
