import React from "react";
import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import "../global.css";

const MyPager = () => {
  return (
    <PagerView style={{ flex: 1 }} initialPage={0}>
      <View key="1">
        <Text className="text-red-500">First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

export default MyPager;
