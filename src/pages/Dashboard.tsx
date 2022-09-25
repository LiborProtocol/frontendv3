import "@fontsource/open-sans";
import "@fontsource/montserrat";
import React, { useEffect, useRef } from 'react';
import { useMoralis } from "react-moralis";
import { useApiContract } from 'react-moralis';
import { useWeb3ExecuteFunction, useTokenPrice } from 'react-moralis';
import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import abiIERC20 from '#modules/AbiIERC20';
import abiVault from '#modules/AbiVault';
import abiVaultController from '#modules/AbiVaultController';
import abiUSDI from '#modules/AbiUSDI';
import abiCurve from '#modules/AbiCurve';
import { Text } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Center, Spacer, Flex } from '@chakra-ui/react';
import { NumberInput, InputGroup, InputRightElement, NumberInputField } from '@chakra-ui/react';
import { Box, Heading, position } from '@chakra-ui/react';
import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Progress, ProgressLabel } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,

} from '@chakra-ui/react';

import { useMoralisQuery } from 'react-moralis';
import { useDisclosure } from '@chakra-ui/react';
import { stringify } from 'querystring';
import Moralis from 'moralis/types';
import "@fontsource/montserrat";


export default function Markets() {

  const boxColorPrimary = '#393E46'
  const boxColorSecondary = '#00ADB5'


  const fetchActiveVaultID = async () => {
    await getVaultID.runContractFunction();
  }

  const fetchActiveVaultAddress = async () => {
    await getVaultAddress.runContractFunction();
  }

  const fetchActiveWethBalance = async () => {
    await getWethBalance.runContractFunction();
  }

  const fetchActiveVaultLiability = async () => {
    await getVaultLiability.runContractFunction();
  }

  const fetchActiveVaultBorrowingPower = async () => {
    await getVaultBorrowingPower.runContractFunction();
  }

  const fetchActiveUserTokenBalance = async () => {
    await getUserTokenBalance.runContractFunction();
  }

  const fetchActiveUserUsdiBalance = async () => {
    await getUserUsdiBalance.runContractFunction();
  }

  const fetchActiveTotalSupply = async () => {
    await getTotalSupply.runContractFunction();
  }

  const fetchActiveUsdcReserve = async () => {
    await getUsdcReserve.runContractFunction();
  }

  const fetchActiveInterestFactor = async () => {
    await getInterestFactor.runContractFunction();
  }

  const fetchActiveReserveRatio = async () => {
    await getReserveRatio.runContractFunction();
  }

  const fetchActiveWethPrice = async () => {
    await getReserveRatio.runContractFunction();
  }
  const fetchActiveWbtcPrice = async () => {
    await getReserveRatio.runContractFunction();
  }
  const fetchActiveWftmPrice = async () => {
    await getReserveRatio.runContractFunction();
  }
  const fetchActiveXbooPrice = async () => {
    await getReserveRatio.runContractFunction();
  }

  const [userAccount, setAccount] = useState('');
  const [userAddress, setAddress] = useState('');
  const [ID, setID] = useState('');
  const [vaultAddress, setVaultAddress] = useState('');
  const [wethBalance, setWethBalance] = useState(0);
  const [vaultLiability, setVaultLiability] = useState(0);
  const [vaultBorrowingPower, setVaultBorrowingPower] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [UsdcReserve, setUsdcReserve] = useState(0);
  const [interestFactor, setInterestFactor] = useState(0);
  const [reserveRatio, setReserveRatio] = useState(0);
  const { isAuthenticated, Moralis, account, user } = useMoralis();


  /* PRICE API CALLS */

  const getEthPrice = useTokenPrice({ address: "0x74b23882a30290451a17c44f4f05243b6b58c76d", chain: "fantom" });
  const getBtcPrice = useTokenPrice({ address: "0x321162cd933e2be498cd2267a90534a804051b11", chain: "fantom" });
  const getFtmPrice = useTokenPrice({ address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83", chain: "fantom" });
  const getBooPrice = useTokenPrice({ address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", chain: "fantom" });

  /* MORALIS API CALLS */

  const getVaultID
    = useApiContract({
      abi: abiVaultController,
      address: '0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA',
      functionName: "vaultIDs",
      params: {
        wallet: userAccount,
      },
      chain: 'goerli',
    });

  const getVaultAddress
    = useApiContract({
      abi: abiVaultController,
      address: '0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA',
      functionName: "vaultAddress",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getWethBalance
    = useApiContract({
      abi: abiVault,
      address: vaultAddress,
      functionName: "tokenBalance",
      params: {
        addr: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
      },
      chain: 'goerli',
    });

  const getWbtcBalance
    = useApiContract({
      abi: abiVault,
      address: vaultAddress,
      functionName: "tokenBalance",
      params: {
        addr: '0x321162cd933e2be498cd2267a90534a804051b11'
      },
      chain: 'goerli',
    });

  const getWftmBalance
    = useApiContract({
      abi: abiVault,
      address: vaultAddress,
      functionName: "tokenBalance",
      params: {
        addr: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
      },
      chain: 'goerli',
    });

  const getXbooBalance
    = useApiContract({
      abi: abiVault,
      address: vaultAddress,
      functionName: "tokenBalance",
      params: {
        addr: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE'
      },
      chain: 'goerli',
    });


  const getVaultBorrowingPower
    = useApiContract({
      abi: abiVaultController,
      address: '0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA',
      functionName: "vaultBorrowingPower",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getVaultLiability
    = useApiContract({
      abi: abiVaultController,
      address: '0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA',
      functionName: "vaultLiability",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getUserTokenBalance
    = useApiContract({
      abi: abiIERC20,
      address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      functionName: "balanceOf",
      params: {
        account: userAccount,
      },
      chain: 'goerli',
    });

  const getUserUsdiBalance
    = useApiContract({
      abi: abiIERC20,
      address: '0x43120a1c70A06b194eaB354d32089f630c43A4b6',
      functionName: "balanceOf",
      params: {
        account: userAccount,
      },
      chain: 'goerli',
    });

  const getTotalSupply
    = useApiContract({
      abi: abiUSDI,
      address: '0x43120a1c70A06b194eaB354d32089f630c43A4b6',
      functionName: "_totalSupply",
      params: {},
      chain: 'goerli',
    });

  const getUsdcReserve
    = useApiContract({
      abi: abiIERC20,
      address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
      functionName: "balanceOf",
      params: { account: '0x43120a1c70A06b194eaB354d32089f630c43A4b6' },
      chain: 'goerli',
    });

  const getInterestFactor
    = useApiContract({
      abi: abiCurve,
      address: '0x1F770CCda0Ebaa907B9d2B17E6d318A9F036DB8e',
      functionName: "getValueAt",
      params: {
        curve_address: '0x0000000000000000000000000000000000000000',
        x_value: ethers.utils.parseUnits(reserveRatio.toString(), "wei"),
      },
      chain: 'goerli',
    });

  const getReserveRatio
    = useApiContract({
      abi: abiUSDI,
      address: '0x43120a1c70A06b194eaB354d32089f630c43A4b6',
      functionName: "reserveRatio",
      params: {
      },
      chain: 'goerli',
    });

  // UPDATES OF DASHBOARD DATA

  useEffect(() => {
    if (isAuthenticated) {
      if (user) {
        setAddress(user.attributes.ethAddress);
      }
      if (account) {
        setAccount(account);
      }
    }
  })

  useEffect(() => {
    if (userAccount) {
      fetchActiveVaultID();
    }
  }, [userAccount])

  useEffect(() => {
    if (vaultAddress.length > 0) {//Not the best way to guarantee vaultAddress is not empty
      fetchActiveWethBalance();
    }
  }, [vaultAddress])

  useEffect(
    () => {
      if (ID.length > 0) {
        fetchActiveVaultAddress();
        fetchActiveVaultLiability();
        fetchActiveVaultBorrowingPower();
        fetchActiveUserTokenBalance();
        fetchActiveUserUsdiBalance();
      }
    }, [ID]
  )

  useEffect(() => {
    if (userAccount) {
      fetchActiveTotalSupply();
      fetchActiveUsdcReserve();
      fetchActiveReserveRatio();
      fetchActiveInterestFactor();
    }
  }, [userAccount])

  useEffect(() => {
    if (getVaultID.data) {
      setID(getVaultID.data)
    }
    if (getWethBalance.data) {
      setWethBalance(parseInt(getWethBalance.data))
    }
    if (getVaultAddress.data) {
      setVaultAddress(getVaultAddress.data)
    }
    if (getVaultLiability.data) {
      setVaultLiability(parseInt(getVaultLiability.data))
    }
    if (getVaultBorrowingPower.data) {
      setVaultBorrowingPower(parseInt(getVaultBorrowingPower.data))
    }
    if (getTotalSupply.data) {
      setTotalSupply(parseInt(getTotalSupply.data))
    }
    if (getUsdcReserve.data) {
      setUsdcReserve(parseInt(getUsdcReserve.data))
    }
    if (getReserveRatio.data) {
      setReserveRatio(parseInt(getReserveRatio.data))
    }
    if (getInterestFactor.data) {
      setInterestFactor(parseInt(getInterestFactor.data))
    }
  }
  )

  console.log('START')
  console.log(userAccount)
  console.log(ID)
  console.log(getVaultID.data)
  console.log(getVaultAddress.data)
  console.log(vaultAddress)
  console.log(wethBalance)
  console.log(vaultLiability)
  console.log(getVaultBorrowingPower.data)
  console.log('END')

  return (
    <>
      <TableContainer
        borderWidth='2px'
        borderRadius='3xl'
        p='4'
        flexDirection='column'
        justifyContent='space-between'
        boxShadow='dark-lg'
        borderColor='blackAlpha.500'
        bg={boxColorPrimary}
        fontFamily='Montserrat'
      >
        <Table variant='simple' color='#EEEEEE'>
          <Thead>
            <Tr >
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}> Your deposited Assets</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Value deposited</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Value deposited in $</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Loan-To-Value</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Borrowing power</Th>
            </Tr>
          </Thead>
          <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light' >
            <Tr>
              <Td>Wrapped Fantom WFTM</Td>
              <Td>{(wethBalance / 10 ** 18).toFixed(4)} WFTM</Td>
              <Td>{(parseInt(JSON.stringify(getFtmPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18).toFixed(2)}$</Td>
              <Td>85%</Td>
              <Td>{((parseInt(JSON.stringify(getFtmPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18) * 0.85).toFixed(2)}$</Td>
            </Tr>
            <Tr>
              <Td>Wrapped Ethereum WETH</Td>
              <Td>{(wethBalance / 10 ** 18).toFixed(4)} WETH</Td>
              <Td>{(parseInt(JSON.stringify(getEthPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18).toFixed(2)}$</Td>
              <Td>85%</Td>
              <Td>{((parseInt(JSON.stringify(getEthPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18) * 0.85).toFixed(2)}$</Td>
            </Tr>
            <Tr>
              <Td>Wrapped Bitcoin BTC</Td>
              <Td>{(wethBalance / 10 ** 18).toFixed(4)} WBTC</Td>
              <Td>{(parseInt(JSON.stringify(getBtcPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18).toFixed(2)}$</Td>
              <Td>85%</Td>
              <Td>{((parseInt(JSON.stringify(getBtcPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18) * 0.85).toFixed(2)}$</Td>
            </Tr>
            <Tr>
              <Td>xBOO</Td>
              <Td>{(wethBalance / 10 ** 18).toFixed(4)} xBOO</Td>
              <Td>{(parseInt(JSON.stringify(getBooPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18).toFixed(2)}$</Td>
              <Td>70%</Td>
              <Td>{((parseInt(JSON.stringify(getBooPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18) * 0.85).toFixed(2)}$</Td>
            </Tr>
            <Tr>
              <Td>Total</Td>
              <Td></Td>
              <Td>{(parseInt(JSON.stringify(getEthPrice.data?.usdPrice, null, 2)) * wethBalance / 10 ** 18).toFixed(2)}$</Td>
              <Td></Td>
              <Td>{(vaultBorrowingPower / 10 ** 18).toFixed(2)} $</Td>
            </Tr>
          </Tbody>
          <Thead>
            <Tr>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Borrowed assets</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Value Borrowed</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Value Borrowed in $</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Interest rate</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Borrowing power used </Th>
            </Tr>
          </Thead>
          <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'>
            <Tr>
              <Td>Libor Protocol Stablecoin USDL</Td>
              <Td>{vaultLiability / 10 ** 18} USDL</Td>
              <Td>{vaultLiability / 10 ** 18} $</Td>
              <Td>{(interestFactor / 10 ** 16).toFixed(2)}%</Td>
              <Td>{(vaultLiability / vaultBorrowingPower * 100).toFixed(2)}%</Td>
            </Tr>
          </Tbody>
        </Table>
        <Progress isAnimated hasStripe value={vaultLiability / vaultBorrowingPower * 100} height='15px' colorScheme='red' bg='green.400' borderRadius='10' top='7px' >
          <ProgressLabel fontSize='lg' fontFamily='Montserrat' >{(vaultLiability / vaultBorrowingPower * 100).toFixed(2)}%</ProgressLabel>
        </Progress>
      </TableContainer>

      <Center>
        <Flex w='70%' pos="relative" bottom="-10">
          <TableContainer layerStyle='primaryData'>
            <Table variant='simple' color='#EEEEEE' >
              <Thead>
                <Tr>
                  <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}> borrowing market stats</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'  >
                <Tr>
                  <Td> Current borrow APR :</Td>
                  <Td> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td> Target borrow APR :</Td>
                  <Td> 1%</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer />
          <TableContainer layerStyle='primaryData'>
            <Table variant='simple' color='#EEEEEE'>
              <Thead>
                <Tr>
                  <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Reserve Stats</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light' >
                <Tr>
                  <Td> Current Deposit APR :</Td>
                  <Td> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td> Target Deposit APR :</Td>
                  <Td> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td> USDi in Circulation :</Td>
                  <Td> {(totalSupply / 10 ** 18).toFixed(2)} </Td>
                </Tr>
                <Tr>
                  <Td> USDC in Reserve :</Td>
                  <Td> {(UsdcReserve / 10 ** 6).toFixed(2)}$</Td>
                </Tr>
                <Tr>
                  <Td> Reserve Ratio :</Td>
                  <Td> {(UsdcReserve * 10 ** 12 / totalSupply * 100).toFixed(2)}%</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Center>
    </>
  )
}

/* GEORLI TESTNET
 */

/* USDC_WETH_CL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC_WETH_POOL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
ProxyAdmin: '0xdaFA29d4D7Ce06E6a7e7FBcaD8ee1f2622b1bAb3',
VaultController: '0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA',
USDI: '0x43120a1c70A06b194eaB354d32089f630c43A4b6',
Curve: '0x1F770CCda0Ebaa907B9d2B17E6d318A9F036DB8e',
ThreeLines: '0xbC86805A40C49a77eDaa81b06F1D0495cfa85Ed0',
Oracle: '0x5A7E5b0b4FB20D5D9647b1615d85ec05cD1474a0',
WethOracle: '0x5FFC0FEEE03ddBAAF8122c541bb02a716475043c' */

/* FTM MAINNET
 */

/* USDC_WETH_CL: '0x11ddd3d147e5b83d01cee7070027092397d63658',
USDC_WETH_POOL: '0x11ddd3d147e5b83d01cee7070027092397d63658',
USDC_WBTC_CL: '0x8e94c22142f4a64b99022ccdd994f4e9ec86e4b4',
USDC_WBTC_POOL: '0x8e94c22142f4a64b99022ccdd994f4e9ec86e4b4',
USDC_WFTM_CL: '0xf4766552d15ae4d256ad41b6cf2933482b0680dc',
USDC_WFTM_POOL: '0xf4766552d15ae4d256ad41b6cf2933482b0680dc',
USDC_XBOO_CL: '0xc8c80c17f05930876ba7c1dd50d9186213496376',
USDC_XBOO_POOL: '0xc8c80c17f05930876ba7c1dd50d9186213496376',
USDC: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
WETH: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
WBTC: '0x321162cd933e2be498cd2267a90534a804051b11',
WFTM: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
XBOO: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
ProxyAdmin: '0x7196F37A4d2f6745F80da3cb727D636e40828DcC',
VaultController: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
USDI: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
Curve: '0x1ecA0B0fd6B4356A4d947dD0D614e73A01d9Bf29',
ThreeLines: '0x8161884FF27386800969D7025Ba9C397b68E720C',
Oracle: '0xEFD28990607793077aa61C6a67F1E3B20dCCc70c',
WethOracle: '0x646Ce0295a82a60D0e7CaD52E89aFD7F986aF54d',
WbtcOracle: '0x48616AbF871E96e4854622ded97cA5D78b033fDB',
WftmOracle: '0xFDa288eF53Dd1dCa3f5A548367174D591ea1B1c5',
XbooOracle: '0xe57E99c57242d0d245eF7789432168108Cf79c79' */