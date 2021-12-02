import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

import Text from "../../components/Text";
import Divider from "../../components/Divider";

const data = [
  {
    title: "더 이상의 자세한 설명은 생략한다.",
    image: require("../../assets/image/image_no_explain.png"),
  },
  {
    title: "더 이상의 자세한 설명은 생략한다.",
    image: require("../../assets/image/image_no_explain.png"),
  },
  {
    title: "더 이상의 자세한 설명은 생략한다.",
    image: require("../../assets/image/image_no_explain.png"),
  },
  {
    title: "더 이상의 자세한 설명은 생략한다.",
    image: require("../../assets/image/image_no_explain.png"),
  },
  {
    title: "더 이상의 자세한 설명은 생략한다.",
    image: require("../../assets/image/image_no_explain.png"),
  },
  {
    title: "더 이상의 자세한 설명은 생략한다.",
    image: require("../../assets/image/image_no_explain.png"),
  },
];

export default ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <FlatList
        contentContainerStyle={styles.flat_list_container}
        data={data}
        renderItem={RenderList}
      />
    </View>
  );
};

const RenderList = ({ item }) => {
  const imageWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.item_container]}>
      <Image
        style={{
          width: imageWidth / 2,
          height: 200,
          marginBottom: 30,
          alignSelf: "center",
        }}
        source={item.image}
        resizeMode="contain"
      />
      <Divider />
      <Text style={{ textAlign: "center", marginTop: 30 }} category="H2">
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
