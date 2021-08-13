import { Icon, VStack } from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/hooks/useColorModeSwitcher';
import { BsArrowDown } from 'react-icons/bs';

const ScrollArrow = ({ scrollPos }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <VStack
      opacity={scrollPos ? 0 : 1}
      transition="visibility 0s linear 300ms, opacity 600ms"
      visibility={scrollPos ? 'hidden' : 'visible'}
    >
      <span>{`<Scroll>`}</span>
      <Icon
        as={BsArrowDown}
        boxSize="1.5em"
        fill={colorDark}
        css={`
          z-index: 1;
          animation: arrowAnimation 2s infinite ease-in-out;
          @keyframes arrowAnimation {
            0% {
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}
      />
    </VStack>
  );
};

export { ScrollArrow };
