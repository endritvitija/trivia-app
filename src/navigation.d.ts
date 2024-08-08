import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Question: { category: number };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type QuestionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Question"
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  QuestionScreenNavigationProp,
};
