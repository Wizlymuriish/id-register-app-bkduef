
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

interface ImageItem {
  id: string;
  uri: string;
  category: string;
}

export default function GalleryPage() {
  console.log('GalleryPage rendered');

  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: 'images' },
    { id: 'youth', name: 'Youth', icon: 'people' },
    { id: 'womens-guild', name: 'Women\'s Guild', icon: 'woman' },
    { id: 'pcmf', name: 'PCMF', icon: 'man' },
    { id: 'committee', name: 'Local Church Committee', icon: 'business' },
    { id: 'brigade', name: 'Brigade', icon: 'shield' },
    { id: 'sunday-school', name: 'Sunday School', icon: 'school' },
  ];

  const requestPermissions = async () => {
    console.log('Requesting camera permissions');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to upload images.');
      return false;
    }
    return true;
  };

  const pickImage = async (category: string) => {
    console.log('Picking image for category:', category);
    
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        const newImage: ImageItem = {
          id: Date.now().toString(),
          uri: result.assets[0].uri,
          category: category,
        };
        
        setImages(prevImages => [...prevImages, newImage]);
        console.log('Image added successfully');
        Alert.alert('Success', 'Image uploaded successfully!');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to upload image. Please try again.');
    }
  };

  const removeImage = (imageId: string) => {
    console.log('Removing image:', imageId);
    Alert.alert(
      'Remove Image',
      'Are you sure you want to remove this image?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setImages(prevImages => prevImages.filter(img => img.id !== imageId));
          },
        },
      ]
    );
  };

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="images" size={50} color={colors.primary} />
          </View>
          <Text style={styles.headerTitle}>Church Gallery</Text>
          <Text style={styles.headerSubtitle}>Upload and view church photos</Text>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.categoryButtonActive
                ]}
                onPress={() => setSelectedCategory(category.id)}
                activeOpacity={0.7}
              >
                <Ionicons 
                  name={category.icon as any} 
                  size={20} 
                  color={selectedCategory === category.id ? 'white' : colors.primary} 
                />
                <Text style={[
                  styles.categoryButtonText,
                  selectedCategory === category.id && styles.categoryButtonTextActive
                ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.uploadSection}>
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.uploadScroll}>
            {categories.slice(1).map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.uploadButton}
                onPress={() => pickImage(category.id)}
                activeOpacity={0.7}
              >
                <Ionicons name="camera" size={24} color={colors.primary} />
                <Text style={styles.uploadButtonText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.gallerySection}>
          <Text style={styles.sectionTitle}>
            {selectedCategory === 'all' ? 'All Photos' : getCategoryName(selectedCategory)}
            {filteredImages.length > 0 && ` (${filteredImages.length})`}
          </Text>
          
          {filteredImages.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="image-outline" size={60} color={colors.grey} />
              <Text style={styles.emptyStateText}>No photos yet</Text>
              <Text style={styles.emptyStateSubtext}>
                Upload some photos using the buttons above
              </Text>
            </View>
          ) : (
            <View style={styles.imageGrid}>
              {filteredImages.map((image) => (
                <View key={image.id} style={styles.imageContainer}>
                  <Image source={{ uri: image.uri }} style={styles.image} />
                  <View style={styles.imageOverlay}>
                    <Text style={styles.imageCategoryText}>
                      {getCategoryName(image.category)}
                    </Text>
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeImage(image.id)}
                      activeOpacity={0.7}
                    >
                      <Ionicons name="trash" size={16} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}
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
  categoriesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  categoriesScroll: {
    flexGrow: 0,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundAlt,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    gap: 6,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  categoryButtonTextActive: {
    color: 'white',
  },
  uploadSection: {
    marginBottom: 24,
  },
  uploadScroll: {
    flexGrow: 0,
  },
  uploadButton: {
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    minWidth: 100,
    borderWidth: 1,
    borderColor: colors.border,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  uploadButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
  },
  gallerySection: {
    marginBottom: 24,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    marginTop: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  imageContainer: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageCategoryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  removeButton: {
    backgroundColor: 'rgba(220, 38, 38, 0.8)',
    borderRadius: 12,
    padding: 4,
  },
});
