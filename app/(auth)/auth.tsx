import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, H1, H3, Input, Text, YStack } from "tamagui";

import { useAuth } from "../../hooks/useAuth";
import useDimension from "../../hooks/useDimension";
import { gray } from "../../utils/colors";

const AuthScreen = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    signUpWithEmail
  } = useAuth();
  const { width, height } = useDimension();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderWidth: 1,
        alignItems: "center"
      }}
    >
      <StatusBar style="dark" />
      <Text
        fontWeight={"900"}
        fontSize={32}
        textAlign="left"
        color={"$backgroundStrong"}
        mt={height * 0.2}
      >
        Welcome back! Glad to see you. Again
      </Text>
      <YStack
        gap={18}
        p={16}
        width={"100%"}
      >
        <Input
          backgroundColor={gray[200]}
          bw={0}
          //   p={20}
          placeholder="Email"
          value={email}
          onChangeText={(e) => handleEmailChange(e)}
        />
        <Input
          //   p={20}
          backgroundColor={gray[200]}
          bw={0}
          placeholder="Password"
          value={password}
          onChangeText={(e) => handlePasswordChange(e)}
        />
        <Button
          p={20}
          borderRadius={16}
          color={"white"}
          onPress={() => router.back()}
        >
          Login
        </Button>
      </YStack>
    </SafeAreaView>
  );
};

export default AuthScreen;
