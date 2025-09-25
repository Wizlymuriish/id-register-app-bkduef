import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#1E40AF',    // Deep Blue (Presbyterian blue)
  secondary: '#1E3A8A',  // Darker Blue
  accent: '#3B82F6',     // Light Blue
  background: '#FFFFFF', // White background
  backgroundAlt: '#F8FAFC', // Light gray background
  text: '#1F2937',       // Dark text
  grey: '#6B7280',       // Gray
  card: '#FFFFFF',       // White card background
  success: '#10B981',    // Green for success messages
  border: '#E5E7EB',     // Light border
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: colors.background,
    color: colors.text,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: colors.primary,
    boxShadow: '0px 0px 0px 3px rgba(220, 38, 38, 0.1)',
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: "white",
  },
});
