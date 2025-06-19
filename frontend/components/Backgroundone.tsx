import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const circleSize = 150;

const BackgroundOne = ({ children, curveText }) => {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const glowInterpolation = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0,31,84,0.5)', 'rgba(0,31,84,1)'],
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#D3D3D3', '#D3D3D3']} style={styles.gradient}>
        
        <Animated.View style={[styles.glowCircle, { borderColor: glowInterpolation }]}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{curveText}</Text>
          </View>
        </Animated.View>

        {children}

      </LinearGradient>
    </View>
  );
};

export default BackgroundOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: circleSize / 2 + 30,
  },
  glowCircle: {
    position: 'absolute',
    top: 80,
    width: circleSize + 20,
    height: circleSize + 20,
    borderRadius: (circleSize + 20) / 2,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#001F54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
