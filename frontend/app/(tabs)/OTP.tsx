import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import BackgroundOne from '../../components/Backgroundone';
import MyButton from '../../components/MyButton';
import { useRouter, useLocalSearchParams } from 'expo-router';

const OTP = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const nextScreen = (params.next as string) || '/TypeSelector';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      text = text.charAt(text.length - 1);
    }
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const fullOtp = otp.join('');
    console.log("Submitted OTP:", fullOtp);
    router.push(nextScreen as never);  // ✅ This is the important fix
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BackgroundOne curveText="Enter OTP">
          <View style={styles.formContainer}>
            <Text style={styles.instructionText}>Enter the 6-digit code sent to your email</Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => { if (ref) inputsRef.current[index] = ref; }}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  style={styles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
            </View>

            <View style={{ marginTop: 40 }}>
              <MyButton title="Verify OTP" onPress={handleSubmit} />
            </View>

            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </BackgroundOne>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#001F54',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
  },
  otpInput: {
    backgroundColor: 'white',
    borderColor: '#001F54',
    borderWidth: 3,
    borderRadius: 15,
    width: 45,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  resendText: {
    marginTop: 20,
    color: '#001F54',
    fontSize: 16,
  },
});
