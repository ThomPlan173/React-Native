import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";

import { default as data } from "../../api/data2.json";
import {Card } from 'react-native-paper';
const renderItem = ({ item }) => {
  return (
    <View>
      <Card>
        <Card.Content>
        <Text>{item.name}</Text>
        <Text>{item.model}</Text>
        <Text>{item.cost_in_credits}</Text>
        <Text>{item.crew}</Text>
        <Text>{item.hyperdrive_rating}</Text>
        <Text>{item.cost_in_credits}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export const StarshipFeedScreen = () => {
  const datas = data.results;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};
export default StarshipFeedScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
