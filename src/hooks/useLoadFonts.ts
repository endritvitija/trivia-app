import { useFonts } from "expo-font";
import fonts from "../assets/fonts/fonts";

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    [fonts.regular]: require("../assets/fonts/Poppins-Regular.ttf"),
    [fonts.medium]: require("../assets/fonts/Poppins-Medium.ttf"),
    [fonts.mediumItalic]: require("../assets/fonts/Poppins-MediumItalic.ttf"),
    [fonts.semiBold]: require("../assets/fonts/Poppins-SemiBold.ttf"),
    [fonts.bold]: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return fontsLoaded;
};

export default useLoadFonts;
