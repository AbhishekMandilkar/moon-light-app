import React from "react";
import { Settings, X } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Avatar, H2, H4, Spacer, Stack, Text, XStack } from "tamagui";

const HomeHeader = () => {
  return (
    <XStack>
      <XStack
        flex={1}
        alignItems="center"
      >
        <H4
          fontSize={48}
          fontFamily={"$heading"}
        >
          Hello, John Doe
        </H4>
      </XStack>
      <XStack
        gap="$2"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link href="/settings">
          <Avatar
            circular
            size="$4"
          >
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </Link>
      </XStack>
    </XStack>
  );
};

export default HomeHeader;
