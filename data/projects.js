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
  deno,
  storybook,
  typescript
} from './tools';
import { v4 as uuidv4 } from 'uuid';
//TODO add data about the projects, add more projects.
export default [
  {
    logo: '/static/images/twelve.jpeg',
    title: 'Coin Gecko Api Client',
    description:
      'Api client library for deno that uses coin gecko official api',
    tools: [typescript, deno],
    live: 'doc.deno.land/https://deno.land/x/coingecko_deno_client@v0.2.2/mod.ts',
    proto: null,
    repo: 'https://github.com/vinclou/coingecko-deno-client',
    id: uuidv4(),
    feature: true,
    isPrivate: false
  },
  {
    logo: '/static/images/head2.jpg',
    title: 'Portfolio',
    description: 'My digital garden',
    tools: [react, nextjs, chakra, storybook, figma, Go],
    live: 'https://vincentarlou.com/',
    proto: null,
    repo: 'https://github.com/vinclou/vinclou-portfolio',
    id: uuidv4(),
    feature: true,
    isPrivate: false
  },
  {
    logo: '/static/images/head1.jpg',
    title: 'XmppClient',
    description: 'ReactJS XMPP client, using WebSockets, private repo',
    tools: [react, nextjs, typescript, chakra, electron, nodejs],
    live: 'https://vincentarlou.com/',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true,
    isPrivate: true
  },
  {
    logo: '/static/images/head3.jpg',
    title: 'Pure Tab Manager',
    description: 'Manage your tabs, private repo',
    tools: [js, css3, html5],
    live: 'https://vincentarlou.com/',
    proto: null,
    repo: 'https://github.com/vinclou',
    id: uuidv4(),
    feature: true,
    isPrivate: true
  }
];
