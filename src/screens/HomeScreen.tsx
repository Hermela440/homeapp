import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Card } from '../components';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: { uri: string };
}

const MOCK_DATA: Article[] = [
  {
    id: '1',
    title: 'Building Stronger Families: A Vision for Happiness and Harmony',
    description: 'Welcome to the Family page, a space dedicated to fostering healthier, happier, and more disciplined families. Here, we celebrate the foundation of a strong society through nurturing family bonds, sharing wisdom, and promoting values that create lasting harmony in homes.',
    category: 'ስድራቤት',
    author: 'admin',
    date: 'January 29, 2025',
    readTime: '5 ደቒቓ',
    image: { uri: 'https://picsum.photos/seed/1/800/400' },
  },
  {
    id: '2',
    title: 'ኣዴታት ዝሓልፍኦ መስገደላትን ምርዳእ ሰብኡተንን!',
    description: 'ስለምንታይ እዮም ብዙሓት ሰብ ሓዳር ዝነበሩ ቀልዓ ወይ ቈልዑ ምስ ወለዱ ዝፋትሑ፧ ኢለ ክሓስብ ከለኹ፡ ድንጽወኒ ጥራይ። እቲ ጠንቂ ብዙሕ ክኸውን ይኽእል\'ዩ፡ ግን ሎሚ ሰብኡት ከተስተውዕሉሉ ዘለኩም ሒደት ክገልጽ። ኣብዚ እዋን ብዙሓት ኣዴታት ዝሓልፍኦ መሰገደላት ኣሎ። ሰብኡት ግን ነዚ ኩነታት ብግቡእ ኣይርድእዎን እዮም። ስለዚ ነዚ ጉዳይ ብዕምቆት ክንርእዮ ኣለና።',
    category: 'መርዓን ሓዳርን',
    author: 'admin',
    date: 'February 5, 2025',
    readTime: '7 ደቒቓ',
    image: { uri: 'https://picsum.photos/seed/2/800/400' },
  },
  {
    id: '3',
    title: 'ኣቦ ማለት ምንጪ ማለት እዩ!',
    description: 'ኣቦ ኣብ ገዛ ምንጪ ናይ ኩሉ ዝበጻሕካዮ እዩ። ካብ ግዜ ህጻንነትካ ጀሚሩ ክሳብ ብመርዓን ሓዳርን ትፍለ ኣቦ ኩሉ ግዜ ምንጭኻ እዩ። እንተ ነፊዕካ ኸኣ ክሳብ ዕድመኻ ምንጪ ናይ ስድራቤትካ ክትከውን ኣለካ። ኣቦ ምዃን ማለት ልዑል ሓላፍነት ምስካም ማለት እዩ። ስለዚ ነዚ ሓላፍነት ብግቡእ ክንፈልጦን ክንተግብሮን ይግባእ።',
    category: 'ስድራቤት',
    author: 'admin',
    date: 'February 7, 2025',
    readTime: '6 ደቒቓ',
    image: { uri: 'https://picsum.photos/seed/3/800/400' },
  },
  {
    id: '4',
    title: 'ሓዳርን ተራ ኣደን',
    description: 'ኣቶ ተወልደ ክድረር ጸኒሑ፡ ከባቢ ሰዓት 8፡00 ምሸት ምስ ኮነ፡ "እሞ ኣብዛ ባር ብዕድላ ምስቶም ኣዕሩኸይ ኣማስይ ኣቢለ ክመጽእ። ኣብ ሓዳር ተራ ኣደ ኣዝዩ ኣገዳሲ እዩ። ኣደ ንቤተሰብ ዘድልዮም ነገራት ኩሉ ብጥንቃቐ ትከታተል። ስለዚ ኣብ ገዛ ዘሎ ሓላፍነት ብግቡእ ክንፈልጦ ኣለና።',
    category: 'መርዓን ሓዳርን',
    author: 'admin',
    date: 'February 6, 2025',
    readTime: '8 ደቒቓ',
    image: { uri: 'https://picsum.photos/seed/4/800/400' },
  },
  {
    id: '5',
    title: 'ንሰብ እናጠቐምካ ንርእስኻ ድርቡይ ኰንካ ከይትርከብ ተጠንቀቕ',
    description: 'ቤትሰናይ ስቱዲዮ - ንሰብ እናጠቐምካ ንርእስኻ ድርቡይ ኰንካ ከይትርከብ ተጠንቀቕ። ኣብ ህይወትና ንሰብ ምሕጋዝ ጽቡቕ እዩ። ግን ንርእስኻ ድርቡይ ክትከውን የብልካን። ስለዚ ንሰብ ክትሕግዝ ከለኻ ንርእስኻ ውን ሕሰብ። ምኽንያቱ ንርእስኻ እንተዘይሓሲብካ ንሰብ ክትሕግዝ ኣይትኽእልን ኢኻ።',
    category: 'ቤትሰናይ',
    author: 'admin',
    date: 'February 5, 2025',
    readTime: '5 ደቒቓ',
    image: { uri: 'https://picsum.photos/seed/5/800/400' },
  },
  {
    id: '6',
    title: 'ክትዕ፡ ይፈላልየካ ደኣ እምበር ኣብ ዘብጽሓካ የብሉን',
    description: 'ቤትሰናይ ስቱዲዮ - ክትዕ ኣብ ዘብጽሓካ የብሉን፡ ይፈላልየካ ደኣ እምበር። ክትዕ ኣብ ህይወትና ዓቢ ተራ ኣለዎ። ግን እቲ ክትዕ ናብ ዝበለጸ ክመርሓና እምበር ክፈላልየና የብሉን። ስለዚ ክትዕ ብኣግባቡ ክንጥቀመሉ ይግባእ። ምኽንያቱ ክትዕ መማዕበሊ ሓሳብ እዩ።',
    category: 'ቤትሰናይ',
    author: 'admin',
    date: 'February 5, 2025',
    readTime: '6 ደቒቓ',
    image: { uri: 'https://picsum.photos/seed/6/800/400' },
  }
];

const HomeScreen = () => {
  const { theme, followedCategories } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerTitle: {
      ...theme.typography.h2,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
      fontFamily: 'serif',
    },
    headerSubtitle: {
      ...theme.typography.body2,
      color: theme.colors.textSecondary,
    },
    categoryList: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    categoryItem: {
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      marginRight: theme.spacing.md,
      borderRadius: theme.borderRadius.full,
    },
    categoryText: {
      ...theme.typography.body2,
      color: theme.colors.textSecondary,
    },
    categoryTextSelected: {
      color: theme.colors.text,
      fontWeight: '600' as const,
    },
    content: {
      flex: 1,
    },
  });

  const renderCategory = ({ item }: { item: string }) => {
    const isSelected = item === selectedCategory;
    return (
      <TouchableOpacity
        style={[styles.categoryItem]}
        onPress={() => setSelectedCategory(item)}
      >
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.categoryTextSelected,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCard = ({ item }: { item: Article }) => {
    return (
      <Card
        title={item.title}
        description={item.description}
        category={item.category}
        author={item.author}
        date={item.date}
        readTime={item.readTime}
        image={item.image}
        onPress={() => console.log('Card pressed:', item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your feed</Text>
        <Text style={styles.headerSubtitle}>Stories from writers you follow and more</Text>
      </View>
      <FlatList
        data={['All', ...followedCategories]}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={renderCategory}
      />
      <FlatList
        data={MOCK_DATA}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.primary}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
