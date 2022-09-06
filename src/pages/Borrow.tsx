import React, { useEffect, useRef } from 'react';
import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";
import { Title } from '#components/Title'
import { useApiContract } from 'react-moralis';
import { useCounter } from "@chakra-ui/counter"
import { useWeb3ExecuteFunction } from 'react-moralis';
import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { abiOracle } from '#modules/Abi';
import { abiRelay } from '#modules/Abi';
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
  leastDestructiveRef,

} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
import button from '#components/Button';


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

  useEffect(() => { }, [])

  /*   const getVaultsMinted
      = useApiContract({
        abi: abiOracle,
        address: '0x60Dd1c948933333C7765DB945514e68Cbe103596',
        functionName: "currentValue",
        params: {},
        chain: 'goerli',
      }); */

  /*   const GetPrice
    = useWeb3ExecuteFunction({
      abi: abiOracle,
      contractAddress: '0x3594c87266E5A2DAA2697EfaD4263E5b8889E233',
      functionName: "getLivePrice",
      params: {
        token_address: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'
      },
      network: 'goerli',
    });
 */

  const mintVault
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "mintVault",
      params: {},
      network: 'goerli',
    });

  const doApprove = useWeb3ExecuteFunction({
    abi: abiIERC20,
    contractAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    functionName: "approve",
    params: { spender: "0x121b7FEe11d04B62330f21fAF763Fd32DB3D9E80", amount: ethers.utils.parseUnits(number1 || '0', "ether") },
    network: 'goerli',
  });

  const doTransfer
    = useWeb3ExecuteFunction({
      abi: abiIERC20,
      contractAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      functionName: "transfer",
      params: {
        recipient: '0x121b7FEe11d04B62330f21fAF763Fd32DB3D9E80',
        amount: ethers.utils.parseUnits(number1 || '0', "ether"),
      },
      network: 'goerli',
    });

  const doBorrow
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "borrowUsdi",
      params: {
        id: 1,
        amount: ethers.utils.parseUnits(number2||'0', "ether"),
      },
      network: 'goerli',
    });

    const doWithdraw
    = useWeb3ExecuteFunction({
      abi: abiVault,
      contractAddress: '0x121b7FEe11d04B62330f21fAF763Fd32DB3D9E80',
      functionName: "withdrawErc20",
      params: {
        token_address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        amount: ethers.utils.parseUnits(number1||'0', "ether"),
      },
      network: 'goerli',
    });

    const doRepay
    = useWeb3ExecuteFunction({
      abi: abiVaultController,
      contractAddress: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "repayUSDi",
      params: {
        id: 1,
        amount: ethers.utils.parseUnits(number2||'0', "ether"),
      },
      network: 'goerli',
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
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Borrowed assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Value Borrowed</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Your Value Borrowed in $</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Borrowing power used </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Libor Protocol Stablecoin USDl</Td>
              <Td> XXX USDl</Td>
              <Td>1500$</Td>
              <Td>85%</Td>
            </Tr>
          </Tbody>
        </Table>
        <Progress isAnimated hasStripe value={64} height='15px' colorScheme='green' bg='red.400' borderRadius='10' top='7px' >
          <ProgressLabel fontSize='lg' fontFamily='Merienda One' >60%</ProgressLabel>
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
                <Menu >

                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='black' pos='relative' top='0px' bg='#EEEEEE'>
                    {assetDeposit}
                  </MenuButton>


                  <Center>
                    <MenuList bg='#EEEEEE'>
                      <MenuItem onClick={assetDeposit => setAssetDeposit('BNB')}  >BNB</MenuItem>
                      <MenuItem onClick={assetDeposit => setAssetDeposit('WETH')} >WETH</MenuItem>
                      <MenuItem onClick={assetDeposit => setAssetDeposit('WBTC')} >WBTC</MenuItem>
                    </MenuList>
                  </Center>
                </Menu>
                <Center position='relative' top='10px' >
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your wallet balance </Heading>
                </Center>
                <Center position='relative' top='10px' textStyle='dataSmall'>
                  1,450 USDIl
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
                        <Button bgColor='green.500' w='12' onClick={() => {
                          doApprove.fetch();
                          doTransfer.fetch();
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
                        <Button bgColor='green.500' w='12' onClick={ () => doWithdraw.fetch()} >
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
                  <Text fontSize='3xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900' > 120,350 $</Text>
                </Center>

                <Center position='relative' top='10px'>
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='10px'>
                  <Text fontSize='2xl' fontFamily='Leckerli One' color='#EEEEEE' textShadow='3px 3px #000000' fontWeight='900' > 1,450 USDl</Text>
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
                        <Button bgColor='green.500' w='12' onClick={() => doBorrow.fetch()} >
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
                        <Button bgColor='green.500' w='12' onClick={() => doRepay.fetch()} >
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