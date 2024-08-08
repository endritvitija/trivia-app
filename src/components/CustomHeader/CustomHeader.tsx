import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Animated, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAtom } from "jotai";

import { currentCategoryAtom, progressAtom } from "../../atoms/triviaAtoms";

import {
  BackButton,
  CustomHeaderProps,
  HeaderContainer,
  HeaderContent,
  ProgressBar,
  ProgressBarContainer,
  Title,
} from "./styles";

const CustomHeader = () => {
  const navigation = useNavigation();

  const [progress] = useAtom(progressAtom);
  const [currentCategory] = useAtom(currentCategoryAtom);

  const widthAnim = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress * 100,
      duration: 500, // Animation duration
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <HeaderContainer>
        <HeaderContent>
          <BackButton onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </BackButton>
          <Title>{currentCategory}</Title>
        </HeaderContent>
      </HeaderContainer>
      <ProgressBarContainer>
        <ProgressBar
          style={{
            width: widthAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
      </ProgressBarContainer>
    </View>
  );
};

export default CustomHeader;
