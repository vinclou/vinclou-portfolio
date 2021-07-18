import { Logo } from '@/components/svg/logo';
import {
  chakra,
  electron,
  figma,
  nextjs,
  nodejs,
  react,
  socketIO,
  storybook,
  typescript
} from './tools';
import { v4 as uuidv4 } from 'uuid';
//TODO add real projects into this file
export default [
  {
    logo: null,
    title: 'Future Project Title',
    description: 'Will do project description',
    tools: [react, nextjs, typescript, chakra],
    live: 'https://duckduckgo.com',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'Future Project Title',
    description: 'Will do project description',
    tools: [react, nextjs, typescript, chakra],
    live: 'https://duckduckgo.com',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'Future Project Title',
    description: 'Will do project description',
    tools: [react, nextjs, typescript, chakra],
    live: 'https://duckduckgo.com',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true
  }
];
