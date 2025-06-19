// client/Profile.tsx

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Keyboard 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BackgroundOne from '@/components/Backgroundone';
import MyButton from '@/components/MyButton';

const ClientProfile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [cnic, setCnic] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhotoWithCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!fullName || !cnic || !age || !address || !phone) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    console.log('Profile Saved', { fullName, cnic, age, address, phone, image });
    Alert.alert('Success', 'Profile saved successfully!');
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <BackgroundOne curveText="Client Profile">

            <TouchableOpacity style={styles.imagePicker} onPress={pickImageFromGallery}>
              {image ? (
                <Image source={{ uri: image }} style={styles.image} />
              ) : (
                <Text style={styles.imagePlaceholder}>Upload Image</Text>
              )}
            </TouchableOpacity>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.smallButton} onPress={pickImageFromGallery}>
                <Text style={styles.smallButtonText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.smallButton} onPress={takePhotoWithCamera}>
                <Text style={styles.smallButtonText}>Camera</Text>
              </TouchableOpacity>
            </View>

            <TextInput 
              placeholder="Full Name" 
              value={fullName} 
              onChangeText={setFullName} 
              style={styles.input} 
            />
            <TextInput 
              placeholder="CNIC" 
              value={cnic} 
              onChangeText={setCnic} 
              style={styles.input} 
              keyboardType="numeric" 
            />
            <TextInput 
              placeholder="Age" 
              value={age} 
              onChangeText={setAge} 
              style={styles.input} 
              keyboardType="numeric" 
            />
            <TextInput 
              placeholder="Address" 
              value={address} 
              onChangeText={setAddress} 
              style={styles.input} 
            />
            <TextInput 
              placeholder="Phone Number" 
              value={phone} 
              onChangeText={setPhone} 
              style={styles.input} 
              keyboardType="phone-pad" 
            />

            <View style={{ marginTop: 30 }}>
              <MyButton title="Save Profile" onPress={handleSubmit} />
            </View>

          </BackgroundOne>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F4F6F8',
    flexGrow: 1,
  },
  imagePicker: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  imagePlaceholder: {
    color: '#777',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  smallButton: {
    backgroundColor: '#1A1A40',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  smallButtonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    width: '100%',
    borderColor: '#1A1A40',
    borderWidth: 2,
    borderRadius: 30,
    padding: 15,
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
    backgroundColor: 'white',
  },
});
