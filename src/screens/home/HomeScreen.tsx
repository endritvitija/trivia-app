import React, { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

import {
  Card,
  CardDescription,
  CardTitle,
  CategoriesText,
  Container,
  Logo,
  WelcomeText,
} from "./styles";
import Button from "../../components/Button/Button";
import { QuestionScreenNavigationProp } from "../../navigation";

import categoriesData from "../../constants/question-categories.json";
import Category from "../../components/Category/Category";
import {
  QuestionCategories,
  Categories,
} from "../../constants/types/categories.type";

const HomeScreen = () => {
  const navigation = useNavigation<QuestionScreenNavigationProp>();

  const listRef = useRef(null);

  const onNavigate = (category: number) => {
    navigation.navigate("Question", { category });
  };

  const renderListHeaderComponent = useCallback(
    () => (
      <>
        <Logo>Trivia</Logo>
        <WelcomeText>Welcome</WelcomeText>
        <Card>
          <CardTitle>Let’s Start Now!</CardTitle>
          <CardDescription>
            Play, Learn and Explore with Exciting Quizzes!
          </CardDescription>
          <Button
            title="General Knowledge"
            size="medium"
            iconName="arrow-right"
            onPress={() => onNavigate(Categories.GENERAL_KNOWLEDGE)}
          />
        </Card>
        <CategoriesText>Choose a Quiz Category</CategoriesText>
      </>
    ),
    []
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<any>) => (
      <Category
        data={item}
        onPress={(categoryId: string) => onNavigate(parseInt(categoryId))}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item: any) => item.value.toString(), []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ flex: 1 }}>
        <FlashList
          ref={listRef}
          data={categoriesData}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderListHeaderComponent}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          estimatedItemSize={7}
          numColumns={1}
        />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
