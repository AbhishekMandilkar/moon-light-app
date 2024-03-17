import React from "react";
import { Image } from "react-native";
import { OnboardFlow } from "react-native-onboard";
import { router } from "expo-router";

import { brandColor, gray } from "../../utils/colors";

const Onboarding = () => {
  return (
    <>
      <OnboardFlow
        autoPlay
        primaryButtonStyle={{
          backgroundColor: brandColor.primary,
          borderRadius: 16
        }}
        titleStyle={{
          fontSize: 42
        }}
        subtitleStyle={{
          fontSize: 18
        }}
        paginationColor={gray[400]}
        paginationSelectedColor={brandColor.primary}
        onDone={() => router.push("/")}
        pages={[
          {
            title: "Simplify Your Digital Life",
            subtitle: "Say Goodbye to Forgotten Passwords",
            imageUri: Image.resolveAssetSource(
              require("../../assets/onboarding-1.png")
            ).uri,
            primaryButtonTitle: "Next"
          },
          {
            title: "Your Passwords, Your Choice",
            subtitle: "Local or Cloud – You Decide!",
            imageUri: Image.resolveAssetSource(
              require("../../assets/onboarding-2.png")
            ).uri,
            primaryButtonTitle: "Next"
          },
          {
            title: "Ready to Dive In?",
            subtitle: "Securely Manage Your Passwords in Minutes",
            imageUri: Image.resolveAssetSource(
              require("../../assets/onboarding-3.png")
            ).uri
          }
        ]}
        type={"inline"}
      />
    </>
  );
};

export default Onboarding;
