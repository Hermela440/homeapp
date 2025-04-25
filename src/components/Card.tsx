import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';
import { useTheme } from '../theme/ThemeContext';

const { width } = Dimensions.get('window');

interface CardProps {
  title: string;
  description: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onPress,
  category,
  author,
  date,
  readTime,
}) => {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.cardBackground,
      marginHorizontal: theme.spacing.md,
      marginVertical: theme.spacing.sm,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingBottom: theme.spacing.lg,
    },
    contentContainer: {
      flex: 1,
      paddingRight: theme.spacing.md,
    },
    imageContainer: {
      width: 100,
      height: 100,
      marginLeft: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    category: {
      color: theme.colors.primary,
      ...theme.typography.caption,
      marginBottom: theme.spacing.xs,
      textTransform: 'uppercase',
    },
    title: {
      color: theme.colors.text,
      ...theme.typography.h3,
      marginBottom: theme.spacing.xs,
      fontFamily: 'serif',
    },
    description: {
      color: theme.colors.textSecondary,
      ...theme.typography.body2,
      marginBottom: theme.spacing.sm,
    },
    metaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    authorText: {
      color: theme.colors.text,
      ...theme.typography.caption,
      fontWeight: '500' as const,
    },
    metaDot: {
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: theme.colors.textSecondary,
      marginHorizontal: theme.spacing.xs,
    },
    metaText: {
      color: theme.colors.textSecondary,
      ...theme.typography.caption,
    },
  });

  return (
    <AnimatedTouchable
      style={[styles.container, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <View style={styles.contentContainer}>
        {category && <Text style={styles.category}>{category}</Text>}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.metaContainer}>
          {author && <Text style={styles.authorText}>{author}</Text>}
          {(date || readTime) && <View style={styles.metaDot} />}
          {date && <Text style={styles.metaText}>{date}</Text>}
          {readTime && (
            <>
              <View style={styles.metaDot} />
              <Text style={styles.metaText}>{readTime}</Text>
            </>
          )}
        </View>
      </View>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      )}
    </AnimatedTouchable>
  );
};

export default Card;