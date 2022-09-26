import { Box, BoxProps } from '@chakra-ui/react'
import { navDashboard } from './navConfig'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRoutes, useMatch, useLocation, Link } from 'react-router-dom'
import { A } from '#components/A'
import { Center } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

interface SidebarProps extends BoxProps {
  onClose: () => void
}

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation()

  const isPathActive = (path: string) => {
    return path === location.pathname
  }


  return (
    <Box
      transition="3s ease"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      className="sidebar text-white"
      borderRightColor='white'
      borderRightWidth='1px'
      {...rest}
    >

      <ul className="flex flex-col py-2 space-y-1 w-full">
        <li className="px-5 mb-7 mt-10">
          <Center top="50px" fontSize='2xl' fontFamily='Montserrat'>Menu</Center>
        </li>
        {navDashboard.map((item, idx) => {
          const isActive = isPathActive(item.path)

          return (
            <li key={idx}>
              <A
                url={item.path}
                className={`
                relative flex flex-row items-center h-12 focus:outline-none border-transparent pr-6 mx-3 rounded-2xl font-['Montserrat'] 
                ${isActive
                    ? 'bg-cyan-700 text-white font-bold' ///to be modified tomorrow
                    : 'hover:bg-white  hover:text-cyan-700'
                  }
                `}
              >
                <span className="inline-flex justify-center items-center ml-4">{item.icon}</span>
                <span className="ml-2 text-[13px] tracking-wide truncate">{item.title}</span>
              </A>
            </li>
          )
        })}

        <li />
        <Divider w='80%' alignSelf='center' />

      </ul>


    </Box>
  )
}
