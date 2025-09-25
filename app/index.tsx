import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';

export default function CustomerRegistration() {
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [idFocused, setIdFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);

  const handleRegister = () => {
    console.log('Register button pressed');
    console.log('ID Number:', idNumber);
    console.log('Full Name:', fullName);

    if (!idNumber.trim()) {
      Alert.alert('Error', 'Please enter a valid ID number');
      return;
    }

    if (!fullName.trim()) {
      Alert.alert('Error', 'Please enter the full name');
      return;
    }

    // Simulate registration process
    console.log('Customer registration successful');
    setIsRegistered(true);
  };

  const handleNewRegistration = () => {
    console.log('Starting new registration');
    setIsRegistered(false);
    setIdNumber('');
    setFullName('');
  };

  if (isRegistered) {
    return (
      <SafeAreaView style={commonStyles.container}>
        <View style={styles.successContainer}>
          <View style={styles.successCard}>
            <View style={styles.checkmarkContainer}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
            <Text style={styles.successTitle}>Customer Successfully Registered!</Text>
            <Text style={styles.successMessage}>
              The customer has been registered in the system.
            </Text>
            <View style={styles.customerDetails}>
              <Text style={styles.detailLabel}>ID Number:</Text>
              <Text style={styles.detailValue}>{idNumber}</Text>
              <Text style={styles.detailLabel}>Full Name:</Text>
              <Text style={styles.detailValue}>{fullName}</Text>
            </View>
            <Button
              text="Register Another Customer"
              onPress={handleNewRegistration}
              style={styles.newRegistrationButton}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Customer Registration</Text>
            <Text style={styles.headerSubtitle}>Enter customer details to register</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>ID Number</Text>
              <TextInput
                style={[
                  commonStyles.input,
                  idFocused && commonStyles.inputFocused
                ]}
                value={idNumber}
                onChangeText={setIdNumber}
                placeholder="Enter ID number"
                placeholderTextColor={colors.grey}
                onFocus={() => setIdFocused(true)}
                onBlur={() => setIdFocused(false)}
                keyboardType="default"
                autoCapitalize="characters"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={[
                  commonStyles.input,
                  nameFocused && commonStyles.inputFocused
                ]}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter full name"
                placeholderTextColor={colors.grey}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                autoCapitalize="words"
              />
            </View>

            <Button
              text="Register Customer"
              onPress={handleRegister}
              style={styles.registerButton}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.grey,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  registerButton: {
    backgroundColor: colors.primary,
    marginTop: 20,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 8,
  },
  checkmarkContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkmark: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  successMessage: {
    fontSize: 16,
    color: colors.grey,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  customerDetails: {
    width: '100%',
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.grey,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 16,
  },
  newRegistrationButton: {
    backgroundColor: colors.primary,
    width: '100%',
  },
});
