import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  BackButton,
  CustomHeaderProps,
  HeaderContainer,
  HeaderContent,
  ProgressBar,
  ProgressBarContainer,
  Title,
} from "./styles";

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, progress }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    Alert.alert(
      "Are You Sure You Want to Go Back?",
      "If you go back now, your progress will be lost and the quiz will start from the beginning.",
      [
        {
          text: "Back",
          style: "cancel",
        },
        { text: "Yes", onPress: () => navigation.goBack() },
      ]
    );
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <BackButton onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </BackButton>
          <Title>{title}</Title>
        </HeaderContent>
      </HeaderContainer>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </>
  );
};

export default CustomHeader;
