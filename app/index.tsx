import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage() {
  console.log('HomePage rendered');

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="home" size={60} color={colors.primary} />
          </View>
          <Text style={styles.churchName}>PRESBYTERIAN CHURCH OF EAST AFRICA</Text>
          <Text style={styles.churchLocation}>Kalalu Church</Text>
        </View>

        <View style={styles.historySection}>
          <Text style={styles.sectionTitle}>Our History</Text>
          
          <View style={styles.historyCard}>
            <Text style={styles.historyText}>
              The PCEA&apos;s history began with the Scottish East African Scottish Mission in 1891, eventually becoming the Church of Scotland Mission in Thogoto after relocating from the malaria-ridden Kibwezi. The church established key institutions like the PCEA Kikuyu Hospital, founded in 1908, and developed its Presbyterian church government with the institution of the Presbytery in 1920. The PCEA has grown significantly, playing a vital role in Kenya&apos;s social, medical, and educational landscape through its extensive work.
            </Text>
          </View>

          <View style={styles.timelineSection}>
            <Text style={styles.timelineTitle}>Early Beginnings & Missionaries</Text>
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1889-1891</Text>
                <Text style={styles.timelineText}>
                  Initial plans for the mission were made by Scottish figures Sir William Mackinnon and Mr. Alexander Low Bruce.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1891</Text>
                <Text style={styles.timelineText}>
                  Missionaries, including Thomas Watson, arrived in Kibwezi and established the East African Scottish Mission.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1892</Text>
                <Text style={styles.timelineText}>
                  The first temporary church and school were founded in Kibwezi by Dr. James Stewart.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1898-1899</Text>
                <Text style={styles.timelineText}>
                  Due to malaria, the mission moved to Dagoretti and then to Thogoto, becoming the Church of Scotland Mission.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.timelineSection}>
            <Text style={styles.timelineTitle}>Institutional Development & Governance</Text>
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1907-1908</Text>
                <Text style={styles.timelineText}>
                  Dr. John W. Arthur arrived, leading to the opening of Hunter Memorial Hospital (now PCEA Kikuyu Hospital) in 1908.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1920</Text>
                <Text style={styles.timelineText}>
                  A formal church government was established, with Elders ordained and Parish Sessions formed, leading to the institution of the Presbytery of British East Africa.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1935</Text>
                <Text style={styles.timelineText}>
                  Pastors began training at St Paul&apos;s United Theological College.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.timelineSection}>
            <Text style={styles.timelineTitle}>Growth & Challenges</Text>
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1940s</Text>
                <Text style={styles.timelineText}>
                  The church faced division over the issue of female circumcision, leading to some members breaking away.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>1956</Text>
                <Text style={styles.timelineText}>
                  The church unified again after separating into European and African wings earlier.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>Present Day</Text>
                <Text style={styles.timelineText}>
                  The PCEA has grown into a major denomination with a strong emphasis on community welfare through its educational, medical, and charitable works.
                </Text>
              </View>
            </View>
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
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.backgroundAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  churchName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  churchLocation: {
    fontSize: 18,
    color: colors.grey,
    textAlign: 'center',
  },
  historySection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  historyCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  historyText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    textAlign: 'justify',
  },
  timelineSection: {
    marginBottom: 24,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingLeft: 8,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginTop: 6,
    marginRight: 16,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYear: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  timelineText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
    textAlign: 'justify',
  },
});
