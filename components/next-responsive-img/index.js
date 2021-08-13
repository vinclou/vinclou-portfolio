import Image from 'next/image';
import { AspectRatio } from '@chakra-ui/layout';

export const Img = ({ src, alt, ...rest }) => {
  return (
    <AspectRatio ratio={4 / 3} mb="1.5rem" {...rest}>
      <Image
        src={src}
        alt={alt}
        objectFit="cover"
        layout="fill"
        placeholder="blur" // adds blur placeholder
      />
    </AspectRatio>
  );
};

// const BannerImg = ({ bannerSrc }) => {
//   return (
//     <AspectRatio
//       maxW={{ base: '20rem', lg: '30rem' }}
//       maxH="15rem"
//       mb="1.5rem"
//       ratio={4 / 3}
//     >
//       <Img src={bannerSrc} />
//     </AspectRatio>
//   );
// };
