import { Platform } from "react-native";

const usePlatform = () => {
  const platformOs = Platform.OS;

  return {
    isAndroid: platformOs === "android",
    isIOS: platformOs === "ios",
    isWeb: platformOs === "web"
  };
};

export default usePlatform;
