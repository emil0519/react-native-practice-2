import React from "react";
import { Text } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

const Home = () => {
  return (
    <PagerView style={{ flex: 1 }} initialPage={0}>
      <SafeAreaView key="1">
        <Text className="text-red-500">First page</Text>
      </SafeAreaView>
      <SafeAreaView key="2">
        <Text>Second page</Text>
      </SafeAreaView>
    </PagerView>
  );
};

export default Home;
