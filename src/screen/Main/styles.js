import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.color_secondary_lightsand,
  },
  flat_list_container: {
    paddingBottom: 20,
  },
  item_container: {
    marginHorizontal: 40,
    marginTop: 20,
    borderColor: colors.color_secondary_lightgray,
    borderWidth: 1,
    backgroundColor: colors.color_secondary_white,
    borderRadius: 10,
    padding: 20,
  },
});
