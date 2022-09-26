


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
import { useApiContract, useMoralis } from 'react-moralis';
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
import { ConnectButton } from '@web3uikit/web3';
import {
  Avatar,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import '@fontsource/montserrat';


export default function Ido() {


    return (
      <Center py={6}>
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('#EEEEEE', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          position='relative'
          top='10rem'
          >
          <Image
            h={'180px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={'-110px'}>
            <Avatar
              size={'3xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
          <Box p={8}>
            <Stack spacing={2} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={900} fontFamily={'Montserrat'}>
                GD
              </Heading>
              <Text fontSize={'2xl'} fontFamily='Montserrat'>Founder</Text>
              <Text fontSize={'xl'} fontFamily='Montserrat'> Previously in banking. Keen to build the dezentralized future.</Text>
            </Stack>
  
            <Button
              w={'full'}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'#EEEEEE'}
              rounded={'lg'}
              fontFamily='Montserrat'
              fontSize={'2xl'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }


