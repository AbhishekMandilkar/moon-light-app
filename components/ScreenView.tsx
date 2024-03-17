import React from "react";
import { Keyboard, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Keyboard as KeyboardIcon } from "@tamagui/lucide-icons";
import { router, usePathname } from "expo-router";
import { H3, XStack } from "tamagui";

import useKeyboard from "../hooks/useKeyboard";
import usePlatform from "../hooks/usePlatform";

interface ScreenViewProps {
  children: React.ReactNode;
  disableHeader?: boolean;
  title?: string;
  customBackAction?: () => void;
  showKeyboardDismiss?: boolean;
}

const ScreenView = (props: ScreenViewProps) => {
  const { title, customBackAction, children, disableHeader } = props;
  const pathname = usePathname();
  const screenTitle = title || pathname.split("/").pop();
  const backAction =
    customBackAction || (() => router.canGoBack() && router.back());
  const isKeyboardVisible = useKeyboard();
  const { isIOS } = usePlatform();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!disableHeader && (
        <XStack
          alignItems="center"
          mb={20}
        >
          <ChevronLeft
            size={42}
            onPress={backAction}
          />
          <H3>{screenTitle}</H3>
        </XStack>
      )}
      {children}
      {isIOS && isKeyboardVisible && props.showKeyboardDismiss && (
        <XStack
          position="absolute"
          bottom={0}
          w={"100%"}
          backgroundColor={"$background"}
        >
          <KeyboardIcon
            onPress={() => Keyboard.dismiss()}
            color={"$backgroundPress"}
          />
        </XStack>
      )}
    </SafeAreaView>
  );
};

export default ScreenView;
