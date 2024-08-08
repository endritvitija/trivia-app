import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";

interface CustomHeaderProps {
  title: string;
  progress: number; // Progress should be a value between 0 and 1
}

const HeaderContainer = styled.View`
  background-color: #fff;
  padding: 16px 16px 0 16px;
  padding-top: 48px;
`;

const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled(TouchableOpacity)`
  background-color: #f0eaff;
  border-radius: 12px;
  padding: 8px;
  margin-right: 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.semiBold};
`;

const ProgressBarContainer = styled.View`
  height: 4px;
  background-color: #e0d4fc;
  overflow: hidden;
  margin-top: 16px;
`;

const ProgressBar = styled.View<{ progress: number }>`
  height: 100%;
  background-color: #8a2be2;
  width: ${({ progress }) => `${progress * 100}%`};

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export {
  HeaderContainer,
  HeaderContent,
  BackButton,
  Title,
  ProgressBarContainer,
  ProgressBar,
  CustomHeaderProps,
};
