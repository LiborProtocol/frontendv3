import React from 'react'
import { Box, Flex, Heading, position } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { useWeb3ExecuteFunction, useTokenPrice } from 'react-moralis';
import abiSeedRound from '#modules/AbiSeedRound';
import { Button } from '@chakra-ui/react';
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
import { ethers } from 'ethers';


export default function Seed() {


  const ActionUp = useDisclosure()

  const cancelRef = useRef<HTMLButtonElement>(null);

  const [number, setNumber] = useState("");

  useEffect(() => { getInvestorBalances.runContractFunction(), getMySeedTokens.runContractFunction(), getTotalWeiContributed.runContractFunction(), getEthPrice.fetchTokenPrice() }, []);


  const getInvestorBalances
    = useApiContract({
      abi: abiSeedRound,
      address: '0xa0A56825246b59C1a84b805B1a6acC410fDFcE04',
      functionName: "investorBalances",
      params: {
        '': '0x2718BD3048ec067E6d678b580D887bE80D0fcE0a',
      },
      chain: 'goerli',
    });


  const getMySeedTokens
    = useApiContract({
      abi: abiSeedRound,
      address: '0xa0A56825246b59C1a84b805B1a6acC410fDFcE04',
      functionName: "getMySeedTokens",
      params: {
        _sender: '0x2718BD3048ec067E6d678b580D887bE80D0fcE0a',
      },
      chain: 'goerli',
    });

  const getTotalWeiContributed
    = useApiContract({
      abi: abiSeedRound,
      address: '0xa0A56825246b59C1a84b805B1a6acC410fDFcE04',
      functionName: "getTotalWeiContributed",
      params: {},
      chain: 'goerli',
    });

  const getEthPrice = useTokenPrice({ address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", chain: "eth" });

  const getTotalBuys
    = useApiContract({
      abi: abiSeedRound,
      address: '0xa0A56825246b59C1a84b805B1a6acC410fDFcE04',
      functionName: "getTotalBuys",
      params: {
      },
      chain: 'goerli',
    });

  const getTotalUsers
    = useApiContract({
      abi: abiSeedRound,
      address: '0xa0A56825246b59C1a84b805B1a6acC410fDFcE04',
      functionName: "getTotalUsers",
      params: {
      },
      chain: 'goerli',
    });


  const doDeposit = useWeb3ExecuteFunction()




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
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Total ETH raised</Heading>
            </Center>
            <Center textStyle='data'>
            {parseInt(getTotalWeiContributed.data ||'0') / 10 ** 18} ETH
            
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Your current deposit </Heading>
            </Center>
            <Center textStyle='data'>
              {parseInt(getInvestorBalances.data ||'0') / 10 ** 18}  ETH
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Your current token allocation </Heading>
            </Center>
            <Center textStyle='data'> {parseInt(getMySeedTokens.data || '0') / 10 ** 18} </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Current LIBOR token price</Heading></Center>
            <Center textStyle='data'>
            {parseInt(JSON.stringify(getEthPrice.data?.usdPrice, null, 2))*parseInt(getTotalWeiContributed.data || '0')/10**18/(3*10**9)}$
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

            <NumberInput variant='NumberInputField' value={number} onChange={value => setNumber(value)}>
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
                  bg='gray.600' />
              </Center>
            </NumberInput>

            <Center>


              <Button onClick={ActionUp.onOpen} variant='greenButton' w='50%'> Deposit</Button>

              <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={ActionUp.onClose}
                isOpen={ActionUp.isOpen}
                isCentered
              >
                <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' /> 
                <AlertDialogContent bg='#393E46' borderRadius='20px' w='2000px'>
                  <AlertDialogHeader fontFamily='Merienda One' color='#EEEEEE' fontWeight='100'>Confirm Deposit</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody fontFamily='Merienda One' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                    <Center> <Text>are you sure you want to deposit {number} ETH ? </Text> </Center>
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Flex gap='2'>
                      <Button ref={cancelRef} onClick={ActionUp.onClose} bgColor='red.500' w='12'>
                        No
                      </Button>
                      <Spacer />
                      <Button bgColor='green.500' w='12'



                      onClick={() => doDeposit.fetch({
                         params: {
                           abi: abiSeedRound,
                           contractAddress: '0xa0A56825246b59C1a84b805B1a6acC410fDFcE04',
                           functionName: "reserve",
                           params: {},
                           msgValue: parseInt(number||'0') *10**18,
                         }
                       })}

                         disabled={doDeposit.isFetching}
                        

                      >
                        Yes
                      </Button>
                    </Flex>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </div>
  )
}
