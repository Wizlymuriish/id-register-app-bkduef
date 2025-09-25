
import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LocationPage() {
  console.log('LocationPage rendered');

  const churchAddress = {
    name: 'PCEA Kalalu Church',
    street: 'Kalalu',
    ward: 'Umande Ward',
    constituency: 'Laikipia East',
    county: 'Laikipia County',
    country: 'Kenya',
    fullAddress: 'Kalalu, Umande ward, Laikipia East, Laikipia county, Kenya',
  };

  const handleGetDirections = async () => {
    console.log('Getting directions to church');
    try {
      const address = encodeURIComponent(churchAddress.fullAddress);
      const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
      
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Unable to open maps application');
      }
    } catch (error) {
      console.error('Error opening maps:', error);
      Alert.alert('Error', 'Unable to get directions');
    }
  };

  const handleShareLocation = async () => {
    console.log('Sharing church location');
    try {
      const message = `Visit us at ${churchAddress.name}\nLocation: ${churchAddress.fullAddress}`;
      
      // For web, we can copy to clipboard or use Web Share API
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({
          title: churchAddress.name,
          text: message,
        });
      } else {
        Alert.alert('Location', message);
      }
    } catch (error) {
      console.error('Error sharing location:', error);
      Alert.alert('Location', `${churchAddress.name}\n${churchAddress.fullAddress}`);
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="location" size={50} color={colors.primary} />
          </View>
          <Text style={styles.headerTitle}>Our Location</Text>
          <Text style={styles.headerSubtitle}>Find us at PCEA Kalalu Church</Text>
        </View>

        <View style={styles.locationCard}>
          <View style={styles.churchInfo}>
            <Text style={styles.churchName}>{churchAddress.name}</Text>
            <View style={styles.addressSection}>
              <View style={styles.addressItem}>
                <Ionicons name="location-outline" size={20} color={colors.primary} />
                <Text style={styles.addressText}>{churchAddress.street}</Text>
              </View>
              <View style={styles.addressItem}>
                <Ionicons name="business-outline" size={20} color={colors.primary} />
                <Text style={styles.addressText}>{churchAddress.ward}</Text>
              </View>
              <View style={styles.addressItem}>
                <Ionicons name="map-outline" size={20} color={colors.primary} />
                <Text style={styles.addressText}>{churchAddress.constituency}</Text>
              </View>
              <View style={styles.addressItem}>
                <Ionicons name="flag-outline" size={20} color={colors.primary} />
                <Text style={styles.addressText}>{churchAddress.county}</Text>
              </View>
              <View style={styles.addressItem}>
                <Ionicons name="globe-outline" size={20} color={colors.primary} />
                <Text style={styles.addressText}>{churchAddress.country}</Text>
              </View>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.directionsButton}
              onPress={handleGetDirections}
              activeOpacity={0.7}
            >
              <Ionicons name="navigate" size={20} color="white" />
              <Text style={styles.buttonText}>Get Directions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.shareButton}
              onPress={handleShareLocation}
              activeOpacity={0.7}
            >
              <Ionicons name="share" size={20} color={colors.primary} />
              <Text style={styles.shareButtonText}>Share Location</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={60} color={colors.grey} />
          <Text style={styles.mapText}>
            Interactive maps are not supported in Natively at the moment.
          </Text>
          <Text style={styles.mapSubtext}>
            Use the &quot;Get Directions&quot; button above to open your preferred maps app.
          </Text>
        </View>

        <View style={styles.additionalInfo}>
          <View style={styles.infoCard}>
            <Ionicons name="car" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Transportation</Text>
            <Text style={styles.infoText}>
              The church is accessible by public transport and private vehicles. 
              Parking is available on the church premises.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="accessibility" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Accessibility</Text>
            <Text style={styles.infoText}>
              Our church building is designed to accommodate visitors with mobility needs. 
              Please contact us if you need special assistance.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="information-circle" size={24} color={colors.primary} />
            <Text style={styles.infoTitle}>Visiting Information</Text>
            <Text style={styles.infoText}>
              First-time visitors are always welcome! Our ushers will be happy to help you 
              find seating and provide any information you need.
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
  locationCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  churchInfo: {
    marginBottom: 24,
  },
  churchName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  addressSection: {
    gap: 12,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundAlt,
    borderRadius: 8,
  },
  addressText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  directionsButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    gap: 8,
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundAlt,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  mapPlaceholder: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  mapText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginTop: 16,
    fontWeight: '500',
  },
  mapSubtext: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
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
