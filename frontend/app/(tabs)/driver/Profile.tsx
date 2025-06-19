// client/Profile.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Client Profile Screen</Text>
    </View>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
