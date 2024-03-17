import React, { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Filter, ListFilter, Plus, PlusCircle } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { Button, Input, Text, View, XStack, YStack } from "tamagui";

import { brandColor } from "../../utils/colors";
import FilterView from "../FilterView";
import HomeHeader from "../HomeHeader";
import ScreenView from "../ScreenView";

const HomeScreen = () => {
  const filterModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    filterModalRef.current?.present();
  }, []);

  return (
    <ScreenView disableHeader>
      <YStack
        gap="$4"
        bw={1}
        borderColor={"red"}
        flex={1}
      >
        <HomeHeader />
        <XStack
          gap="$2"
          h="$6"
        >
          <Input
            placeholder="Search"
            flex={1}
          />
          <Button onPress={handlePresentModalPress}>
            <ListFilter size="24" />
          </Button>
        </XStack>
        <BottomSheetModal
          ref={filterModalRef}
          snapPoints={["50%"]}
          enableDismissOnClose
          detached
        >
          <BottomSheetView>
            <FilterView />
          </BottomSheetView>
        </BottomSheetModal>
        <Button
          position="absolute"
          bottom={10}
          right={10}
          circular
          size={64}
          backgroundColor={brandColor.primary}
          onPress={() => router.push("/password")}
        >
          <Plus
            size={42}
            color={"white"}
          />
        </Button>
      </YStack>
    </ScreenView>
  );
};

export default HomeScreen;
