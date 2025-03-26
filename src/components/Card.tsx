import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  author: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
  points: string;
}

const Card = ({ author, title, subtitle, date, status, points }: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.metaContainer}>
        <View style={styles.metaItem}>
          <Text style={styles.metaText}>{date}</Text>
        </View>
        <View style={[styles.metaItem, styles.status]}>
          <Text style={styles.metaText}>{status}</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaText}>{points}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaItem: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  },
  status: {
    backgroundColor: '#e0f7fa',
  },
  metaText: {
    fontSize: 12,
  },
});

export default Card;