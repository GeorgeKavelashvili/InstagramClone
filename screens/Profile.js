import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.profileImage} />
        <Text style={styles.name}>George</Text>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
});

export default ProfileScreen;
