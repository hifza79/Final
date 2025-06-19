import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
          <Stack.Screen name="OTP" options={{ headerShown: false }} />
          <Stack.Screen name="NewPassword" options={{ headerShown: false }} />

            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
