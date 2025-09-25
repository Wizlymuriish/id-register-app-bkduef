
import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ContactsPage() {
  console.log('ContactsPage rendered');

  const handleCallPress = async (phoneNumber: string) => {
    console.log('Attempting to call:', phoneNumber);
    try {
      const url = `tel:${phoneNumber}`;
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Phone calls are not supported on this device');
      }
    } catch (error) {
      console.error('Error making phone call:', error);
      Alert.alert('Error', 'Unable to make phone call');
    }
  };

  const handleSMSPress = async (phoneNumber: string) => {
    console.log('Attempting to send SMS to:', phoneNumber);
    try {
      const url = `sms:${phoneNumber}`;
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'SMS is not supported on this device');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      Alert.alert('Error', 'Unable to send SMS');
    }
  };

  const contacts = [
    {
      id: 1,
      name: 'Church Office',
      number: '0796894565',
      description: 'Main church contact for general inquiries',
    },
    {
      id: 2,
      name: 'Pastor\'s Office',
      number: '0796885519',
      description: 'Direct line to the pastor for spiritual guidance',
    },
  ];

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="call" size={50} color={colors.primary} />
          </View>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>Get in touch with PCEA Kalalu Church</Text>
        </View>

        <View style={styles.contactsSection}>
          {contacts.map((contact) => (
            <View key={contact.id} style={styles.contactCard}>
              <View style={styles.contactHeader}>
                <View style={styles.contactIconContainer}>
                  <Ionicons name="person" size={24} color={colors.primary} />
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.contactDescription}>{contact.description}</Text>
                </View>
              </View>

              <View style={styles.contactNumber}>
                <Ionicons name="call" size={20} color={colors.grey} />
                <Text style={styles.phoneNumber}>{contact.number}</Text>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => handleCallPress(contact.number)}
                  activeOpacity={0.7}
                >
                  <Ionicons name="call" size={20} color="white" />
                  <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.smsButton}
                  onPress={() => handleSMSPress(contact.number)}
                  activeOpacity={0.7}
                >
                  <Ionicons name="chatbubble" size={20} color={colors.primary} />
                  <Text style={styles.smsButtonText}>SMS</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.additionalInfo}>
          <View style={styles.infoCard}>
            <Ionicons name="time" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Service Times</Text>
            <Text style={styles.infoText}>
              Sunday Service: 9:00 AM - 12:00 PM{'\n'}
              Wednesday Prayer: 6:00 PM - 8:00 PM{'\n'}
              Friday Youth Service: 7:00 PM - 9:00 PM
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="mail" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Visit Us</Text>
            <Text style={styles.infoText}>
              We welcome visitors and new members.{'\n'}
              Feel free to join us for any of our services.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.grey,
    textAlign: 'center',
  },
  contactsSection: {
    marginBottom: 30,
  },
  contactCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  contactDescription: {
    fontSize: 14,
    color: colors.grey,
    lineHeight: 18,
  },
  contactNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundAlt,
    borderRadius: 8,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  callButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  smsButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundAlt,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  smsButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  additionalInfo: {
    gap: 16,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    lineHeight: 20,
  },
});
