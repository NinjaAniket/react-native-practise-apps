import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Nomezer() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.topSectionText}>HIN</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.middleSectionText}>DU</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomSectionText}>STAN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexGrow: 3,
    backgroundColor: 'orangered',
    alignItems: 'center',
  },
  middleSection: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    flexGrow: 3,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topSectionText: {
    marginTop: 50,
    fontWeight: 'bold',
  },
  bottomSectionText: {
    fontWeight: 'bold',
    marginBottom: 50,
  },
  middleSectionText: {
    fontWeight: 'bold',
  },
});
