import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Title } from '#components/Title'
import { Center } from '@chakra-ui/react'
import { List, ListItem } from '@chakra-ui/react'
import "@fontsource/montserrat";


export default function Careers() {
  return (
    <div className="flex justify-around">
      <Box
        layerStyle='primary'
        height='80vh'
        w="70%"
        borderRadius='80px'
        top='20px'
        pos='relative'
      >
        <Center><Heading color='cyan.600' fontFamily='Montserrat' fontSize={'4xl'}>Solidity developer</Heading></Center>
        <Center>
          <List spacing="6" pos='relative' top='40px' alignItems='start'>
            <ListItem  color='cyan.600' fontFamily='Montserrat' fontSize={'xl'}>Your Impact
              <List fontFamily='Montserrat' fontSize={'lg'} spacing="1.5" color='#EEEEEE'>
                <ListItem>Interact with the community to implement seamless integrations</ListItem>
                <ListItem>Participate in Libor protocol key product development</ListItem>
                <ListItem>Develop best practices and documentation</ListItem>
              </List>
            </ListItem>

            <ListItem  color='cyan.600' fontFamily='Montserrat' fontSize={'xl'}>Requirements

              <List fontFamily='Montserrat' fontSize={'lg'} spacing="1.5" color='#EEEEEE' >
                <ListItem> 2+ years of professional experience working in a product-driven environment</ListItem>
                <ListItem>Demonstratable experience in Solidity</ListItem>
                <ListItem>Experience in TypeScript or JavaScript; otherwise experience in Solidity and a willingness to learn</ListItem>
                <ListItem>Resourceful developer and fast learner continually striving to discover more environments</ListItem>
                <ListItem>Ability to write and communicate effectively</ListItem>
                <ListItem>Eagerness to work openly and collaboratively with a diverse team</ListItem>
                <ListItem>Interest in blockchain and other Web 3.0 technologies</ListItem>
                <ListItem>Comfort and/or experience working as a remote employee as a part of a distributed team</ListItem>
              </List>
            </ListItem>


            <ListItem color='cyan.600' fontFamily='Montserrat' fontSize={'xl'}> Our Stack
              <List fontFamily='Montserrat' fontSize={'lg'} spacing="1.5" color='#EEEEEE'>
                <ListItem>Solidity, Hardhat, Typescript, React, chakra UI</ListItem>
              </List>
            </ListItem>

            <ListItem color='cyan.600' fontFamily='Montserrat' fontSize={'xl'}> Our Offer
              <List fontFamily='Montserrat' fontSize={'lg'} spacing="1.5" color='#EEEEEE'>
                <ListItem>--{'>'} 100-150k$ with token allocation, complete heath insurance cover, unlimited PTO</ListItem>
                <ListItem>--{'>'} On site or fully remote, upon agreement</ListItem>
                <ListItem>--{'>'} event participations, team retreats twice a year</ListItem>
              </List>
            </ListItem>

            <ListItem  color='cyan.600' fontFamily='Montserrat' fontSize={'xl'} >
              To apply, please send us an email at libor.protocol@gmail.com with the keyword "PASTA" to make sure your are not a spam.  
            </ListItem>

          </List>
        </Center>

      </Box>
    </div>



  )
}
