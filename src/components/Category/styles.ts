import styled from "styled-components/native";
import fonts from "../../assets/fonts/fonts";

const QuestionCard = styled.TouchableOpacity`
    background-color: white;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    margin-top: 15px;
    border-radius: 20px;

    border: 1px solid #DDDEE3;
`;

const QuestionTitle = styled.Text`
    font-size: 20px;
    font-family: ${fonts.medium};
`

export { QuestionCard, QuestionTitle };
