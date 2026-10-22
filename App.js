import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// 1. HALAMAN LOGIN
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>MY APP</Text>
      <Text style={styles.subTitleApp}>UTS MOBILE 1</Text>

      <TextInput
        style={styles.input}
        placeholder="INPUT EMAIL"
        placeholderTextColor="#A0808A"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="INPUT PASSWORD"
        placeholderTextColor="#A0808A"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>TOMBOL LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

// 2. HALAMAN HOME
function HomeScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.containerHome}>
      <Text style={styles.headerHome}>HOME PAGE</Text>

      {/* Kotak Profil dengan Foto Naura */}
      <View style={styles.profileBox}>
        <View style={styles.photoBox}>
          <Image
            source={require('./assets/naura.jpg')}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.nameText}>Naura</Text>
      </View>

      {/* Grid Menu (2x2) */}
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuBox}>
            <Text style={styles.menuText}>MENU 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBox}>
            <Text style={styles.menuText}>MENU 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuBox}>
            <Text style={styles.menuText}>MENU 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBox}>
            <Text style={styles.menuText}>MENU 4</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>TOMBOL LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

// APP MAIN NAVIGATION
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleApp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 4,
  },
  subTitleApp: {
    fontSize: 14,
    fontWeight: '600',
    color: '#880E4F',
    marginBottom: 30,
  },
  input: {
    width: '85%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#F8BBD0',
    marginBottom: 15,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 13,
    color: '#4A154B',
  },
  button: {
    width: '60%',
    height: 45,
    backgroundColor: '#F48FB1',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#D81B60',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerHome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 25,
  },
  profileBox: {
    width: '85%',
    height: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#F8BBD0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    elevation: 2,
  },
  photoBox: {
    width: 85,
    height: 85,
    backgroundColor: '#FCE4EC',
    borderRadius: 42.5,
    borderWidth: 2,
    borderColor: '#F48FB1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 42.5,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#880E4F',
  },
  menuContainer: {
    width: '85%',
    marginBottom: 20,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  menuBox: {
    width: '47%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#F8BBD0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#AD1457',
  },
  logoutButton: {
    width: '60%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#E91E63',
  },
});