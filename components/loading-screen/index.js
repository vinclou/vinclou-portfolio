import React from 'react';
import { Box } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';
import NoSsr from '@/utils/NoSsr';
// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `
const waveAnimation = keyframes`
  0% {
    background-position: 0 bottom;
  }

  100% {
    background-position: 200px bottom;
  }
`;
const loadingAnimation = keyframes`
  0% {
    background-size: 200px 0px;
  }
  100% {
    background-size: 200px 200px;
  }
`;

const LoadingScreen = () => {
  return (
    // this is loading wave
    <NoSsr>
      {/* <Box css={`
				text-transform:uppercase;
				font-weight:bold;
				font-size:100pt;
				text-align:center;
				height:120px;
				line-height:110px;
				vertical-align:bottom;
				position:absolute;
				left:0;
				right:0;
				top:100px;
				bottom:0;
				display:block;

				background-image:url('http://i66.tinypic.com/optxd3.png');

				color:rgba(0,0,0,0);
				text-shadow:0px 0px rgba(255,255,255,0.06);
				animation: ${waveAnimation} 1s infinite linear,  ${loadingAnimation} 10s infinite linear alternate;
				background-size:200px 100px;
				background-repeat:repeat-x;
				opacity:1;
			`}>
				Loading
			</Box> */}
      <div className="loading wave">Loading</div>
    </NoSsr>
  );
};
// make one for firefox
export { LoadingScreen };
