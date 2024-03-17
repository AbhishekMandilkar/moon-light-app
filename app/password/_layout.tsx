// app/(auth)/_layout.js

import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function PasswordLayout() {
  return (
    <>
      <Slot />
    </>
  );
}
