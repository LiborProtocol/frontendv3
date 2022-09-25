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
import "@fontsource/montserrat";


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
        fontFamily='Montserrat'
      >
        <Table variant='simple' color='#EEEEEE'>
          <Thead>
            <Tr>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Deposited assets</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Total value deposited</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Total value deposited in $</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Loan-To-Value</Th>
            </Tr>
          </Thead>
          <Tbody  fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'>
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
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Borrowed assets</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Total Value Borrowed</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Total Value Borrowed in $</Th>
              <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Current Borrow rate </Th>
            </Tr>
          </Thead>
          <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'>
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
                  <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>borrowing market stats</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light' >
                <Tr>
                  <Td> Current borrow APR :</Td>
                  <Td> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td> Target borrow APR :</Td>
                  <Td> 1%</Td>
                </Tr>
                <Tr>
                  <Td> Average LTV :</Td>
                  <Td> 85% </Td>
                </Tr>
                <Tr>
                  <Td> Average collateral per adress :</Td>
                  <Td> 20300$</Td>
                </Tr>
                <Tr>
                  <Td> Average borrow per adress :</Td>
                  <Td> 20300$</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer />
          <TableContainer layerStyle='primary'>
            <Table variant='simple' color='#EEEEEE'>
              <Thead>
                <Tr>
                  <Th color='cyan.600' fontFamily='Montserrat' fontSize={'md'}>Reserve Stats</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontFamily='Montserrat' fontSize={'xl'} fontWeight='light'>
                <Tr>
                  <Td> Current Deposit APR :</Td>
                  <Td> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td> Target Deposit APR :</Td>
                  <Td> 2.5%</Td>
                </Tr>
                <Tr>
                  <Td> USDi in Circulation :</Td>
                  <Td> 12000 </Td>
                </Tr>
                <Tr>
                  <Td> USDC in Reserve :</Td>
                  <Td> 20300$</Td>
                </Tr>
                <Tr>
                  <Td> Reserve Ratio :</Td>
                  <Td> 48%</Td>
                </Tr>
                <Tr>
                  <Td> Average Deposit :</Td>
                  <Td> 100$ </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Center>
    </>
  )
}
