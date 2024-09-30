import { Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const WellCome = () => {
  const navigation = useNavigation(); 
  const [loading, setLoading] = useState(true); // State loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Kết thúc loading sau 3 giây
      navigation.navigate('Login'); // Chuyển đến màn hình Login
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007537" /> // Hiển thị spinner trong thời gian loading
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        </ScrollView>
      )}
    </View>
  );
};

export default WellCome;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
