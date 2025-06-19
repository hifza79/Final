import React from 'react';
import { 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import BackgroundOne from '../../components/Backgroundone';
import MyButton from '../../components/MyButton';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

const TypeSelector = () => {
  const router = useRouter();

  const handleClient = () => {
    // ✅ Correct navigation to client profile inside tabs
    router.push('/(tabs)/client/Profile');
  };

  const handleDriver = () => {
    // ✅ Correct navigation to driver profile inside tabs
    router.push('/(tabs)/driver/Profile');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BackgroundOne curveText="Choose Role">
          <View style={styles.container}>
            <View style={styles.buttonWrapper}>
              <MyButton title="Continue as Client" onPress={handleClient} />
              <View style={{ height: 20 }} />
              <MyButton title="Continue as Driver" onPress={handleDriver} />
            </View>
          </View>
        </BackgroundOne>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TypeSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: height * 0.25,
    alignItems: 'center',
  },
});
