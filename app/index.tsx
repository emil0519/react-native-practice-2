import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  verifyInstallation();

  return (
    <View className="flex justify-center items-center h-full">
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
