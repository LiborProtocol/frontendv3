import {
  Box,
  Drawer,
  DrawerContent,
  DrawerHeader,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { NavigationWithConnected } from './NavigationWithConnected'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom';



export const Dashboard = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure({})

  return (
    <Box minH="100vh" bg={useColorModeValue('#222831', 'gray.900')}> {/*  #A6A6A6 */}
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
     {/*  <Drawer
        autoFocus={false}
        closeOnOverlayClick={true}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm"
      >
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <Sidebar onClose={onClose} w={{ base: 'full', md: '100%' }} />
        </DrawerContent>
      </Drawer> */}
      <NavigationWithConnected onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
      <Outlet />
      </Box>
      <Footer onClose={onClose}  />
    </Box>
    
  )
}
