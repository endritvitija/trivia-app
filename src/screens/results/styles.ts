import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";
import { SafeAreaView } from "react-native-safe-area-context";

const ResultsContainer = styled(SafeAreaView)`
  padding: 10px 20px;
  display: flex;
`;

const Logo = styled.Text`
  font-size: 32px;
  font-family: ${fonts.bold};
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};

  margin-top: 15px;
`;

const ResultText = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};

  margin-top: 15px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${fonts.medium};

  margin-top: 5px;
`;

const PerformanceText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.medium};

  width: 200px;

  color: #656565;
`;

const Card = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

  background-color: white;
  width: 100%;

  margin-top: 50px;
  padding: 15px;
  border-radius: 20px;
  border: solid 1px #ddd;
`;

export {
  ResultsContainer,
  Logo,
  Title,
  SubTitle,
  Card,
  ResultText,
  PerformanceText,
};
