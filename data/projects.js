import { Logo } from '@/components/svg/logo';
import { SquareIcon } from '@/components/svg/square-icon';
import { SearchIcon } from '@/components/svg/search-icon';

import {
  chakra,
  electron,
  js,
  css3,
  html5,
  figma,
  nextjs,
  nodejs,
  react,
  Go,
  socketIO,
  storybook,
  typescript
} from './tools';
import { v4 as uuidv4 } from 'uuid';
//TODO add data about the projects, add more projects.
export default [
  {
    logo: '/static/images/head1.jpg',
    title: 'XmppClient',
    description: 'ReactJS XMPP client',
    tools: [react, nextjs, typescript, chakra, electron, nodejs],
    live: 'https://github.com/vinclou/vinclou-portfolio',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true
  },
  {
    logo: '/static/images/head2.jpg',
    title: 'Portfolio',
    description: 'The website you are currently on',
    tools: [react, nextjs, chakra, storybook, figma, Go],
    live: 'https://duckduckgo.com',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true
  },
  {
    logo: '/static/images/head3.jpg',
    title: 'Pure Tab Manager',
    description: 'Manage your tabs',
    tools: [js, css3, html5],
    live: 'https://duckduckgo.com',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true
  }
];
