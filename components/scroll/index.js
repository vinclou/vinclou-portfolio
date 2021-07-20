import { Icon, VStack } from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { BsArrowDown } from 'react-icons/bs';

const ScrollArrow = ({ scrollPos, displayIcon, ...props }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <VStack
      opacity={scrollPos ? 0 : 1}
      transition="visibility 0s linear 300ms, opacity 600ms"
      // might as well put display none
      visibility={scrollPos ? 'hidden' : 'visible'}
      props
      // display={scrollPos ? 'none' : 'inline'}
    >
      {displayIcon ? (
        <>
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
        </>
      ) : (
        <div
          boxSize="1.5em"
          fill={colorDark}
          css={`
            display: inline-block;
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
        >
          {`<Scroll>`}
        </div>
      )}
    </VStack>
  );
};

export { ScrollArrow };
