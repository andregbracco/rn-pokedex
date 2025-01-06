import ImageColors from 'react-native-image-colors';

const fallBackColor = 'grey';

export const getColorFromImage = async (image: string) => {
  const colors = await ImageColors.getColors(image, {
    fallback: fallBackColor,
  });

  switch (colors.platform) {
    case 'android':
      return colors.dominant ?? fallBackColor;
    case 'ios':
      return colors.background ?? fallBackColor;
    default:
      return fallBackColor;
  }
};
