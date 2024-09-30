import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const WellCome = () => {
  const navigation = useNavigation(); // Khởi tạo navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Điều hướng đến màn hình Login
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup function để xóa timer nếu component bị unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Meet your animal needs here</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={require('../image/wellcome.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.subtextContainer}>
        <Text style={styles.subtitle}>Find best recipes for cooking</Text>
      </View>
    </View>
  );
};

export default WellCome;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  textContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  imageContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: '100%',
  },
  subtextContainer: {
    marginTop: 50,
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
  },
});
