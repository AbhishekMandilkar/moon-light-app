import React, { useCallback, useMemo, useRef } from "react";
import { Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

const BottomSheetView = (props: { children: React.ReactNode }) => {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["70%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );
  return (
    <BottomSheet
      enablePanDownToClose
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.3
      }}
      // backdropComponent={renderBackdrop}
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      onClose={handleClosePress}
    >
      {props.children}
    </BottomSheet>
  );
};

export default BottomSheetView;
