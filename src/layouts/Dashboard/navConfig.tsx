import {
  faWallet,
  faPiggyBank,
  faChartPie,
  faHandHoldingDollar,
  faMemory,
  faQuestionCircle,
  faStoreSlash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const navDashboard = [
  {
    title: 'Homepage',
    icon: <FontAwesomeIcon icon={faChartPie} />,
    path: '/homepage',
  },
  {
    title: 'Markets Overview',
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    path: '/markets',
  },
  {
    title: 'Dashboard',
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    path: '/dashboard',
  },
  {
    title: 'Borrow / Repay',
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    path: '/borrow',
  },
  {
    title: 'Deposit / Withdraw',
    icon: <FontAwesomeIcon icon={faWallet} />,
    path: '/deposit',
  },
  {
    title: 'Seed Round',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
    path: '/seed',
  },
  {
    title: 'Careers',
    icon: <FontAwesomeIcon icon={faMemory} />,
    path: '/careers',
  },
  {
    title: 'Documentation',
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    path: 'https://liborfinance.gitbook.io/libor-protocol/',
  },
]
/* 
export const navDashboard2 = [
  {
    title: 'DAO',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/DAO',
  },
  {
    title: 'Bridges',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/Bridges',
  },
  {
    title: 'NFT Gallery',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/nft-market',
  },
] */
