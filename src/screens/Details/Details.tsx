import React from "react";
import { View, Text, Image } from "react-native";

type Props = {
  route: any;
};

const Details = ({ route }: Props) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={{ uri: item }} style={{ width: 300, height: 300 }} />
    </View>
  );
};

export default Details;
