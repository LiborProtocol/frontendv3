import React, { useEffect, useRef } from 'react';
import { useMoralis } from "react-moralis";
import { useApiContract } from 'react-moralis';
import { useWeb3ExecuteFunction, useTokenPrice } from 'react-moralis';
import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import abiIERC20 from '#modules/AbiIERC20';
import abiVault from '#modules/AbiVault';
import abiVaultController from '#modules/AbiVaultController';
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
import "@fontsource/montserrat";

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
import { TransactionResponse } from '@ethersproject/abstract-provider';
import { isInteger, isNumber } from 'lodash';


export default function Borrow() {

  const boxColorPrimary = '#393E46'
  const boxColorSecondary = '#00ADB5'
  const ActionDown1 = useDisclosure()
  const ActionUp1 = useDisclosure()
  const ActionDown2 = useDisclosure()
  const ActionUp2 = useDisclosure()
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [assetDeposit, setAssetDeposit] = useState("WFTM");

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

  const [userAccount, setAccount] = useState('');
  const [userAddress, setAddress] = useState('');
  const [ID, setID] = useState('');
  const [vaultAddress, setVaultAddress] = useState('');
  const [tokenBalance, setTokenBalance] = useState(0);
  const [vaultLiability, setVaultLiability] = useState(0);
  const [vaultBorrowingPower, setVaultBorrowingPower] = useState(0.000001); //"not null value to guarantee "
  const [userUsdiBalance, setUserUsdiBalance] = useState(0);
  const [userTokenBalance, setUserTokenBalance] = useState(0);
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
      if (getUserTokenBalance.data) {
        setUserTokenBalance(parseInt(getUserTokenBalance.data))
      }
    },
  )

  useEffect(
    () => {
      if (ID.length > 0) {
        fetchActiveUserUsdiBalance();
      }
    }, [ID]
  )

  useEffect(
    () => {
      if (getUserUsdiBalance.data) {
        setUserUsdiBalance(parseInt(getUserUsdiBalance.data))
      }
    },
  )

  /* MORALIS API CALLS */

  const getVaultID
    = useApiContract({
      abi: abiVaultController,
      address: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
      functionName: "vaultIDs",
      params: {
        wallet: userAccount,
      },
      chain: 'goerli',
    });

  const getVaultAddress
    = useApiContract({
      abi: abiVaultController,
      address: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
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
        addr: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
      },
      chain: 'goerli',
    });

  const getVaultBorrowingPower
    = useApiContract({
      abi: abiVaultController,
      address: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
      functionName: "vaultBorrowingPower",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getVaultLiability
    = useApiContract({
      abi: abiVaultController,
      address: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
      functionName: "vaultLiability",
      params: {
        id: ID[0],
      },
      chain: 'goerli',
    });

  const getUserTokenBalance
    = useApiContract({
      abi: abiIERC20,
      address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      functionName: "balanceOf",
      params: {
        account: userAccount,
      },
      chain: 'goerli',
    });

  const getUserUsdiBalance
    = useApiContract({
      abi: abiIERC20,
      address: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
      functionName: "balanceOf",
      params: {
        account: userAccount,
      },
      chain: 'goerli',
    });

  /* PRICE API CALLS */

  const getEthPrice = useTokenPrice({ address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83", chain: "fantom" });

  /* WEB3 TRANSACTIONS */

  const mintVault
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
      functionName: "mintVault",
      params: {},
    });

  const doTransfer
    = useWeb3ExecuteFunction({
      abi: abiIERC20,
      contractAddress: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      functionName: "transfer",
      params: {
        recipient: vaultAddress,
        amount: ethers.utils.parseUnits(number1 || '0', "ether"),
      },
    });

  const doBorrow
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
      functionName: "borrowUsdi",
      params: {
        id: ID[0],
        amount: ethers.utils.parseUnits(number2 || '0', "ether"),
      },
    });

  const doWithdraw
    = useWeb3ExecuteFunction({
      abi: abiVault,
      contractAddress: vaultAddress,
      functionName: "withdrawErc20",
      params: {
        token_address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
        amount: ethers.utils.parseUnits(number1 || '0', "ether"),
      },
    });

  const doRepay
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
      functionName: "repayUSDi",
      params: {
        id: ID[0],
        amount: ethers.utils.parseUnits(number2 || '0', "ether"),
      },
    });


  console.log('START')
  console.log(isAuthenticated)
  console.log(userAccount)
  console.log(ID)
  console.log(ID.length)
  console.log(getVaultID.data)
  console.log(getVaultAddress.data)
  console.log(getUserTokenBalance.data)
  console.log(vaultAddress)
  console.log(tokenBalance)
  console.log(vaultLiability)
  console.log(vaultBorrowingPower)
  console.log('END')



  return (
    <div>
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
      >
        <Table variant='simple' color='#EEEEEE' textStyle='tableHeader'>
          <Thead>
            <Tr>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}> Your deposited Assets</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}> Your Value deposited</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}> Your Value deposited in $</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}> Loan-To-Value</Th>
            </Tr>
          </Thead>
          <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'>
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
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Borrowed assets</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Value Borrowed</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Your Value Borrowed in $</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Borrowing power used </Th>
            </Tr>
          </Thead>
          <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'>
            <Tr>
              <Td>Libor Protocol Stablecoin USDL</Td>
              <Td> {vaultLiability / 10 ** 18} USDL</Td>
              <Td>{vaultLiability / 10 ** 18} $</Td>
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
          <Flex layerStyle='primary'>
            <Center>
              <Flex layerStyle='secondary'>
                <Center position='relative' top='-6px'>
                  <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Select your asset</Heading>
                </Center>
                <Center>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='black' pos='relative' top='0px' bg='#EEEEEE' fontSize='lg' fontFamily='Montserrat' w='100%' >
                      {assetDeposit}
                    </MenuButton>
                    <Center>
                      <MenuList bg='cyan.700' justifyContent={'center'} w='187%' borderColor='black' fontSize='lg' fontFamily='Montserrat' borderRadius='20' >
                        <MenuItem _hover={{ bg: "transparent" }} _focus={{ bg: "transparent" }} justifyContent={'center'} onClick={() => setAssetDeposit('WFTM')} borderRadius='20' >WFTM</MenuItem>
                        <MenuDivider />
                        <MenuItem _hover={{ bg: "transparent" }} _focus={{ bg: "transparent" }} justifyContent={'center'} onClick={() => setAssetDeposit('WETH')}>WETH</MenuItem>
                        <MenuDivider />
                        <MenuItem _hover={{ bg: "transparent" }} _focus={{ bg: "transparent" }} justifyContent={'center'} onClick={() => setAssetDeposit('WBTC')}>WBTC</MenuItem>
                        <MenuDivider />
                        <MenuItem _hover={{ bg: "transparent" }} _focus={{ bg: "transparent" }} justifyContent={'center'} onClick={() => setAssetDeposit('XBOO')} borderRadius='20'>XBOO</MenuItem>
                      </MenuList>
                    </Center>
                  </Menu>
                </Center>
                <Center position='relative' top='10px' >
                  <Heading size='md' fontFamily='Montserrat' fontWeight='bold' > Your wallet balance </Heading>
                </Center>
                <Center position='relative' top='10px' textStyle='data'>
                  {(userTokenBalance / 10 ** 18).toFixed(5)} {assetDeposit}
                </Center>
              </Flex>
            </Center>
            <NumberInput value={number1} onChange={value => {
              if (!isNaN(+value)) {
                setNumber1(value)
              }
            }
            }>
              <Center>
                <NumberInputField
                  borderColor='grey'
                  borderWidth='2px'
                  fontWeight="300"
                  fontFamily='Montserrat'
                  w='70%'
                  borderRadius="30"
                  color='white'
                  placeholder='Enter your desired amount'
                  _placeholder={{ opacity: 1, color: 'white', textAlign: 'center' }}
                  textAlign='center'
                  top='30'
                  bg='gray.600'
                />
              </Center>
            </NumberInput>


            <Center>
              <Flex w='80%'>
                <Button onClick={ActionUp1.onOpen} variant='greenButton'> Deposit</Button>
                <Spacer />
                <Button onClick={ActionDown1.onOpen} variant='redButton'> Withdraw</Button>

                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionUp1.onClose}
                  isOpen={ActionUp1.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />
                  <AlertDialogContent bg={boxColorPrimary} borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Montserrat' color='#EEEEEE' fontWeight='100'>Confirm Deposit</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Montserrat' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to deposit {number1} WETH ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionUp1.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {


                          if ((isAuthenticated) && (ID.length === 0)) {
                            await (await mintVault.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveVaultID();
                            await (await doTransfer.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveTokenBalance();
                            ActionUp1.onClose();
                          }

                          else if ((isAuthenticated) && (ID.length > 0)) {
                            await (await doTransfer.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveTokenBalance();
                            ActionUp1.onClose();
                          }

                        }} >
                          Yes
                        </Button>
                      </Flex>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>



                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionDown1.onClose}
                  isOpen={ActionDown1.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />   {/* Hue rotate format??? backdropHueRotate='XXX' */}
                  <AlertDialogContent bg={boxColorPrimary} borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Montserrat' color='#EEEEEE' fontWeight='100'>Confirm Withdraw</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Montserrat' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to withdraw {number1} WETH ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionDown1.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {
                          if (isAuthenticated && (ID.length > 0)) {
                            await (await doWithdraw.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveTokenBalance();
                            ActionDown1.onClose();
                          }
                        }
                        } >
                          Yes
                        </Button>
                      </Flex>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Flex>
            </Center>
          </Flex>
          <Spacer />
          <Flex
            layerStyle='primary'
          >
            <Center>
              <Flex
                layerStyle='secondary'
              >

                <Center position='relative' top='0px'>
                  <Heading size='lg' fontFamily='Montserrat' fontWeight='bold'> Your borrowed amount </Heading>
                </Center>
                <Center position='relative' top='0px'>
                  <Text textStyle='data' > {(vaultLiability / 10 ** 18).toFixed(5)} $</Text>
                </Center>
                <Center position='relative' top='5px'>
                  <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Your Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='5px'>
                  <Text textStyle='data'> {(tokenBalance / 10 ** 18).toFixed(5)} USDL </Text>
                </Center>

              </Flex>

            </Center>

            <NumberInput value={number2} onChange={value => 
              {
                if (!isNaN(+value)) {
                  setNumber2(value)
                }
              }
              }>
              <Center>
                <NumberInputField
                  borderColor='grey'
                  borderWidth='2px'
                  fontWeight="300"
                  fontFamily='Montserrat'
                  w='70%'
                  borderRadius="30"
                  color='white'
                  placeholder='Enter your desired amount'
                  _placeholder={{ opacity: 1, color: 'white', textAlign: 'center' }}
                  textAlign='center'
                  top='30'
                  bg='gray.600'

                />
              </Center>
            </NumberInput>

            <Center>
              <Flex w='80%' >
                <Button onClick={ActionUp2.onOpen} variant='greenButton'> Borrow</Button>
                <Spacer />
                <Button onClick={ActionDown2.onOpen} variant='redButton'> Repay</Button>

                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionUp2.onClose}
                  isOpen={ActionUp2.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />
                  <AlertDialogContent bg={boxColorPrimary} borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Montserrat' color='#EEEEEE' fontWeight='100'>Confirm Borrow</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Montserrat' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to borrow {number2} USDL ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionUp2.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {

                          if (isAuthenticated && (ID.length > 0)) {
                            await (await doBorrow.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveVaultLiability();
                            ActionUp2.onClose;
                          }
                        }
                        }>
                          Yes
                        </Button>
                      </Flex>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>


                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionDown2.onClose}
                  isOpen={ActionDown2.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />   {/* Hue rotate format??? backdropHueRotate='XXX' */}
                  <AlertDialogContent bg={boxColorPrimary} borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Montserrat' color='#EEEEEE' fontWeight='100'>Confirm Repayment</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Montserrat' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to repay {number2} USDL ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionDown2.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {

                          if (isAuthenticated && (ID.length > 0)) {
                            await (await doRepay.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveVaultLiability();
                            ActionDown2.onClose();
                          }
                        }
                        }>
                          Yes
                        </Button>
                      </Flex>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Flex>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </div>
  )
}

/* GEORLI TESTNET
 */

/* 
USDC_WETH_CL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC_WETH_POOL: '0x6337b3caf9c5236c7f3d1694410776119edaf9fa',
USDC: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
ProxyAdmin: '0xFD620deC16c55629fEFDb223b1B76C1209274eAE',
VaultController: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
USDI: '0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918',
Curve: '0x1244D0A848DCad94A5e7e6270aa5aA950E8c9Dc6',
ThreeLines: '0xB112408755314782a4519988284E646aF18641da',
Oracle: '0xDD65D6FDD4A7ba6f4c9d70544032689bF618A2b3',
WethOracle: '0x08B8b8dE291B5A88D18b4F754e29A1a8719bDfd4', */

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