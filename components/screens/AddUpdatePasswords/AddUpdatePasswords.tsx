import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Input, ScrollView, Text, YStack } from "tamagui";

import usePlatform from "../../../hooks/usePlatform";
import ScreenView from "../../ScreenView";

import useAddOrUpdatePassword from "./useAddOrUpdatePassword";

const AddUpdatePasswords = () => {
  const { id } = useLocalSearchParams();
  const isUpdate = !!id;
  const { componentState, handleOnChange } = useAddOrUpdatePassword();
  const { isIOS } = usePlatform();
  return (
    <ScreenView
      title={isUpdate ? "Update Password" : "Add Password"}
      showKeyboardDismiss
    >
      <KeyboardAvoidingView behavior={isIOS ? "position" : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <YStack gap="$4">
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
            <Input
              placeholder="Site"
              value={componentState.site}
              onChangeText={(e) => handleOnChange("site", e)}
            />
            <Input
              placeholder="Username"
              value={componentState.username}
              onChangeText={(e) => handleOnChange("username", e)}
            />
            <Input
              placeholder="Password"
              value={componentState.password}
            />
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenView>
  );
};

export default AddUpdatePasswords;
