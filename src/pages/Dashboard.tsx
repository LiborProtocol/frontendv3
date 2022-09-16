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


export default function Markets() {

  const boxColorPrimary = '#393E46'
  const boxColorSecondary = '#00ADB5'
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [assetDeposit, setAssetDeposit] = useState("BNB");

  const fetchActiveVaultID = async () => {
    await getVaultID.runContractFunction();
  }

  const fetchActiveVaultAddress = async () => {
    await getVaultAddress.runContractFunction();
  }

  const fetchActiveTokenBalance = async () => {
    await getTokenBalance.runContractFunction();
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

  const [userAccount, setAccount] = useState('');
  const [userAddress, setAddress] = useState('');
  const [ID, setID] = useState('');
  const [vaultAddress, setVaultAddress] = useState('');
  const [tokenBalance, setTokenBalance] = useState(0);
  const [vaultLiability, setVaultLiability] = useState(0);
  const [vaultBorrowingPower, setVaultBorrowingPower] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [UsdcReserve, setUsdcReserve] = useState(0);
  const { isAuthenticated, Moralis, account, user } = useMoralis();

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

  useEffect(
    () => {
      if (getVaultID.data) {
        setID(getVaultID.data)
      }
    },
  )

  useEffect(() => {
    if (ID.length > 0) {
      fetchActiveVaultAddress();
    }
  }, [ID])

  useEffect(
    () => {
      if (getVaultAddress.data) {
        setVaultAddress(getVaultAddress.data)
      }
    },
  )

  useEffect(() => {
    if (vaultAddress.length > 0) {//Not the best way to guarantee vaultAddress is not empty
      fetchActiveTokenBalance();
    }
  }, [vaultAddress])

  useEffect(
    () => {
      if (getTokenBalance.data) {
        setTokenBalance(parseInt(getTokenBalance.data))
      }
    },
  )

  useEffect(
    () => {
      if (ID.length > 0) {
        fetchActiveVaultLiability();
      }
    }, [ID]
  )

  useEffect(
    () => {
      if (getVaultLiability.data) {
        setVaultLiability(parseInt(getVaultLiability.data))
      }
    },
  )

  useEffect(
    () => {
      if (ID.length > 0) {
        fetchActiveVaultBorrowingPower();
      }
    }, [ID]
  )

  useEffect(
    () => {
      if (getVaultBorrowingPower.data) {
        setVaultBorrowingPower(parseInt(getVaultBorrowingPower.data))
      }
    },
  )

  useEffect(
    () => {
      if (ID.length > 0) {
        fetchActiveUserTokenBalance();
      }
    }, [ID]
  )

  useEffect(
    () => {
      if (ID.length > 0) {
        fetchActiveUserUsdiBalance();
      }
    }, [ID]
  )

  useEffect(() => {
    if (userAccount) {
      fetchActiveTotalSupply();
      fetchActiveUsdcReserve();
    }
  }, [userAccount])

  useEffect(() =>{
    if (getTotalSupply.data){
      setTotalSupply(parseInt(getTotalSupply.data))
    }
  }
  )

  useEffect(() =>{
    if (getUsdcReserve.data){
      setUsdcReserve(parseInt(getUsdcReserve.data))
    }
  }
  )

  /* MORALIS API CALLS */

  const getVaultID
    = useApiContract({
      abi: abiVaultController,
      address: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "vaultIDs",
      params: {
        wallet: userAccount,
      },
      chain: 'goerli',
    });

  const getVaultAddress
    = useApiContract({
      abi: abiVaultController,
      address: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "vaultAddress",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getTokenBalance
    = useApiContract({
      abi: abiVault,
      address: vaultAddress,
      functionName: "tokenBalance",
      params: {
        addr: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
      },
      chain: 'goerli',
    });


  console.log('START')
  console.log(userAccount)
  console.log(ID)
  console.log(getVaultID.data)
  console.log(getVaultAddress.data)
  console.log(vaultAddress)
  console.log(tokenBalance)
  console.log(vaultLiability)
  console.log(vaultBorrowingPower)
  console.log('END')

  const getVaultsMinted
    = useApiContract({
      abi: abiVaultController,
      address: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "vaultsMinted",
      params: {},
      chain: 'goerli',
    });

  const getVaultBorrowingPower
    = useApiContract({
      abi: abiVaultController,
      address: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "vaultBorrowingPower",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getVaultLiability
    = useApiContract({
      abi: abiVaultController,
      address: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
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
      address: '0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918',
      functionName: "balanceOf",
      params: {
        account: userAccount,
      },
      chain: 'goerli',
    });


    const getTotalSupply
    = useApiContract({
      abi: abiUSDI,
      address: '0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918',
      functionName: "_totalSupply",
      params: {},
      chain: 'goerli',
    });

  const getUsdcReserve
    = useApiContract({
      abi: abiIERC20,
      address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
      functionName: "balanceOf",
      params: { account: '0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918' },
      chain: 'goerli',
    });

  /* PRICE API CALLS */

  const getEthPrice = useTokenPrice({ address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", chain: "eth" });

  return (
    <>
      {/*       <TableContainer
        borderWidth='2px'
        borderRadius='3xl'
        p='4'
        flexDirection='column'
        justifyContent='space-between'
        boxShadow='dark-lg'
        borderColor='blackAlpha.500'
        bg='#393E46'
        color='#EEEEEE'
        fontFamily='Merienda One'
      >
        <Table variant='simple' color='#EEEEEE'>
          <Thead>
            <Tr>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your deposited assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your value deposited</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your value deposited in $</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Loan-To-Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Binance Coin</Td>
              <Td> XXX BNB</Td>
              <Td>1500$</Td>
              <Td>85%</Td>
            </Tr>
            <Tr>
              <Td>Wrapped Ethereum</Td>
              <Td>XXX WETH</Td>
              <Td>1500$</Td>
              <Td>85%</Td>
            </Tr>
            <Tr>
              <Td>Wrapped Bitcoin</Td>
              <Td>XXX BTC</Td>
              <Td>1500$</Td>
              <Td>90%</Td>
            </Tr>
          </Tbody>
          <Thead>
            <Tr>
              <Th color='#00EAFF' fontFamily='Merienda One'> Your borrowed assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your value Borrowed</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'> Your Value Borrowed in $</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'> 	BORROWING POWER USED </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Libor Protocol Stablecoin USDl</Td>
              <Td> XXX USDl</Td>
              <Td>1500$</Td>
              <Td>2.5%</Td>
            </Tr>
          </Tbody>
        </Table>
        <Progress isAnimated hasStripe value={64} height='15px' colorScheme='green' bg='red.400' borderRadius='10' top='7px' >
          <ProgressLabel fontSize='lg' fontFamily='Merienda One' >60%</ProgressLabel>
        </Progress>
      </TableContainer> */}

      <TableContainer
        borderWidth='2px'
        borderRadius='3xl'
        p='4'
        flexDirection='column'
        justifyContent='space-between'
        boxShadow='dark-lg'
        borderColor='blackAlpha.500'
        bg={boxColorPrimary}
        color='#EEEEEE'
        fontFamily='Merienda One'
      >
        <Table variant='simple' color='#EEEEEE'>
          <Thead>
            <Tr>
              <Th color='#00EAFF' fontFamily='Merienda One'> Your deposited Assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Value deposited</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Value deposited in $</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Loan-To-Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>SOON !</Td>
              <Td>SOON !</Td>
              <Td>SOON !</Td>
              <Td>SOON !</Td>
            </Tr>
            <Tr>
              <Td>Wrapped Ethereum WETH</Td>
              <Td>{(tokenBalance / 10 ** 18).toFixed(4)} WETH</Td>
              <Td>{(parseInt(JSON.stringify(getEthPrice.data?.usdPrice, null, 2)) * tokenBalance / 10 ** 18).toFixed(2)}$</Td>
              <Td>85%</Td>
            </Tr>
            <Tr>
              <Td>SOON !</Td>
              <Td>SOON !</Td>
              <Td>SOON !</Td>
              <Td>SOON !</Td>
            </Tr>
          </Tbody>
          <Thead>
            <Tr>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Borrowed assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Value Borrowed</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Value Borrowed in $</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Borrowing power used </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Libor Protocol Stablecoin USDL</Td>
              <Td> {vaultLiability / 10 ** 18} USDL</Td>
              <Td>{vaultLiability / 10 ** 18} $</Td>
              <Td>{(vaultLiability / vaultBorrowingPower * 100).toFixed(2)}%</Td>
            </Tr>
          </Tbody>
        </Table>
        <Progress isAnimated hasStripe value={vaultLiability / vaultBorrowingPower * 100} height='15px' colorScheme='green' bg='red.400' borderRadius='10' top='7px' >
          <ProgressLabel fontSize='lg' fontFamily='Merienda One' >{(vaultLiability / vaultBorrowingPower * 100).toFixed(2)}%</ProgressLabel>
        </Progress>
      </TableContainer>

      <Center>
        <Flex w='70%' pos="relative" bottom="-10">
          <TableContainer layerStyle='primary'>
            <Table variant='simple' color='#EEEEEE'>
              <Thead>
                <Tr>
                  <Th color='#00EAFF' fontFamily='Merienda One'>borrowing market stats</Th>
                  <Th color='#00EAFF' fontFamily='Merienda One'></Th>
                </Tr>
              </Thead>
              <Tbody >
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Current borrow APR :</Td>
                  <Td textStyle='dataSmall'> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Target borrow APR :</Td>
                  <Td textStyle='dataSmall'> 1%</Td>
                </Tr>
{/*                 <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Your LTV :</Td>
                  <Td textStyle='dataSmall'> 85% </Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Your value deposited in $ :</Td>
                  <Td textStyle='dataSmall'> 20300$</Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Your value borrow in $ :</Td>
                  <Td textStyle='dataSmall'> 20300$</Td>
                </Tr> */}
                {/*  <Tr>
                      <Td fontFamily='Merienda One' fontWeight='900'> Binance Coin</Td>
                      <Td textStyle='dataSmall'> XXX BNB</Td>
                    </Tr> */}
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer />
          <TableContainer layerStyle='primary'>
            <Table variant='simple' color='#EEEEEE'>
              <Thead>
                <Tr>
                  <Th color='#00EAFF' fontFamily='Merienda One'>Reserve Stats</Th>
                  <Th color='#00EAFF' fontFamily='Merienda One'></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Current Deposit APR :</Td>
                  <Td textStyle='dataSmall'> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Target Deposit APR :</Td>
                  <Td textStyle='dataSmall'> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> USDi in Circulation :</Td>
                  <Td textStyle='dataSmall'> {(totalSupply/10**18).toFixed(2)} </Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> USDC in Reserve :</Td>
                  <Td textStyle='dataSmall'> {(UsdcReserve/10**6).toFixed(2)}$</Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Reserve Ratio :</Td>
                  <Td textStyle='dataSmall'> {(UsdcReserve*10**12/totalSupply*100).toFixed(2)}%</Td>
                </Tr>
{/*                 <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Your reserve Deposit :</Td>
                  <Td textStyle='dataSmall'> 100$ </Td>
                </Tr> */}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Center>
      {/* <Center>
            <Flex w='70%' pos="relative" bottom="-10">
              <Flex layerStyle='primary'>
                borrowing market stats
                Borrow APR :
                Average LTV :
                Average borrow per adress :
              </Flex>
              <Spacer />
              <Flex layerStyle='primary'>
              
                reserve stats
                Deposit APR :
                USDi in Circulation :
                USDC in Reserve :
                Reserve Ratio :
                Average deposits :
                <Center position='relative' bottom='0px'>
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your Wallet Balance </Heading>           
                  <Text fontSize='2xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900' > 1,450 USDl</Text>
                </Center>
              </Flex>
            </Flex>
          </Center> */}
    </>
  )
}


