import {
  Avatar,
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { faBars, faGasPump } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react';
import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";
import { ConnectButton } from '@web3uikit/web3';
import { Heading } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import "@fontsource/oleo-script"; //good for heading
import "@fontsource/berkshire-swash";
import "@fontsource/merienda-one"; //great for info inside buttons
import "@fontsource/pacifico"; //good for text, not for heading inside button
import "@fontsource/just-another-hand";
import "@fontsource/leckerli-one"; 

import logo from '../../assets/logo/logo_transparent.png';


 interface NavigationWithConnectedProps extends FlexProps {
  onOpen: () => void
}

export const NavigationWithConnected = ({ onOpen, ...rest }: NavigationWithConnectedProps) => {

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="16"
      alignItems="center"
      //bg={useColorModeValue('#393E46', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      {/* <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        bg='red.400'
        icon={<FontAwesomeIcon icon={faBars} />}
      /> */}
{/*        <Image  boxSize='85px' src={logo} pos='relative' top='8px'/>
 */}      <Heading size='3xl' color='#00EAFF' fontFamily='Oleo Script' pos='fixed' left='50%'  textShadow='3px 3px #393E46'> <Text> Libor Protocol </Text></Heading>
      <Box className="px-2" color='#393E46'>  
{/*      
 */}      {/* Code inside my navBar... */}  
      <ConnectButton />
      {/* Code inside my navBar... */}  
          
      </Box>

      <Box className="px-2">
        <Button variant="solid" size="md" rounded="3xl">
          <FontAwesomeIcon icon={faGasPump} />
          <span className="ml-1">64</span>
        </Button>
      </Box>

     {/*   <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">$ USD</Text>
                </VStack>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('#00ADB5', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>$USD</MenuItem>
              <MenuItem>$VND</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack> */}
    </Flex>
  )
}
