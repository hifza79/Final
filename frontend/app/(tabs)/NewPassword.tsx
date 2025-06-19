import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, TouchableOpacity,
  Keyboard, KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import BackgroundOne from '../../components/Backgroundone';
import MyButton from '../../components/MyButton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const NewPassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      console.log('Password reset successfully');
      router.push('/(tabs)/TypeSelector');
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={{ flex: 1 }}>
          <BackgroundOne curveText="New Password">
            <View style={styles.formContainer}>
              {/* New Password */}
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#555"
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#001F54" />
                </TouchableOpacity>
              </View>

              {/* Confirm Password */}
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={styles.input}
                  secureTextEntry={!showConfirmPassword}
                  placeholderTextColor="#555"
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={24} color="#001F54" />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 20 }}>
                <MyButton title="Save Password" onPress={handleSubmit} />
              </View>
            </View>
          </BackgroundOne>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,  // Optional: to push content down if needed
  },
  inputWrapper: {
    width: 300,
    justifyContent: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#001F54',
    borderWidth: 3,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    color: 'black',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 18,
  }
});
