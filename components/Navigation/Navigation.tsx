import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Link,
    Stack,
    useColorModeValue,
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { BiRegistered } from 'react-icons/bi';
import Logo from '../UI/Logo/Logo';
import NavLink from './NavLinks/NavLinks';

const Links = ['About', 'Themes', 'Phases', 'Sponsor', 'Contact Us'];

const Navigation: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery('(min-width: 480px)');

    return (
        <>
            <Box
                px={{ base: 10, md: 18, lg: 24 }}
                py={{ base: 10, md: 14 }}
                position={'absolute'}
                top={0}
                zIndex={20}
                right={0}
                left={0}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _focus={{ outline: 'none' }}
                    />
                    {isMobile ? <Logo /> : null}
                    <HStack spacing={10} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={8}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        {isMobile ? (
                            <Link
                                href={'/register'}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    rightIcon={<BiRegistered />}
                                    color="black"
                                    bg="white"
                                    p={2}
                                    _hover={{
                                        bg: '#CC01FF',
                                        color: 'white',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    _active={{ bg: '#CC01FF' }}
                                >
                                    REGISTRATION
                                </Button>
                            </Link>
                        ) : (
                            <Link
                                href={'/register'}
                                style={{ textDecoration: 'none' }}
                            >
                                <IconButton
                                    size={'md'}
                                    icon={<BiRegistered />}
                                    aria-label={'Open Registration'}
                                    color="black"
                                    bg="white"
                                    _hover={{
                                        bg: '#CC01FF',
                                        color: 'white',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    _active={{ bg: '#CC01FF' }}
                                />
                            </Link>
                        )}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Drawer
                        placement={'left'}
                        size={'full'}
                        onClose={onClose}
                        isOpen={isOpen}
                    >
                        <DrawerOverlay />
                        <DrawerContent
                            bg={useColorModeValue('#f8f9fa', '#121212')}
                        >
                            <DrawerHeader
                                borderBottomWidth="2px"
                                display={'flex'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                            >
                                <Logo />
                                <Button
                                    onClick={onClose}
                                    _focus={{ outline: 'none' }}
                                >
                                    <CloseIcon />
                                </Button>
                            </DrawerHeader>
                            <DrawerBody>
                                <Stack as={'nav'} spacing={4}>
                                    {Links.map((link) => (
                                        <NavLink key={link}>{link}</NavLink>
                                    ))}
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                ) : null}
            </Box>
        </>
    );
};

export default Navigation;
