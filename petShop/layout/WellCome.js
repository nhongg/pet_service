import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const WellCome = ({ navigation }) => {
  //long 

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      navigation.navigate("Login")
    },3000)
    return ()=>clearTimeout(timeOut)
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Meet your animal needs here</Text>
      </View>
      <ImageBackground
        source={require('../image/Effect.png')}
        style={{ height: '100%', width: '100%' }}
      >

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
      </ImageBackground>
    </View>
  )
}

export default WellCome

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    width: '100%'
  },
  textContainer: {
    marginTop: 60,
    width: '100%',

  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft:'15%',
    margin:20
  },
  imageContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  image: {
    // height: 300,
    // width: 100,
  },
  subtextContainer: {
    
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop:'28%'
  },
})