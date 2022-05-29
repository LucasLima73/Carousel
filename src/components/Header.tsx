import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;

type Props = {
  item: {
    img: string;
    title: string;
  };
  index: number;
};
interface iHomeProps {
  navigation: NativeStackScreenProps<any, any>;
  navigate: any;
}

import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation<iHomeProps>();
  const [activeIndex, setActiveIndex] = useState(0);

  const CarouselItems = [
    {
      img: "https://images.pexels.com/photos/10438284/pexels-photo-10438284.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      title: "First Item",
    },
    {
      img: "https://images.pexels.com/photos/1030852/pexels-photo-1030852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Second Item",
    },
    {
      img: "https://images.pexels.com/photos/3499176/pexels-photo-3499176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Third Item",
    },
  ];
  function carouselCardItem({ item, index }: Props) {
    return (
      <View style={styles.cardCarousel} key={index}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("Details", { item: item.img });
          }}
        >
          <Image style={styles.image} source={{ uri: item.img }} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={CarouselItems}
        renderItem={carouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        loop={true}
        loopClonesPerSide={5}
        autoplayDelay={500}
        autoplay={true}
        enableSnap={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardCarousel: {
    width: ITEM_WIDTH,
    position: "absolute",
  },
  image: {
    height: 250,
    borderRadius: 8,
  },
  title: {
    marginTop: -30,
    left: 10,
    fontSize: 20,
    color: "#fff",
  },
});
