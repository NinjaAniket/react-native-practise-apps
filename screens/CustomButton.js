import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';

class CustomButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.btn}>First Btn</Button>
        <Button success style={styles.btn}>
          success Btn
        </Button>
        <Button info style={styles.btn}>
          info Btn
        </Button>
        <Button danger rounded style={styles.btn}>
          Danger rounded
        </Button>
      </View>
    );
  }
}
export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 10,
  },
});
