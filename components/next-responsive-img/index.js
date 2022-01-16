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
