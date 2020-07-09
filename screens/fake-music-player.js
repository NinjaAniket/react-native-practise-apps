import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import HeartIcon from 'react-native-vector-icons/Entypo';
export default function FakeMusicPlayer() {
  const [liked, setLike] = useState();
  const name = 'Believer - Imagine Dragons';
  const handleLike = () => {
    setLike(!liked);
  };
  const likedStyle = liked ? styles.liked : undefined;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer} />
        <Text style={styles.title}>
          <Text style={styles.subTitle}>Playing: </Text>
          {name}
        </Text>
      </View>

      <View style={styles.heartContainer}>
        <TouchableHighlight
          onPress={handleLike}
          style={styles.highlightBtn}
          underlayColor="#f2f2f2">
          <HeartIcon name="heart" style={[styles.icon, likedStyle]} />
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#e67e22',
    borderRadius: 10,
    marginTop: 100,
  },
  innerContainer: {
    backgroundColor: '#d35400',
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 18,
    top: 15,
    left: 10,
    position: 'absolute',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  subTitle: {
    fontWeight: 'bold',
  },

  heartContainer: {},
  liked: {
    color: 'red',
  },
  icon: {
    fontSize: 32,
    textAlign: 'center',
    color: 'grey',
  },
  highlightBtn: {
    padding: 10,
    borderRadius: 5,
  },
});
