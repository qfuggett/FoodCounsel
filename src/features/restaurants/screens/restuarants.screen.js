import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar />
        </View>
        <View style={styles.list}>
            <RestaurantInfo />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight 
  },
  search: {
    padding: 16, 
    backgroundColor: "white"
  },
  list: {
    flex: 1, 
    padding: 16, 
    backgroundColor: "#C21807"
  }
});