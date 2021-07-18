import { createIcon, defaultProps, Icon } from '@chakra-ui/react';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import { motion } from 'framer-motion';

const groupVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1
    }
  }
};

const child = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    translateY: [-15, 0, 15, 0, -14],
    transition: {
      duration: 5,
      repeat: Infinity
    }
  }
};

const MyTestSvgBase = createIcon({
  defaultProps,
  displayName: 'HeroVisualBase',
  viewBox: '0 0 1515 1099',
  path: (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        variants={groupVariants}
        initial="hidden"
        animate="visible"
        clipPath="url(#clip0)"
        fill="currentColor"
      >
        {/* Fix How path's will look like, also viewe box is kindda bad */}
        {/* <motion.rect
          variants={child}
          x="75"
          width="1440"
          height="1024"
          rx="20"
          fill="#161616"
        /> */}
        <motion.path
          variants={child}
          d="M1515.61 71.1733C869.716 313.705 -34.5376 830.464 1515.61 957.248V71.1733Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1694.62 133.41C1048.73 375.942 144.473 769.511 1694.62 896.295V133.41Z"
          fill="#161616"
        />
        <motion.path
          variants={child}
          d="M1865.29 180.89C1219.4 393.029 315.142 737.277 1865.29 848.173V180.89Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1729.27 288.682C1315.78 442.891 736.895 693.133 1729.27 773.746V288.682Z"
          fill="#161616"
        />
        <motion.circle
          variants={child}
          r="2.56647"
          transform="matrix(-1 0 0 1 902.867 685.202)"
        />
        <motion.circle variants={child} cx="826.514" cy="733.324" r="1.92485" />
        <motion.circle variants={child} cx="1454.02" cy="116.087" r="1.92485" />
        <motion.circle variants={child} cx="1087.01" cy="823.15" r="1.92485" />
        <motion.circle variants={child} cx="1158.87" cy="155.867" r="22.4566" />
        <motion.circle
          variants={child}
          cx="958.342"
          cy="487.88"
          r="32.7225"
          transform="rotate(18.3001 958.342 487.88)"
        />
        <motion.path
          variants={child}
          d="M968.617 456.813C951.459 451.138 933.117 459.94 927.275 477.605C924.337 486.488 924.428 492.959 928.143 501.545C929.553 497.281 979.385 463.077 979.385 463.077C979.385 463.077 977.754 459.835 968.617 456.813Z"
          // fill="#161666" think about the fills later on
        />
        <motion.circle variants={child} cx="829.08" cy="811.601" r="4.49133" />
        <motion.circle variants={child} cx="1079.31" cy="621.682" r="3.20809" />
        <motion.circle variants={child} cx="1230.73" cy="288.04" r="4.49133" />

        <motion.rect
          variants={child}
          x="1106.9"
          y="422.467"
          width="1.94117"
          height="1.94117"
          rx="0.265094"
          transform="rotate(-24.4476 1106.9 422.467)"
          // fill="white"
        />
        <motion.rect
          variants={child}
          x="723.213"
          y="810.004"
          width="3.89396"
          height="3.89396"
          rx="0.531777"
          transform="rotate(-24.4476 723.213 810.004)"
          // fill="white"
        />
        <motion.rect
          variants={child}
          x="1412.31"
          y="1020.46"
          width="3.89396"
          height="3.89396"
          rx="0.531777"
          transform="rotate(-24.4476 1412.31 1020.46)"
        />
        <motion.rect
          variants={child}
          x="243.283"
          y="182.502"
          width="3.89396"
          height="3.89396"
          rx="0.531777"
          transform="rotate(-24.4476 243.283 182.502)"
        />
        <motion.rect
          variants={child}
          x="864.067"
          y="480.567"
          width="3.37824"
          height="3.37824"
          rx="0.481997"
          transform="rotate(35.3063 864.067 480.567)"
        />
        <motion.rect
          variants={child}
          x="959.994"
          y="778.789"
          width="4.02097"
          height="4.02097"
          rx="0.619105"
          transform="rotate(30.4542 959.994 778.789)"
        />
        <motion.rect
          variants={child}
          x="1376.38"
          y="920.415"
          width="4.02097"
          height="4.02097"
          rx="0.619105"
          transform="rotate(-24.4476 1376.38 920.415)"
        />
        <motion.rect
          variants={child}
          x="1414.88"
          y="364.774"
          width="4.02097"
          height="4.02097"
          rx="0.619105"
          transform="rotate(-24.4476 1414.88 364.774)"
        />
        <motion.path
          variants={child}
          d="M1452.83 57.1227C1453.21 56.9516 1453.63 57.2552 1453.59 57.6693L1453.3 60.5431C1453.26 60.9572 1452.79 61.171 1452.45 60.9281L1450.1 59.2419C1449.77 58.999 1449.82 58.4815 1450.2 58.3104L1452.83 57.1227Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1383.53 458.776C1383.91 458.605 1384.34 458.908 1384.29 459.322L1384.01 462.196C1383.97 462.61 1383.49 462.824 1383.15 462.581L1380.81 460.895C1380.47 460.652 1380.52 460.135 1380.9 459.963L1383.53 458.776Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M924.655 593.618C924.785 593.861 924.744 594.159 924.553 594.358L922.5 596.496C922.31 596.695 922.013 596.748 921.766 596.628L919.098 595.336C918.85 595.216 918.708 594.951 918.745 594.678L919.149 591.742C919.186 591.469 919.395 591.252 919.666 591.203L922.584 590.68C922.854 590.631 923.126 590.762 923.256 591.005L924.655 593.618Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1319.59 113.528C1319.86 113.527 1320.11 113.703 1320.19 113.964L1321.12 116.779C1321.21 117.04 1321.12 117.327 1320.9 117.49L1318.51 119.244C1318.28 119.407 1317.98 119.408 1317.76 119.248L1315.35 117.517C1315.13 117.356 1315.03 117.07 1315.12 116.808L1316.02 113.984C1316.1 113.722 1316.35 113.544 1316.62 113.543L1319.59 113.528Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1228.11 580.674C1228.2 580.777 1228.21 580.926 1228.14 581.043L1227.38 582.3C1227.31 582.416 1227.17 582.474 1227.04 582.443L1225.61 582.106C1225.47 582.075 1225.38 581.961 1225.37 581.825L1225.24 580.36C1225.23 580.224 1225.31 580.096 1225.44 580.043L1226.79 579.475C1226.92 579.422 1227.06 579.456 1227.15 579.56L1228.11 580.674Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1082.19 254.684C1082.46 254.683 1082.71 254.859 1082.79 255.12L1083.72 257.935C1083.81 258.196 1083.72 258.483 1083.5 258.646L1081.11 260.4C1080.88 260.563 1080.58 260.564 1080.36 260.404L1077.95 258.673C1077.73 258.512 1077.64 258.226 1077.72 257.964L1078.62 255.14C1078.71 254.878 1078.95 254.7 1079.22 254.699L1082.19 254.684Z"
        />
        <motion.path
          variants={child}
          d="M1289.32 684.542C1289.42 684.71 1289.41 684.927 1289.28 685.081L1287.93 686.74C1287.8 686.894 1287.59 686.949 1287.41 686.877L1285.41 686.101C1285.23 686.028 1285.11 685.845 1285.12 685.647L1285.24 683.508C1285.25 683.31 1285.39 683.141 1285.58 683.09L1287.65 682.545C1287.85 682.495 1288.05 682.574 1288.16 682.741L1289.32 684.542Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1310.6 814.175C1310.88 814.174 1311.12 814.35 1311.21 814.611L1312.14 817.426C1312.23 817.687 1312.13 817.974 1311.91 818.137L1309.52 819.891C1309.3 820.054 1309 820.055 1308.78 819.895L1306.37 818.164C1306.15 818.004 1306.05 817.717 1306.14 817.455L1307.04 814.632C1307.12 814.37 1307.36 814.191 1307.64 814.19L1310.6 814.175Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M1009.04 945.065C1009.32 945.064 1009.56 945.24 1009.65 945.501L1010.58 948.316C1010.67 948.577 1010.57 948.864 1010.35 949.027L1007.96 950.781C1007.74 950.944 1007.44 950.946 1007.22 950.785L1004.81 949.054C1004.59 948.894 1004.49 948.608 1004.57 948.345L1005.48 945.522C1005.56 945.26 1005.8 945.081 1006.08 945.08L1009.04 945.065Z"
          fill="white"
        />
        <motion.path
          variants={child}
          d="M704.217 584.942C704.432 584.94 704.623 585.078 704.69 585.281L705.415 587.476C705.482 587.68 705.411 587.904 705.238 588.031L703.374 589.399C703.201 589.526 702.966 589.527 702.792 589.402L700.915 588.052C700.741 587.927 700.667 587.704 700.733 587.499L701.436 585.297C701.501 585.093 701.691 584.954 701.905 584.953L704.217 584.942Z"
          fill="#161616"
        />
        <motion.path
          variants={child}
          d="M733.397 689.707C733.664 689.586 733.962 689.8 733.933 690.092L733.571 693.7C733.542 693.992 733.208 694.143 732.97 693.972L730.026 691.854C729.788 691.683 729.824 691.319 730.091 691.198L733.397 689.707Z"
          fill="#161616"
        />
      </motion.g>
    </svg>
  )
});

export const MyTestSvg = ({ ...props }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Icon fill={colorDark} {...props} boxSize="32rem" as={MyTestSvgBase} />
  );
};
