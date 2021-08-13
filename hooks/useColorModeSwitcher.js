import { useColorModeValue } from '@chakra-ui/react';

/*
  I don't know why but I can't use the default colors,
  to properly switch between colors in 3 d animation
  while using useColorModeValue(), minor inconvinience
*/
const light = '#fcfcfc';
const dark = '#171010';

function useColorModeSwitcher() {
  const colorLight = useColorModeValue('default.light', 'default.dark');

  const colorDark = useColorModeValue('default.dark', 'default.light');

  const themed = useColorModeValue('primary.500', 'secondary.300');

  const colorGrey = useColorModeValue('neutral.200', 'neutral.600');

  const successColor = useColorModeValue(
    'accent.successDark',
    'accent.successLight'
  );

  const errorColor = useColorModeValue('accent.errorDark', 'accent.errorLight');

  const threeAnimColor = useColorModeValue(light, dark);

  return {
    colorLight,
    colorDark,
    colorGrey,
    themed,
    successColor,
    errorColor,
    threeAnimColor
  };
}

export { useColorModeSwitcher };
