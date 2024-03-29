import { Dimensions } from "react-native";

export default function useDimension() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return { width, height };
}
