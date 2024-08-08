import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "../screens/home/HomeScreen";
import QuestionScreen from "../screens/question/QuestionScreen";
import { RootStackParamList } from "../navigation";
import { useState } from "react";
import CustomHeader from "../components/CustomHeader/CustomHeader";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const [progress, setProgress] = useState(0.25);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={({ route }) => ({
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
              },
              header: () => (
                <CustomHeader
                  title={route.params.categoryName}
                  progress={progress}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
