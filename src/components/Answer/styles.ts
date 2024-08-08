import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";

const AnswerContainer = styled.TouchableOpacity<{ selected: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ selected }) => (selected ? "#F0E6FF" : "#FFFFFF")};
  
  border: 1px solid #d5d2d5;
  border-radius: 12px;
  
  padding: 16px;
  margin-bottom: 8px;
  margin-top: 15px;
`;

const AnswerText = styled.Text<{ selected: boolean }>`
  font-size: 16px;
  font-family: ${fonts.medium};
  color: ${({ selected }) => (selected ? "#000000" : "#020202")};

`;

export { AnswerContainer, AnswerText };
