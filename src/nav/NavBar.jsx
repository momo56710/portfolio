import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FaBehance, FaEnvelope, FaGithub } from 'react-icons/fa';
export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={{ base: 'initial', md: 'fixed' }} mr={'2em'} >
      <Flex
        color={useColorModeValue('#E5E4F1', '#131B42')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          align={'center'}
          justifyContent={'center'}
        >
          <IconButton
            color={useColorModeValue('#E5E4F1', '#131B42')}
            bg={'none'}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            _hover={{ bg: 'none' }}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            ml={10}
            align={'center'}
           
            background={useColorModeValue('rgba(19,27,82,0.95)','rgba(94,187,195,0.95)')}
            w={'100vw'}
          >
            <Box
              width={'25vh'}
              height={'5px'}
              borderRadius={'20em'}
              opacity={'0.5'}
              bg={useColorModeValue('#E5E4F1', '#131B52')}
              mr={'2em'}
            ></Box>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Box bg={useColorModeValue('#131B52','#5EBBC3')} w={'100vw'}>
      <Collapse in={isOpen} animateOpacity>
         <MobileNav />
       
      </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('#E5E4F1', '#131B42');
  const hoverLinkColor = useColorModeValue('#5EBBC3', '#131B52')
  const popoverContentBgColor = useColorModeValue('#131B52','#5EBBC3');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={600}
                color={linkColor}
                opacity={'0.5'}
                _hover={{
                  opacity: 1,
                  textDecoration: 'none',
                  color : hoverLinkColor
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link href={href} role={'group'} display={'block'} p={2} rounded={'md'} _hover={
      {color : useColorModeValue('#5EBBC3', '#131B52')}
    }>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex p={'2em'} alignItems={'center'} justifyContent={'space-around'}>
        <FaGithub
          color={useColorModeValue('#E5E4F1', '#131B52')}
          fontSize={'2em'}
        />
        <FaEnvelope
          color={useColorModeValue('#E5E4F1', '#131B52')}
          fontSize={'2em'}
        />
        
        <FaBehance
          color={useColorModeValue('#E5E4F1', '#131B52')}
          fontSize={'2em'}
        />
        
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  //   {
  //     label: 'Inspiration',
  //     children: [
  //       {
  //         label: 'Explore Design Work',
  //         subLabel: 'Trending Design to inspire you',
  //         href: '#',
  //       },
  //       {
  //         label: 'New & Noteworthy',
  //         subLabel: 'Up-and-coming Designers',
  //         href: '#',
  //       },
  //     ],
  //   },
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Skills',
    href: '/skills',
  },
  {
    label: 'Work',
    children: [
      {
        label: 'Development',
        subLabel: 'websites that i create',
        href: '/work/websites',
      },
      {
        label: 'animation videos',
        subLabel: 'some cool animations',
        href: '/work/animations',
      },
      {
        label: 'graphic design',
        subLabel: 'logos and their branding',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact',
    href: '#',
  },
];
