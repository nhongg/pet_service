import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TrangChu = () => {
  return (
    <View style={styles.container}>
      <Text>TrangChu</Text>
      <Text>test thu</Text>
    </View>
  );
};

export default TrangChu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
