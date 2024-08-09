import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";

const Container = styled.View`
  padding: 10px 20px;
  display: flex;
`;

const Logo = styled.Text`
  font-size: 32px;
  font-family: ${fonts.bold};
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  font-family: ${fonts.medium};

  margin-top: 15px;
`;

const Card = styled.View`
  background-color: white;
  width: 100%;

  margin-top: 50px;
  padding: 15px;
  border-radius: 20px;
`;

const CardTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.semiBold};
`;

const CardDescription = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  margin-top: 15px;
`;

const CategoriesText = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semiBold};

  margin-top: 30px;
`;

export {
  Container,
  Logo,
  WelcomeText,
  Card,
  CardTitle,
  CardDescription,
  CategoriesText,
};
