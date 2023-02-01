import React, { useState } from "react";
import {
  View,
  Text,
  ImagePicker,
  Button,
  StyleSheet,
  Image,
} from "react-native";

const UploadScreen = () => {
  const [image, setImage] = useState(null);

  const handleSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = () => {
    // Code to upload image to server goes here
  };

  return (
    <View style={styles.container}>
      <Button
        title="Select Image"
        onPress={handleSelectImage}
        buttonStyle={styles.selectButton}
        titleStyle={styles.selectButtonTitle}
      />
      {image && (
        <View>
          <Image style={styles.selectedImage} source={{ uri: image.uri }} />
          <Button
            title="Upload"
            onPress={handleUpload}
            buttonStyle={styles.uploadButton}
            titleStyle={styles.uploadButtonTitle}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  selectButton: {
    backgroundColor: "#ffa500",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  selectButtonTitle: {
    color: "#ffa500",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedImage: {
    width: "100%",
    height: "60%",
    margin: 10,
    borderRadius: 5,
    resizeMode: "cover",
  },
  uploadButton: {
    backgroundColor: "#ffa500",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  uploadButtonTitle: {
    color: "#ffa500",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    color: "#ffa500",
  },
});

export default UploadScreen;
