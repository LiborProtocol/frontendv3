
import React from 'react'
import { Box, Flex, Heading, position } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { useWeb3ExecuteFunction } from 'react-moralis';
import abiIERC20 from '#modules/AbiIERC20';
import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useApiContract } from 'react-moralis';
import { useEffect } from 'react';
import { NumberInput, InputGroup, InputRightElement, NumberInputField } from '@chakra-ui/react';
import { useState } from 'react';
import { Spacer } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import abiUSDI from '#modules/AbiUSDI';
import abiVaultController from '#modules/AbiVaultController';

export default function Deposit() {


  const ActionDown = useDisclosure()
  const ActionUp = useDisclosure()

  const cancelRef = useRef<HTMLButtonElement>(null);

  const [number, setNumber] = useState("");

  /*   const doDeposit = useWeb3ExecuteFunction({
      abi: abiUSDI,
      contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
      functionName: "donate",
      params: {usdc_amount: 1000},
      network: 'goerli',
    });
   */


  /*   const doDeposit = useWeb3ExecuteFunction({
      abi: abiUSDI,
      contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
      functionName: "donate",
      params: {usdc_amount: 10},
      network: 'goerli',
    }); */


  /*   const doDeposit = useWeb3ExecuteFunction({
      abi: abiUSDI,
      contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
      functionName: "mint",
      params: {usdc_amount: 10000000000},
      network: 'goerli',
    }); */

  /*   const doDeposit = useWeb3ExecuteFunction({
      abi: abiUSDI,
      contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
      functionName: "transfer",
      params: {value: ethers.utils.parseUnits("1000", "ether"), to:'0xD0B3b99383F450654FB312C3c4d094442684674f'},
      network: 'goerli',
    }); */


  /*  const doWithdraw = useWeb3ExecuteFunction();
 
   const increaseAllowance = useWeb3ExecuteFunction({
     abi: abiUSDI,
     contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
     functionName: "increaseAllowance",
     params: { addedValue: 1000 * 10 ** 6, spender: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B' },
     network: 'goerli',
   });
 
 
   const getAllowance = useWeb3ExecuteFunction({
     abi: abiUSDI,
     contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
     functionName: "allowance",
     params: { owner_: "0x2718BD3048ec067E6d678b580D887bE80D0fcE0a", spender: "0xFaA33853efA462a3A266e6D829a4D9660cEB904B" },
     network: 'goerli',
   }); */


  const doWithdraw = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918',
    functionName: "withdraw",
    params: { usdc_amount: parseInt(number || '0') * 10 ** 6 },
  
  });


  const doDeposit = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918',
    functionName: "deposit",
    params: { usdc_amount: parseInt(number || '0') * 10 ** 6},
   
  });

  const getApprove = useWeb3ExecuteFunction({
    abi: abiIERC20,
    contractAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
    functionName: "approve",
    params: { spender: "0xB8Af8C538EE795e5D79cD74F0D00B10FF4a00918", amount: parseInt(number || '0') * 10 ** 6 },
  
  });

  const getInterestRate
    = useApiContract({
      abi: abiVaultController,
      address: '0x0d9bC0A527f72CAB1591d13aFeC74810744FA184',
      functionName: "getCurveMaster",
      params: {},
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

   
  useEffect(() => { getInterestRate.runContractFunction, getTotalSupply.runContractFunction(), getUsdcReserve.runContractFunction() }, []);
  console.log(getInterestRate.data)
 
  return (
    <div>
      <Center>
        <Flex w='90%' flexDirection='row' h='auto'
          borderWidth='2px'
          borderRadius='3xl'
          p='6'
          boxShadow='dark-lg'
          borderColor='blackAlpha.500'
          bg='#393E46'
          top='20px'
          pos='relative'
        >
          <Flex layerStyle='data'>
            <Center >
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Current yield </Heading>
            </Center>
            <Center textStyle='data'>
              {getInterestRate.data} %
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Total USDI supply </Heading>
            </Center>
            <Center textStyle='data'>
              {parseInt(getTotalSupply.data || '0') / 10 ** 18}  USDI
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Reserve Ratio </Heading>
            </Center>
            <Center textStyle='data'> {parseInt(getUsdcReserve.data || '0' )* 10 ** 12 / parseInt(getTotalSupply.data || '0')} %</Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > USDC in reserve </Heading></Center>
            <Center textStyle='data'>
              {parseInt(getUsdcReserve.data || '0') / 10 ** 6} USDC
            </Center>
          </Flex>
        </Flex>
      </Center>

      <Center>
        <Flex layerStyle='background' justifyContent='center' top='110px'>
          <Flex layerStyle='primary'>
            <Center>
              <Flex layerStyle='secondary'>
                <Center position='relative' top='-6px'>
                  <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Your deposited amount </Heading>
                </Center>
                <Center position='relative' top='-6px'>
                  <Text textStyle='data'> 120,350 $</Text>
                </Center>
                <Center position='relative' top='10px'>
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='10px'>
                  <Text textStyle='dataSmall' > 1,450 USDl</Text>
                </Center>
              </Flex>
            </Center>

            <NumberInput variant='NumberInputField'
              value={number}
              onChange={value => setNumber(value)}
            >
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
                <Button onClick={ActionUp.onOpen} variant='greenButton'
                > Deposit</Button>
                <Spacer />
                <Button onClick={ActionDown.onOpen} variant='redButton'
                > Withdraw</Button>

                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionUp.onClose}
                  isOpen={ActionUp.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />   {/* Hue rotate format??? backdropHueRotate='XXX' */}
                  <AlertDialogContent bg='#393E46' borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm deposit</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to deposit {number} USDC ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionUp.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={() => {
                          doDeposit.fetch();
                          getApprove.fetch();
                        }}>
                          Yes
                        </Button>
                      </Flex>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={ActionDown.onClose}
                  isOpen={ActionDown.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />   {/* Hue rotate format??? backdropHueRotate='XXX' */}
                  <AlertDialogContent bg='#393E46' borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm withdraw</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to withdraw {number} USDC ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionDown.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={() => doWithdraw.fetch()} > {/*  onClick={() => doDeposit.fetch()  */}
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





/* const doDeposit = useWeb3ExecuteFunction();

const increaseAllowance = useWeb3ExecuteFunction({
  abi: abiUSDI,
  contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
  functionName: "increaseAllowance",
  params: { addedValue: 1000 * 10 ** 6, spender: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B' },
  network: 'goerli',
});

const getAllowance = useWeb3ExecuteFunction({
  abi: abiUSDI,
  contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
  functionName: "allowance",
  params: { owner_: "0x2718BD3048ec067E6d678b580D887bE80D0fcE0a", spender: "0xFaA33853efA462a3A266e6D829a4D9660cEB904B" },
  network: 'goerli',
});

const getTotalSupply
  = useApiContract({
    abi: abiUSDI,
    address: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "_totalSupply",
    params: {},
    chain: 'goerli',
  });

const getTotalSupplyBis
  = useApiContract({
    abi: abiUSDI,
    address: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "totalSupply",
    params: {},
    chain: 'goerli',
  });

const getReserveRatio
  = useApiContract({
    abi: abiUSDI,
    address: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "reserveRatio",
    params: {},
    chain: 'goerli',
  });

const getUsdcReserve
  = useApiContract({
    abi: abiIERC20,
    address: '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C',
    functionName: "balanceOf",
    params: { account: '0xfaa33853efa462a3a266e6d829a4d9660ceb904b' },
    chain: 'goerli',
  });

useEffect(() => { getTotalSupply.runContractFunction(), getTotalSupplyBis.runContractFunction(), getReserveRatio.runContractFunction(), getUsdcReserve.runContractFunction() }, []);
 
  const getReserveAddress = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "reserveAddress",
    params: {},
    network: 'goerli',
  });


  const getApprove = useWeb3ExecuteFunction({
    abi: abiIERC20,
    contractAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
    functionName: "approve",
    params: { spender: "0xF1CaDD180bAE59053DAA4C25feB95f5e3Fe15320", amount: 1000 * 10 ** 6 },
    network: 'goerli',
  });

  /*   const doDeposit = useWeb3ExecuteFunction({
      abi: abiUSDI,
      contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
      functionName: "donate",
      params: {usdc_amount: 1000},
      network: 'goerli',
    });
   */


/*   const doDeposit = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "donate",
    params: {usdc_amount: 10},
    network: 'goerli',
  }); */


/*   const doDeposit = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "mint",
    params: {usdc_amount: 10000000000},
    network: 'goerli',
  }); */

/*   const doDeposit = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0xFaA33853efA462a3A266e6D829a4D9660cEB904B',
    functionName: "transfer",
    params: {value: ethers.utils.parseUnits("1000", "ether"), to:'0xD0B3b99383F450654FB312C3c4d094442684674f'},
    network: 'goerli',
  }); 
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