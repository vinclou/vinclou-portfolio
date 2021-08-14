import { Chakra } from '@/components/svg/chakraLogo';
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiGraphql,
  SiNodeDotJs,
  SiNextDotJs,
  SiElectron,
  SiFigma,
  SiStorybook,
  SiAdobe,
  SiGo,
  SiVisualstudiocode,
  SiTypescript
} from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

export const html5 = {
  name: 'html5',
  icon: SiHtml5,
  color: '#E34F26',
  id: uuidv4()
};

export const css3 = {
  name: 'css3',
  icon: SiCss3,
  color: '#1572B6',
  id: uuidv4()
};

export const js = {
  name: 'javascript',
  icon: SiJavascript,
  color: '#F7DF1E',
  id: uuidv4()
};

export const typescript = {
  name: 'typescript',
  icon: SiTypescript,
  color: '#3178C6',
  id: uuidv4()
};

export const react = {
  name: 'react',
  icon: SiReact,
  color: '#61DAFB',
  id: uuidv4()
};

export const nodejs = {
  name: 'Node.js',
  icon: SiNodeDotJs,
  color: '#339933',
  id: uuidv4()
};

export const nextjs = {
  name: 'Next.js',
  icon: SiNextDotJs,
  color: '#e8d7e6',
  id: uuidv4()
};

export const electron = {
  name: 'Electron',
  icon: SiElectron,
  color: '#47848F',
  id: uuidv4()
};

export const figma = {
  name: 'Figma',
  icon: SiFigma,
  color: '#F24E1E',
  id: uuidv4()
};

// add chakraui svg to files and import
export const chakra = {
  name: 'Chakra UI',
  icon: Chakra,
  color: '#319795',
  id: uuidv4()
};

export const storybook = {
  name: 'Storybook',
  icon: SiStorybook,
  color: '#FF4785',
  id: uuidv4()
};

export const adobe = {
  name: 'Adobe',
  icon: SiAdobe,
  color: '#FF0000',
  id: uuidv4()
};

export const sass = {
  name: 'Sass',
  icon: SiSass,
  color: '#CC6699',
  id: uuidv4()
};

export const Go = {
  name: 'Go',
  icon: SiGo,
  color: '#7aeaf4',
  id: uuidv4()
};

export const GraphQL = {
  name: 'GraphQL',
  icon: SiGraphql,
  color: '#ef287e',
  id: uuidv4()
};

export const VsCode = {
  name: 'Visual Studio Code',
  icon: SiVisualstudiocode,
  color: '#286eef',
  id: uuidv4()
};
