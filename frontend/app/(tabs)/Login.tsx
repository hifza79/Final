import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import BackgroundOne from '../../components/Backgroundone';
import MyButton from '../../components/MyButton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push('/OTP?next=TypeSelector');
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <BackgroundOne curveText="Login">
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#555"
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.input}
              placeholderTextColor="#555"
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#001F54" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => router.push('/EnterEmail')}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <MyButton title="Login" onPress={handleLogin} />
          </View>
          <TouchableOpacity onPress={() => router.push('/Signup')}>
            <Text style={styles.signupText}>Create new account? Signup</Text>
          </TouchableOpacity>
        </View>
      </BackgroundOne>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  formContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  input: { backgroundColor: 'white', borderColor: '#001F54', borderWidth: 3, borderRadius: 30, paddingHorizontal: 20, paddingVertical: 15, fontSize: 16, color: 'black', width: 300, marginVertical: 10 },
  inputWrapper: { width: 300, justifyContent: 'center' },
  eyeIcon: { position: 'absolute', right: 20, top: 20 },
  forgetText: { marginTop: 10, alignSelf: 'flex-end', marginRight: 30, color: '#001F54', fontSize: 14 },
  signupText: { marginTop: 20, color: '#001F54', fontSize: 16 }
});
