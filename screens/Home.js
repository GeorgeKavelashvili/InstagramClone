import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: "https://www.ku.ac.ae/wp-content/uploads/2020/09/Arvid-Loken-photo-150x150.jpg",
      likes: 10,
    },
    {
      id: 2,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 5,
    },
    {
      id: 3,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 3,
    },
    {
      id: 4,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 12,
    },
    {
      id: 5,
      url: "https://www.ku.ac.ae/wp-content/uploads/2020/09/Arvid-Loken-photo-150x150.jpg",
      likes: 39,
    },
    {
      id: 6,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 13,
    },
    {
      id: 7,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 78,
    },
    {
      id: 8,
      url: "https://www.ku.ac.ae/wp-content/uploads/2020/09/Arvid-Loken-photo-150x150.jpg",
      likes: 34,
    },
    {
      id: 9,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 42,
    },
    {
      id: 10,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 45,
    },
    {
      id: 11,
      url: "https://www.ku.ac.ae/wp-content/uploads/2020/09/Arvid-Loken-photo-150x150.jpg",
      likes: 36,
    },
    {
      id: 13,
      url: "https://www.nsca.org/wp-content/uploads/2021/09/Steve-Wingo-photo-150x150-1.jpg",
      likes: 73,
    },
  ]);

  const handleLike = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, likes: photo.likes + 1 };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {photos.map((photo) => (
          <View key={photo.id} style={styles.photoContainer}>
            <Image style={styles.photo} source={{ url: photo.url }} />
            <View style={styles.photoInfoContainer}>
              <Text style={styles.photoLikes}>Likes: {photo.likes}</Text>
              <TouchableOpacity onPress={() => handleLike(photo.id)}>
                <Text style={styles.likeButton}>Like</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  photoContainer: {
    width: "90%",
    height: 300,
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    backgroundColor: "#FFFFFF",
  },
  photo: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  photoInfoContainer: {
    height: "40%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  photoLikes: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#007AFF",
  },
  likeButton: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#007AFF",
    marginTop: 10,
  },
});

export default HomeScreen;
