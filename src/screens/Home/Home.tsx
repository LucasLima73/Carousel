import React from "react";
import { View, Text, Button } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header />
        <Body />
      </View>
  );
};

export default Home;
