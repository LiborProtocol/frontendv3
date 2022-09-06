


/* export default function Ido() {
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
  return (
    <div>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form action="https://app.convertkit.com/forms/3517762/subscriptions" method="post" data-sv-form="3517762" data-uid="4abbd13446" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"><div data-style="clean"><ul data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false"><div>
        <input name="email_address" aria-label="Email Address" placeholder="Email Address" type="email" /></div>
        <button data-element="submit"><div><div></div><div></div><div></div></div><span>Subscribe</span></button></div><div></div></div>
      </form>
      <NativeBalance />
      {/*       <button onClick={() => fetch({ params: options1 })} disabled={isFetching}>Fetch data </button>
      {JSON.stringify(data)}  
      {/*     {error && <ErrorMessage error={error} />}
 *    <button onClick={() => functionOne.runContractFunction()} disabled={isFetching}>Run contract function</button>
      {functionOne.data && <pre> {JSON.stringify(functionOne.data, null, 2)} </pre>}
      <h1>HEHE</h1>
      <Box></Box>
      <Input placeholder='address' size='sm' width='auto' />
      <Box>(here is the result of runContractFunction call n1)</Box>
      <Box>(here is the result of runContractFunction call n1)</Box>
      <Box>(here is the result of runContractFunction call n2)</Box>
      <Box>(here is the result of runContractFunction call n3)</Box>
      {functionOne.data}
      <Input
        onChange={() => functionOne.runContractFunction()}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </div>
  )
} */

import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react'
import { Box, Flex, Heading, position } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { useWeb3ExecuteFunction, useTokenPrice } from 'react-moralis';
import abiUSDI from '#modules/AbiUSDI';
import abiIERC20 from '#modules/AbiIERC20';
import abiSeedRound from '#modules/AbiSeedRound';
import abiSeedRound2 from '#modules/AbiSeedRound2';

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
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';



export default function Seed() {


  const ActionUp = useDisclosure()

  const cancelRef = useRef<HTMLButtonElement>(null);

  const [number, setNumber] = useState("");

  const [assetDeposit, setAssetDeposit] = useState("BNB");
  const [assetAddress, setAssetAddress] = useState("0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984");



  useEffect(() => {getBalanceOf.runContractFunction(), getUserParticipations.runContractFunction(), getMySeedTokens.runContractFunction(), getTotalDollarContributed.runContractFunction(), getEthPrice.fetchTokenPrice() }, []);


  const doApprove = useWeb3ExecuteFunction({
    abi: abiIERC20,
    contractAddress: assetAddress,
    functionName: "approve",
    params: { spender: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148', amount: ethers.utils.parseUnits(number || '0', "ether") },
    network: 'goerli',
  });


  const getBalanceOf
    = useApiContract({
      abi: abiIERC20,
      address: assetAddress,
      functionName: "balanceOf",
      params: {
        account: '0x2718BD3048ec067E6d678b580D887bE80D0fcE0a',
      },
      chain: 'goerli',
    });

  const getUserParticipations
    = useApiContract({
      abi: abiSeedRound2,
      address: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148',
      functionName: "getUserParticipations1",
      params: {
        _sender: '0x2718BD3048ec067E6d678b580D887bE80D0fcE0a',
      },
      chain: 'goerli',
    });

  const getMySeedTokens
    = useApiContract({
      abi: abiSeedRound2,
      address: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148',
      functionName: "getMySeedTokens",
      params: {
        _sender: '0x2718BD3048ec067E6d678b580D887bE80D0fcE0a',
      },
      chain: 'goerli',
    });

  const getTotalDollarContributed
    = useApiContract({
      abi: abiSeedRound2,
      address: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148',
      functionName: "getTotalDollarContributed",
      params: {},
      chain: 'goerli',
    });

  const getEthPrice = useTokenPrice({ address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", chain: "eth" });

  const getTotalBuys
    = useApiContract({
      abi: abiSeedRound,
      address: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148',
      functionName: "getTotalBuys",
      params: {
      },
      chain: 'goerli',
    });

  const getTotalUsers
    = useApiContract({
      abi: abiSeedRound,
      address: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148',
      functionName: "getTotalUsers",
      params: {
      },
      chain: 'goerli',
    });


  const doDeposit = useWeb3ExecuteFunction()


  console.log(getUserParticipations.data)

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
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Total USD raised</Heading>
            </Center>
            <Center textStyle='data'>
              {(getTotalDollarContributed.data / 10 ** 18).toFixed(2)} USD
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Your current deposit </Heading>
            </Center>
            <Center textStyle='data'>
              {(getUserParticipations.data * 10 ** 18).toFixed(2)}  USD
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Your current token allocation </Heading>
            </Center>
            <Center textStyle='data'> {(getMySeedTokens.data / 10 ** 18).toFixed(2)} </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > LIBOR token price</Heading></Center>
            <Center textStyle='data'>
              {/*   {parseInt(JSON.stringify(getEthPrice.data?.usdPrice, null, 2)) * parseInt(getTotalDollarContributed.data) / 10 ** 18 / (3 * 10 ** 9)}$ */}
              0.0012$
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
                  <Heading size='lg' fontFamily='Merienda One' fontWeight='900' > Select your asset</Heading>
                </Center>
                <Menu >
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='black' pos='relative' top='0px' bg='#EEEEEE'>
                    {assetDeposit}
                  </MenuButton>
                  <Center>
                    <MenuList bg='#EEEEEE'>
                      <MenuItem onClick={() => {
                        setAssetDeposit('BNB');
                        setAssetAddress('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984');
                      }
                      }  >BNB</MenuItem>
                      <MenuItem onClick={() => {
                        setAssetDeposit('WETH');
                        setAssetAddress('0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C');
                      }
                      }  >WETH</MenuItem>
                      <MenuItem onClick={() => {
                        setAssetDeposit('WBTC');
                        setAssetAddress('0x326C977E6efc84E512bB9C30f76E30c160eD06FB');
                      }
                      }  >WBTC</MenuItem>
                    </MenuList>
                  </Center>
                </Menu>
                <Center position='relative' top='10px' >
                  <Heading size='md' fontFamily='Merienda One' fontWeight='900' > Your wallet balance </Heading>
                </Center>
                <Center position='relative' top='10px' textStyle='dataSmall'>
                  {(getBalanceOf.data/10**18).toFixed(2)} USDIl
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
                    <Center> <Text>are you sure you want to deposit {number} USD ? </Text> </Center>
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Flex gap='2'>
                      <Button ref={cancelRef} onClick={ActionUp.onClose} bgColor='red.500' w='12'>
                        No
                      </Button>
                      <Spacer />
                      <Button bgColor='green.500' w='12'
                        onClick={() => {
                          doDeposit.fetch({
                            params: {
                              abi: abiSeedRound2,
                              contractAddress: '0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148',
                              functionName: "Participate",
                              params: {
                                _tokenAddress: assetAddress,
                                _tokenAmount: ethers.utils.parseUnits(number || '0', "ether"),
                              },
                              network: 'goerli',
                            }
                          });
                          doApprove.fetch();
                        }}

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
