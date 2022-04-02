import React, { FC } from 'react';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    HStack,
    IconButton,
    Button,
    Stack,
    Text,
    useDisclosure,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from './NavLinks/NavLinks';

const Links = ['Dashboard', 'Projects', 'Team'];

const Navigation: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box px={8} py={12}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _focus={{ outline: 'none' }}
                    />
                    <Text display={{ base:'none',md: 'block' }}>Logo</Text>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode} _focus={{ outline: 'none' }}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Drawer placement={'left'} size={'full'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent bg={useColorModeValue("#f8f9fa", "#121212")}>
                            <DrawerHeader borderBottomWidth='2px' display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Text>Logo</Text>
                                <Button onClick={onClose} _focus={{ outline: 'none' }}>
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
}

export default Navigation;