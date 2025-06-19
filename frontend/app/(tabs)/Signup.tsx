import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import BackgroundOne from '../../components/Backgroundone';
import MyButton from '../../components/MyButton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    router.push('/OTP?next=TypeSelector');
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <BackgroundOne curveText="Signup">
        <View style={styles.formContainer}>
          <TextInput placeholder="Enter Email" value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor="#555" />
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={styles.input} placeholderTextColor="#555" />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#001F54" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={!showConfirmPassword} style={styles.input} placeholderTextColor="#555" />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={24} color="#001F54" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <MyButton title="Sign Up" onPress={handleSignUp} />
          </View>
          <TouchableOpacity onPress={() => router.push('/Login')}>
            <Text style={styles.signupText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </BackgroundOne>
    </TouchableOpacity>
  );
};

export default Signup;

const styles = StyleSheet.create({
  formContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  input: { backgroundColor: 'white', borderColor: '#001F54', borderWidth: 3, borderRadius: 30, paddingHorizontal: 20, paddingVertical: 15, fontSize: 16, color: 'black', width: 300, marginVertical: 10 },
  inputWrapper: { width: 300, justifyContent: 'center' },
  eyeIcon: { position: 'absolute', right: 20, top: 20 },
  signupText: { marginTop: 20, color: '#001F54', fontSize: 16 }
});
