import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";

type ButtonSize = "small" | "medium" | "full";

const ButtonContainer = styled.TouchableOpacity<{ size: ButtonSize }>`
  background-color: #000;
  padding: ${({ size }) =>
    size === "small"
      ? "8px 16px"
      : size === "medium"
      ? "12px 24px"
      : "16px 32px"};
  border-radius: 8px;
  width: ${({ size }) =>
    size === "small" ? "100px" : size === "medium" ? "250px" : "auto"};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 20px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 8px;
  font-family: ${fonts.medium};
`;

export { ButtonSize, ButtonContainer, ButtonText };
