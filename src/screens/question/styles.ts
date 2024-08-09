import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";

const QuestionContainer = styled.View`
    padding: 20px;
`;

const QuestionsCountLabel = styled.Text`
    font-size: 12px;
    font-family: ${fonts.medium};

    color: #6D1C9C;
`

const QuestionText = styled.Text`
    font-size: 16px;
    font-family: ${fonts.semiBold};

    color: #020202;

    margin-top: 30px;
    min-height: 80px;
`

export { QuestionContainer, QuestionsCountLabel, QuestionText };
