import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingsDetailScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.image }} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/unnamed.jpg")}
            title="Aly"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingsDetailScreen;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
