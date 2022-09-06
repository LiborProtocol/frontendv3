import { Box, chakra, Spacer } from '@chakra-ui/react'
import { Title } from '#components/Title'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { Flex } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Progress, ProgressLabel } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export default function Markets() {

  return (
    <>
      <TableContainer
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
              <Th color='#00EAFF' fontFamily='Merienda One'>Deposited assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Total value deposited</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Total value deposited in $</Th>
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
              <Th color='#00EAFF' fontFamily='Merienda One'>Borrowed assets</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Total Value Borrowed</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Total Value Borrowed in $</Th>
              <Th color='#00EAFF' fontFamily='Merienda One'>Current Borrow rate </Th>
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
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Average LTV :</Td>
                  <Td textStyle='dataSmall'> 85% </Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Average collateral per adress :</Td>
                  <Td textStyle='dataSmall'> 20300$</Td>
                </Tr>
                <Tr>
                  <Td fontFamily='Merienda One' fontWeight='900'> Average borrow per adress :</Td>
                  <Td textStyle='dataSmall'> 20300$</Td>
                </Tr>
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
                  <Td  fontFamily='Merienda One' fontWeight='900'> Current Deposit APR :</Td>
                  <Td textStyle='dataSmall'> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td  fontFamily='Merienda One' fontWeight='900'> Target Deposit APR :</Td>
                  <Td textStyle='dataSmall'> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td  fontFamily='Merienda One' fontWeight='900'> USDi in Circulation :</Td>
                  <Td textStyle='dataSmall'> 12000 </Td>
                </Tr>
                <Tr>
                  <Td  fontFamily='Merienda One' fontWeight='900'> USDC in Reserve :</Td>
                  <Td textStyle='dataSmall'> 20300$</Td>
                </Tr>
                <Tr>
                  <Td  fontFamily='Merienda One' fontWeight='900'> Reserve Ratio :</Td>
                  <Td textStyle='dataSmall'> 48%</Td>
                </Tr>
                <Tr>
                  <Td  fontFamily='Merienda One' fontWeight='900'> Average Deposit :</Td>
                  <Td textStyle='dataSmall'> 100$ </Td>
                </Tr>
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
