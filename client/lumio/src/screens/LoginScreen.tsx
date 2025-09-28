import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Styles} from './styles';
const LoginScreen = () => {
  const [username, setUsername] = useState<string>(''); // type annotation for state
  const [password, setPassword] = useState<string>('');

  const styles = Styles;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Lumio</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
