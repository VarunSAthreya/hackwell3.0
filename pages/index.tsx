import {
    Box,
    Divider,
    Flex,
    SimpleGrid,
    Heading,
    HStack,
    Image,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Canvas from '../components/UI/Canvas/Canvas';

const Home: NextPage = () => {
    return (
        <>
            <Canvas />
            {/* <Stack spacing={32} pos={'absolute'} top={'19%'} left={'15%'} zIndex={20}>
                <Stack spacing={3}>
                    <Text
                        textTransform={'uppercase'}
                        color={'red.500'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={'white'}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        JSSATE-B PRESENTS
                    </Text>
                    <Heading fontSize={'6xl'} letterSpacing={4}>
                        HACKWELL 3.0
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'} letterSpacing={3}>
                        Every Line Matters
                    </Text>
                </Stack>
                <HStack
                    spacing={8}
                    divider={<StackDivider borderColor={'whiteAlpha.500'} />}
                >
                    <Box>
                        <Heading>22</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            DAYS
                        </Text>
                    </Box>
                    <Box>
                        <Heading>22</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            HRS
                        </Text>
                    </Box>
                    <Box>
                        <Heading>22</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            MINS
                        </Text>
                    </Box>
                    <Box>
                        <Heading>22</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            SECS
                        </Text>
                    </Box>
                </HStack>
            </Stack> */}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'red'} height={'2px'} />
                    <Box border="2px solid red" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid red'}
                            p={3}
                            width="500px"
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            ABOUT HACKWELL3.0
                        </Heading>
                    </Box>
                    <Divider bg={'red'} height={'2px'} />
                </Flex>
                <HStack p={8} justifyContent={'space-around'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Text fontSize={{ base: 'md' }} color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                            diam magna dapibus libero, vel ullamcorper neque
                            metus
                        </Text>
                        <Text fontSize={{ base: 'md' }} color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                            diam magna dapibus libero, vel ullamcorper neque
                            metus a ante. Maecenas quis neque non turpis aliquet
                            aliquam. Nunc at vehicula turpis. Donec sodales nunc
                            risus, porttitor eleifend ligula egestas vel.
                        </Text>
                        <Text fontSize={{ base: 'md' }} color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                            diam magna dapibus libero, vel ullamcorper neque
                            metus a ante. Maecenas quis neque non turpis aliquet
                            aliquam. Nunc at vehicula turpis. Donec sodales nunc
                            risus, porttitor eleifend ligula egestas vel.
                        </Text>
                    </Stack>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        boxSize="350px"
                        src={
                            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                    />
                </HStack>
            </Stack>
            {/*THEMES*/}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'red'} height={'2px'} width={'10%'} />
                    <Heading
                        fontSize={{ base: '3xl', md: '4xl' }}
                        textAlign={'center'}
                        p={3}
                    >
                        THEMES
                    </Heading>
                    <Divider bg={'red'} height={'2px'} width={'10%'} />
                </Flex>
                <SimpleGrid
                    columns={3}
                    p={10}
                    backgroundImage={
                        "url('https://helios-i.mashable.com/imagery/articles/01WbLCTxpkwdaw7NAXLeqhj/hero-image.fill.size_1248x702.v1633622861.jpg')"
                    }
                    backgroundPosition={'center'}
                    backgroundRepeat={'no-repeat'}
                    opacity={0.2}
                >
                    <Box
                        borderRight={'1px solid white'}
                        borderBottom={'1px solid white'}
                        height="300px"
                    ></Box>
                    <Box
                        borderRight={'1px solid white'}
                        borderBottom={'1px solid white'}
                        height="300px"
                    ></Box>
                    <Box
                        borderRight={'1px solid white'}
                        borderBottom={'1px solid white'}
                        height="300px"
                    ></Box>
                    <Box
                        borderRight={'1px solid white'}
                        borderBottom={'1px solid white'}
                        height="300px"
                    ></Box>
                    <Box
                        borderRight={'1px solid white'}
                        borderBottom={'1px solid white'}
                        height="300px"
                    ></Box>
                </SimpleGrid>
            </Stack>
            {/*PHASES*/}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'red'} height={'2px'} />
                    <Box border="2px solid red" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid red'}
                            p={3}
                            width="400px"
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            HACKWELL PHASES
                        </Heading>
                    </Box>
                    <Divider bg={'red'} height={'2px'} />
                </Flex>
                <Box></Box>
            </Stack>
            {/*IMPORTANT DATES*/}
            <Box
            display={'flex'}
                minH={'75vh'}
                alignItems="center"
            >
                <Flex alignItems={'center'} justify={'center'} transform="rotate(-90deg)" width={'20%'}>
                    <Divider bg={'red'} height={'2px'} />
                    <Box border="2px solid red" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid red'}
                            p={3}
                            width="400px"
                            position="relative"
                            top="7px"
                            left="7px"
                            
                        >
                            IMPORTANT DATES
                        </Heading>
                    </Box>
                    <Divider bg={'red'} height={'2px'} />
                </Flex>
                <Stack
                width={'80%'}
                    spacing={8}
                    p={10}
                    divider={
                        <StackDivider
                            borderColor={useColorModeValue(
                                'gray.100',
                                'gray.700'
                            )}
                        />
                    }
                >
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading color="red.500" px={4}>
                                22
                            </Heading>
                            <Text fontSize="2xl">APR</Text>
                        </Flex>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                        </Text>
                    </HStack>
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading color="red.500" px={4}>
                                22
                            </Heading>
                            <Text fontSize="2xl">APR</Text>
                        </Flex>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                        </Text>
                    </HStack>
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading color="red.500" px={4}>
                                22
                            </Heading>
                            <Text fontSize="2xl">APR</Text>
                        </Flex>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                        </Text>
                    </HStack>
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading color="red.500" px={4}>
                                22
                            </Heading>
                            <Text fontSize="2xl">APR</Text>
                        </Flex>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla porttitor, eros vitae congue rhoncus,
                        </Text>
                    </HStack>
                </Stack>
            </Box>
            {/*SPONSERS */}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                spacing={12}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'red'} height={'2px'} />
                    <Box border="2px solid red" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid red'}
                            p={3}
                            width="400px"
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            OUR SPONSOR PARTNER
                        </Heading>
                    </Box>
                    <Divider bg={'red'} height={'2px'} />
                </Flex>
                <Box p={8} display={'flex'} justifyContent={'center'}>
                    <Image width={'50%'} src={'../assests/images/Honeywell_logo.png'}/>
                </Box>
            </Stack>
        </>
    );
};

export default Home;
