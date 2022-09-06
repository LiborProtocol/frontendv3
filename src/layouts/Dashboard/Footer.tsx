import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram,FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';

import { BoxProps } from '@chakra-ui/react'
import { navDashboard } from './navConfig'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRoutes, useMatch, useLocation } from 'react-router-dom'
import { A } from '#components/A'



interface FooterProps extends BoxProps {
    onClose: () => void
  }
  
export const Footer = ({ onClose, ...rest }: FooterProps) => {

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};


 
return (
  <Box 
    fontFamily='Merienda One'
    color={useColorModeValue('#EEEEEE', 'gray.200')}>
     
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      style={{
        position: "fixed",
        left: 0,
        bottom: 10,
        right: 0,
      }}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}>
      <Text>© 2022 Libor Protocol. All rights reserved</Text>
      <Stack direction={'row'} spacing={6}>
        <SocialButton label={'Twitter'} href={'https://twitter.com/LiborProtocol'}>
          <FaTwitter size='20'/>
        </SocialButton>
        <SocialButton label={'Discord'} href={'https://discord.gg/nsRBrv8dCA'}>
          <FaDiscord size='20'/>
        </SocialButton>
        <SocialButton label={'Github'} href={'https://github.com/LiborProtocol?tab=repositories'}>
          <FaGithub size='20'/>
        </SocialButton>
      </Stack>
    </Container>
  </Box>
);

}
