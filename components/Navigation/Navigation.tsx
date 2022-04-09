import React, { FC } from 'react';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Flex,
    HStack,
    IconButton,
    Button,
    Stack,
    Link,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BiRegistered } from 'react-icons/bi';
import NavLink from './NavLinks/NavLinks';
import Logo from '../UI/Logo/Logo';

const Links = ['About', 'Themes', 'Phases', 'Sponsor', 'Contact Us'];

const Navigation: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                px={24}
                py={14}
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
                    <Logo />
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
                        <Link
                            href={'/register'}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                rightIcon={<BiRegistered />}
                                color="black"
                                bg="white"
                                _hover={{
                                    bg: '#CC01FF',
                                    color: 'white',
                                }}
                                _focus={{ outline: 'none' }}
                                _active={{ bg: '#CC01FF' }}
                            >
                                REGISTERATION
                            </Button>
                        </Link>
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