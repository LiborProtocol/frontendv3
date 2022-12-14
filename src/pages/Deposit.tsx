import React from 'react'
import { Box, Flex, Heading, position } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { useWeb3ExecuteFunction } from 'react-moralis';
import abiIERC20 from '#modules/AbiIERC20';
import abiCurve from '#modules/AbiCurve';
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
import { useMoralis } from 'react-moralis';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import "@fontsource/open-sans";
import "@fontsource/montserrat";


export default function Deposit() {

  const ActionDown = useDisclosure()
  const ActionUp = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [number, setNumber] = useState("");
  const [userAccount, setAccount] = useState('');
  const [userAddress, setAddress] = useState('');
  const { isAuthenticated, Moralis, account, user } = useMoralis();

  const [totalSupply, setTotalSupply] = useState(0);
  const [usdcReserve, setUsdcReserve] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0); //"not null value to guarantee "
  const [usdiBalance, setUsdiBalance] = useState(0);
  const [reserveRatio, setReserveRatio] = useState(0);
  const [interestFactor, setInterestFactor] = useState(0);

  const fetchActiveTotalSupply = async () => {
    await getTotalSupply.runContractFunction();
  }

  const fetchActiveUsdcReserve = async () => {
    await getUsdcReserve.runContractFunction();
  }

  const fetchActiveUsdcBalance = async () => {
    await getUsdcBalance.runContractFunction();
  }

  const fetchActiveUsdiBalance = async () => {
    await getUsdiBalance.runContractFunction();
  }

  const fetchActiveReserveRatio = async () => {
    await getReserveRatio.runContractFunction();
  }

  const fetchActiveInterestFactor = async () => {
    await getInterestFactor.runContractFunction();
  }

  /* MORALIS API CALLS */

  const getInterestFactor
    = useApiContract({
      abi: abiCurve,
      address: '0x1ecA0B0fd6B4356A4d947dD0D614e73A01d9Bf29',
      functionName: "getValueAt",
      params: {
        curve_address: '0x0000000000000000000000000000000000000000',
        x_value: ethers.utils.parseUnits(reserveRatio.toString(), "wei"),
      },
      chain: 'fantom',
    });

  const getReserveRatio
    = useApiContract({
      abi: abiUSDI,
      address: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
      functionName: "reserveRatio",
      params: {
      },
      chain: 'fantom',
    });

  const getTotalSupply
    = useApiContract({
      abi: abiUSDI,
      address: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
      functionName: "_totalSupply",
      params: {},
      chain: 'fantom',
    });

  const getUsdcReserve
    = useApiContract({
      abi: abiIERC20,
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      functionName: "balanceOf",
      params: { account: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce' },
      chain: 'fantom',
    });

  const getUsdcBalance
    = useApiContract({
      abi: abiIERC20,
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      functionName: "balanceOf",
      params: { account: userAccount },
      chain: 'fantom',
    });

  const getUsdiBalance
    = useApiContract({
      abi: abiUSDI,
      address: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
      functionName: "balanceOf",
      params: { account: userAccount },
      chain: 'fantom',
    });


  const doWithdraw = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
    functionName: "withdraw",
    params: { usdc_amount: parseInt(number || '0') * 10 ** 6 },

  });

  const doDeposit = useWeb3ExecuteFunction({
    abi: abiUSDI,
    contractAddress: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
    functionName: "deposit",
    params: { usdc_amount: parseInt(number || '0') * 10 ** 6 },

  });

  const doApprove = useWeb3ExecuteFunction({
    abi: abiIERC20,
    contractAddress: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    functionName: "approve",
    params: { spender: "0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce", amount: parseInt(number || '0') * 10 ** 6 },
  });

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
      fetchActiveTotalSupply();
      fetchActiveUsdcReserve();
      fetchActiveUsdcBalance();
      fetchActiveUsdiBalance();
      fetchActiveReserveRatio();
      fetchActiveInterestFactor();
    }
  }, [userAccount])

  useEffect(() => {
    if (reserveRatio) {
      fetchActiveInterestFactor();
    }
  }, [reserveRatio])

  useEffect(() => {
    if (getTotalSupply.data) {
      setTotalSupply(parseInt(getTotalSupply.data))
    }
    if (getUsdcReserve.data) {
      setUsdcReserve(parseInt(getUsdcReserve.data))
    }
    if (getUsdcBalance.data) {
      setUsdcBalance(parseInt(getUsdcBalance.data))
    }
    if (getUsdiBalance.data) {
      setUsdiBalance(parseInt(getUsdiBalance.data))
    }
    if (getReserveRatio.data) {
      setReserveRatio(parseInt(getReserveRatio.data))
    }
    if (getInterestFactor.data) {
      setInterestFactor(parseInt(getInterestFactor.data));
    }
  })

  console.log('START')
  console.log(userAccount)
  console.log(getTotalSupply.data)
  console.log(getUsdcReserve.data)
  console.log(getUsdcBalance.data)
  console.log(getUsdiBalance.data)
  console.log(getReserveRatio.data)
  console.log(getInterestFactor.data)
  console.log('END')

  return (
    <div>
      <Center>
        <Flex w='90%  ' flexDirection='row' h='auto'
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
              <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Current yield </Heading>
            </Center>
            <Center textStyle='data'>
              {(interestFactor / 10 ** 16).toFixed(2)} %
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Total USDL supply </Heading>
            </Center>
            <Center textStyle='data'>
              {(totalSupply / 10 ** 18).toFixed(2)}  USDL
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > USDC in reserve </Heading></Center>
            <Center textStyle='data'>
              {(usdcReserve / 10 ** 6).toFixed(2)} USDC
            </Center>
          </Flex>
          <Spacer />
          <Flex layerStyle='data'>
            <Center>
              <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Reserve Ratio </Heading>
            </Center>
            <Center textStyle='data'> {(reserveRatio / 10 ** 16).toFixed(2)} %</Center>
          </Flex>

        </Flex>
      </Center>

      <Center>
        <Flex layerStyle='background' justifyContent='center' top='110px'>
          <Flex layerStyle='primary'>
            <Center>
              <Flex layerStyle='secondary'>
                <Center position='relative' top='0px'>
                  <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Your USDC Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='0px'>
                  <Text textStyle='data'> {(usdcBalance / 10 ** 6).toFixed(2)} USDC </Text>
                </Center>
                <Center position='relative' top='5px'>
                  <Heading size='lg' fontFamily='Montserrat' fontWeight='bold' > Your USDL Wallet Balance </Heading>
                </Center>
                <Center position='relative' top='5px'>
                  <Text textStyle='data'> {(usdiBalance / 10 ** 18).toFixed(2)} USDL</Text>
                </Center>
              </Flex>
            </Center>

            <NumberInput
              value={number}
              onChange={value => {
                if (!isNaN(+value)) {
                  setNumber(value)
                }
              }
              }
            >
              <Center>
                <NumberInputField
                  borderColor='grey'
                  borderWidth='2px'
                  fontWeight="300"
                  fontFamily='Montserrat'
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
                    <AlertDialogHeader fontFamily='Montserrat' color='#EEEEEE' fontWeight='100'>Confirm deposit</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Montserrat' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to deposit {number} USDC ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionUp.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {

                          if (isAuthenticated) {
                            await (await doApprove.fetch() as unknown as TransactionResponse).wait();
                            await (await doDeposit.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveTotalSupply();
                            fetchActiveUsdcReserve();
                            fetchActiveUsdcBalance();
                            fetchActiveUsdiBalance();
                            ActionUp.onClose();
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
                  onClose={ActionDown.onClose}
                  isOpen={ActionDown.isOpen}
                  isCentered
                >
                  <AlertDialogOverlay backdropFilter="auto" backdropBlur="10px" bg='blackAlpha.500' />   {/* Hue rotate format??? backdropHueRotate='XXX' */}
                  <AlertDialogContent bg='#393E46' borderRadius='20px' w='2000px'>
                    <AlertDialogHeader fontFamily='Montserrat' color='#EEEEEE' fontWeight='100'>Confirm withdraw</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily='Montserrat' color='#EEEEEE' fontWeight='500' fontSize='lg'>
                      <Center> <Text>are you sure you want to withdraw {number} USDC ? </Text> </Center>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Flex gap='2'>
                        <Button ref={cancelRef} onClick={ActionDown.onClose} bgColor='red.500' w='12'>
                          No
                        </Button>
                        <Spacer />
                        <Button bgColor='green.500' w='12' onClick={async () => {

                          if (isAuthenticated) {
                            await (await doWithdraw.fetch() as unknown as TransactionResponse).wait();
                            fetchActiveTotalSupply();
                            fetchActiveUsdcReserve();
                            fetchActiveUsdcBalance();
                            fetchActiveUsdiBalance();
                            ActionDown.onClose();
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

/* USDC_WETH_CL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC_WETH_POOL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
ProxyAdmin: '0x41093292ce3d5Af29DA9dB84a46582dB40DeE4d1',
VaultController: '0x04A5904442065F9C342e8AEb21Fc074931db6156',
USDI: '0xD39b08daaCDD3b0B863088a61C89fCBcA17C7315',
Curve: '0x03e89CF34c160f53da604f534DcC958D472Ac08B',
ThreeLines: '0x11c038d49AF13716340be42aB8082bBa88Ce805B',
Oracle: '0xE835398Dfe1B9B2CB98B05C870A45206e47D45b5',
WethOracle: '0xE2889CEd523Bd99E6e49e2a4066a7442a1Af701A' */

/* USDC_WETH_CL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC_WETH_POOL: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
USDC: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
ProxyAdmin: '0xdaFA29d4D7Ce06E6a7e7FBcaD8ee1f2622b1bAb3',
VaultController: '0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA',
USDI: '0x43120a1c70A06b194eaB354d32089f630c43A4b6',
Curve: '0x1F770CCda0Ebaa907B9d2B17E6d318A9F036DB8e',
ThreeLines: '0xbC86805A40C49a77eDaa81b06F1D0495cfa85Ed0',
Oracle: '0x5A7E5b0b4FB20D5D9647b1615d85ec05cD1474a0',
WethOracle: '0x5FFC0FEEE03ddBAAF8122c541bb02a716475043c' */


/* USDC_WETH_CL: '0x11ddd3d147e5b83d01cee7070027092397d63658',
USDC_WETH_POOL: '0x11ddd3d147e5b83d01cee7070027092397d63658',
USDC_WBTC_CL: '0x8e94c22142f4a64b99022ccdd994f4e9ec86e4b4',
USDC_WBTC_POOL: '0x8e94c22142f4a64b99022ccdd994f4e9ec86e4b4',
USDC_WFTM_CL: '0xf4766552d15ae4d256ad41b6cf2933482b0680dc',
USDC_WFTM_POOL: '0xf4766552d15ae4d256ad41b6cf2933482b0680dc',
USDC_XBOO_CL: '0xc8c80c17f05930876ba7c1dd50d9186213496376',
USDC_XBOO_POOL: '0xc8c80c17f05930876ba7c1dd50d9186213496376',
USDC: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
WETH: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
WBTC: '0x321162cd933e2be498cd2267a90534a804051b11',
WFTM: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
XBOO: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
ProxyAdmin: '0x7196F37A4d2f6745F80da3cb727D636e40828DcC',
VaultController: '0xd41f5846f04ace38c231163770466ed7BA1DfCBd',
USDI: '0x82bFeD6abB57888365637Fad80DFC13C0F6e44ce',
Curve: '0x1ecA0B0fd6B4356A4d947dD0D614e73A01d9Bf29',
ThreeLines: '0x8161884FF27386800969D7025Ba9C397b68E720C',
Oracle: '0xEFD28990607793077aa61C6a67F1E3B20dCCc70c',
WethOracle: '0x646Ce0295a82a60D0e7CaD52E89aFD7F986aF54d',
WbtcOracle: '0x48616AbF871E96e4854622ded97cA5D78b033fDB',
WftmOracle: '0xFDa288eF53Dd1dCa3f5A548367174D591ea1B1c5',
XbooOracle: '0xe57E99c57242d0d245eF7789432168108Cf79c79' */