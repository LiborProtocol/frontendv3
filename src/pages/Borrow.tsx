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

  /* PRICE API CALLS */

  const getEthPrice = useTokenPrice({ address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", chain: "eth" });

  /* WEB3 TRANSACTIONS */

  const mintVault
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "mintVault",
      params: {},
    });

  const doTransfer
    = useWeb3ExecuteFunction({
      abi: abiIERC20,
      contractAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      functionName: "transfer",
      params: {
        recipient: vaultAddress,
        amount: ethers.utils.parseUnits(number1 || '0', "ether"),
      },
    });

  const doBorrow
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
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
        token_address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        amount: ethers.utils.parseUnits(number1 || '0', "ether"),
      },
    });

  const doRepay
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "repayUSDi",
      params: {
        id: ID[0],
        amount: ethers.utils.parseUnits(number2 || '0', "ether"),
      },
    });



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
              <Td>{(vaultLiability/vaultBorrowingPower*100).toFixed(2)}%</Td>
            </Tr>
          </Tbody>
        </Table>
        <Progress isAnimated hasStripe value={vaultLiability/vaultBorrowingPower*100} height='15px' colorScheme='red' bg='green.400' borderRadius='10' top='7px' >
          <ProgressLabel fontSize='lg' fontFamily='Merienda One' >{(vaultLiability/vaultBorrowingPower*100).toFixed(2)}%</ProgressLabel>
        </Progress>
      </TableContainer>



      <Center>
        <Flex w='70%' pos="relative" bottom="-10">
          <Flex layerStyle='primary'>
            <Center>
              <Flex layerStyle='secondary'>
                <Center position='relative' top='-6px'>
                  <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Select your asset</Heading>
                </Center>

                <Center>
                  <Menu>

                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='black' pos='relative' top='0px' bg='#EEEEEE' fontSize='lg' fontFamily='Merienda One' w='100%' >
                      {assetDeposit}
                    </MenuButton>


                    <Center>
                      <MenuList bg='#EEEEEE' justifyContent={'center'} w='187%' borderColor='black' fontSize='lg' fontFamily='Merienda One' borderRadius='20' >

                        <MenuItem justifyContent={'center'} onClick={() => setAssetDeposit('BNB')} borderRadius='20' >BNB</MenuItem>
                        <MenuDivider />

                        <MenuItem justifyContent={'center'} onClick={() => setAssetDeposit('WETH')} >WETH</MenuItem>
                        <MenuDivider />

                        <MenuItem justifyContent={'center'} onClick={() => setAssetDeposit('WBTC')} borderRadius='20'>WBTC</MenuItem>

                      </MenuList>
                    </Center>
                  </Menu>
                </Center>
                <Center position='relative' top='10px' >
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your wallet balance </Heading>
                </Center>
                <Center position='relative' top='10px' textStyle='dataSmall'>
                {(userTokenBalance/10**18).toFixed(5)} {assetDeposit}
                </Center>
              </Flex>
            </Center>


            <NumberInput value={number1} onChange={value => setNumber1(value)}>
              <Center>
                <NumberInputField
                  borderColor='grey'
                  borderWidth='2px'
                  fontWeight="300"
                  fontFamily='Merienda One'
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
                    <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm Deposit</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to deposit {number1} WETH ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionUp1.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {


                          if ((isAuthenticated) && (ID.length == 0)) {
                            await (await mintVault.fetch()).wait();
                            fetchActiveVaultID();
                            /* if (getVaultID.data) {
                              setID(getVaultID.data);
                            } */
                            await (await doTransfer.fetch()).wait();
                            fetchActiveTokenBalance();
                            /* if (getTokenBalance.data) {
                              setTokenBalance(parseInt(getTokenBalance.data))
                            } */
                            ActionUp1.onClose();
                          }

                          else if (isAuthenticated && (ID.length > 0)) {
                            await (await doTransfer.fetch()).wait();
                            fetchActiveTokenBalance();
                            /*
                           if (getTokenBalance.data) {
                             setTokenBalance(parseInt(getTokenBalance.data))
                           } */
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
                    <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm Withdraw</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
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
                            await (await doWithdraw.fetch()).wait();
                            fetchActiveTokenBalance();
                            /* if (getTokenBalance.data) {
                              setTokenBalance(parseInt(getTokenBalance.data))
                            } */
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
            borderWidth='2px'
            borderRadius='3xl'
            p='4'
            flexDirection='column'
            justifyContent='space-between'
            boxShadow='dark-lg'
            borderColor='blackAlpha.500'
            bg={boxColorPrimary}
            color='#EEEEEE'
            h="450px"
            w="45%"

          >
            <Center>
              <Flex
                boxShadow='dark-lg'
                h="150px"
                bg={boxColorSecondary}
                w="80%"
                color='black'
                borderWidth='1px'
                borderRadius='3xl'
                borderColor='blackAlpha.500'
                p='4'
                position='relative'
                top='60px'
                flexDirection='column'
                justifyContent='center'
              >

                <Center position='relative' top='-6px'>
                  <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Your borrowed amount </Heading>
                </Center>
                <Center position='relative' top='-6px'>
                  <Text fontSize='3xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900' > {(vaultLiability / 10 ** 18).toFixed(5)} $</Text>
                </Center>

                <Center position='relative' top='10px'>
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='10px'>
                  <Text fontSize='2xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900'> {(tokenBalance / 10 ** 18).toFixed(5)} USDL </Text>
                </Center>

                {/*   <Center position='relative' top='-2px'>
                  <Heading size='xl' fontFamily='Oleo Script' fontWeight='500' > Your borrowed amount </Heading>
                </Center>
                <Center position='relative' top='-4px'>
                  <Text fontSize='3xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900' > 10350 $</Text>
                </Center>

                <Center position='relative' top='6px'>
                  <Heading size='lg' fontFamily='Oleo Script' fontWeight='500' > Your Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='4px'>
                  <Text fontSize='2xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900' > 1450 $</Text>
                </Center> */}

              </Flex>

            </Center>

            <NumberInput value={number2} onChange={value => setNumber2(value)}>
              <Center>
                <NumberInputField
                  borderColor='grey'
                  borderWidth='2px'
                  fontWeight="300"
                  fontFamily='Merienda One'
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
                <Button onClick={ActionUp2.onOpen} w='40%' pos='relative' bottom='20px' color='black' bg='green.600' h='50px'
                  borderWidth='1px'
                  borderRadius='2xl'
                  borderColor='blackAlpha.500'
                  p='4'
                  boxShadow='dark-lg'
                  fontFamily='Merienda One'
                  fontSize='3xl'
                  fontWeight='100'
                > Borrow</Button>
                <Spacer />
                <Button onClick={ActionDown2.onOpen} w='40%' pos='relative' bottom='20px' color='black' bg='red.600' h='50px'
                  borderWidth='1px'
                  borderRadius='2xl'
                  borderColor='blackAlpha.500'
                  p='4'
                  boxShadow='dark-lg'
                  fontFamily='Merienda One'
                  fontSize='3xl'
                  fontWeight='100'
                > Repay</Button>

                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionUp2.onClose}
                  isOpen={ActionUp2.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />
                  <AlertDialogContent bg={boxColorPrimary} borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm Borrow</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to borrow {number2} USDI ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionUp2.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {

                          if (isAuthenticated && (ID.length > 0)) {
                            await (await doBorrow.fetch()).wait();
                            fetchActiveVaultLiability();
                            /* if (getTokenBalance.data) {
                              setTokenBalance(parseInt(getTokenBalance.data))
                            } */
                            ActionUp2.onClose();
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
                    <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm Repayment</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to repay {number2} USDI ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionDown2.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {

                          if (isAuthenticated && (ID.length > 0)) {
                            await (await doRepay.fetch()).wait();
                            fetchActiveVaultLiability();
                            /* if (getTokenBalance.data) {
                              setTokenBalance(parseInt(getTokenBalance.data))
                            } */
                            ActionDown2.onClose();
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
        </Flex>
      </Center>
    </div>
  )
}


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


/* 12/09/2022
USDC_WETH_CL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC_WETH_POOL: '0x6337b3caf9c5236c7f3d1694410776119edaf9fa',
USDC: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
ProxyAdmin: '0x145A8d7C814d314874FE3B5E948EcF74DAA71aa0',
VaultController: '0x943Bba10Ca78FbB5a358E5d3af7EAa9e98FDba2f',
USDI: '0x593a7F6b29a8B16B86bD4dE8CcE262B6b4840E9d',
Curve: '0xa1AaB8d3f7f13DA7FCFE34c137cC572b42a56732',
ThreeLines: '0xf646358345Dd893105702aC4a7d4d31904A420a6',
Oracle: '0x53d4089c31826D0c56eFF18dF818dCCe5075B7C7',
WethOracle: '0x9DA6F96B2C677de973FeAe107d77Eb34f99d18D0' */