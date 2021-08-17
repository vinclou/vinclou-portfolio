import Image from 'next/image';
import { AspectRatio } from '@chakra-ui/layout';

export const Img = ({ src, alt, objectFit, ...props }) => {
  return (
    <AspectRatio mb="1.5rem" position="relative" {...props}>
      <Image
        src={src}
        alt={alt}
        objectFit={objectFit ? objectFit : 'cover'}
        // objectPosition=" 50% 50%"
        layout="fill"
        placeholder="blur"
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
