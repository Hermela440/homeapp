import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';

const AddCategoryModal = ({ visible, onClose, onAddCategory }) => {
  const { theme } = useTheme();
  const [categoryName, setCategoryName] = useState('');
  const [suggestions] = useState([
    'Technology', 'Politics', 'Science', 'Health', 'Business',
    'Entertainment', 'Sports', 'Art', 'Education', 'Travel'
  ]);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: theme.colors.cardBackground,
      margin: 20,
      borderRadius: 10,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.divider,
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      color: theme.colors.text,
    },
    suggestionItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    suggestionText: {
      color: theme.colors.text,
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Add New Category</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Category name"
            placeholderTextColor="#999"
            value={categoryName}
            onChangeText={setCategoryName}
          />


          <Text style={{ color: theme.colors.text, marginBottom: 10 }}>Suggestions:</Text>
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => {
                  setCategoryName(item);
                }}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#007AFF',
              padding: 15,
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 20,
            }}
            onPress={() => {
              if (categoryName.trim()) {
                onAddCategory(categoryName);
                setCategoryName('');
                onClose();
              }
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddCategoryModal;