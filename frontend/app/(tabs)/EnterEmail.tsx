import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import BackgroundOne from '../../components/Backgroundone';
import MyButton from '../../components/MyButton';
import { useRouter } from 'expo-router';

const EnterEmail = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    router.push('/OTP?next=NewPassword');
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <BackgroundOne curveText="Enter Email">
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#555"
          />
          <View style={{ marginTop: 20 }}>
            <MyButton title="Send OTP" onPress={handleSubmit} />
          </View>
        </View>
      </BackgroundOne>
    </TouchableOpacity>
  );
};

export default EnterEmail;

const styles = StyleSheet.create({
  formContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  input: { backgroundColor: 'white', borderColor: '#001F54', borderWidth: 3, borderRadius: 30, paddingHorizontal: 20, paddingVertical: 15, fontSize: 16, color: 'black', width: 300, marginVertical: 10 },
});
