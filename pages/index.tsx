import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    AspectRatio,
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Link,
    SimpleGrid,
    Stack,
    StackDivider,
    Text,
    Tooltip,
    useClipboard,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Canvas from '../components/UI/Canvas/Canvas';

const Home: NextPage = () => {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
    return (
        <>
            <Canvas />
            <Stack
                spacing={16}
                pos={'absolute'}
                top={{ base: '3%', md: '4%', lg: '4%' }}
                left={'15%'}
                zIndex={20}
            >
                <Stack spacing={2}>
                    <Text
                        textTransform={'uppercase'}
                        bgGradient={'linear(to-l, #00FFDD,#CC01FF)'} 
                        bgClip="text"
                        fontWeight={600}
                        fontSize={'2xl'}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        JSSATE-B PRESENTS
                    </Text>
                    <Box>
                        <Image
                            src={'../assests/images/Logo/Hackwell_logo.png'}
                            width={'550px'}
                            height={'130px'}
                        />
                    </Box>
                </Stack>
                <Stack spacing={6}>
                    <HStack
                        spacing={8}
                        divider={
                            <StackDivider borderColor={'whiteAlpha.500'} />
                        }
                    >
                        <Box>
                            <Heading bgGradient={'linear(to-l, #00FFDD,#CC01FF)'} bgClip="text">22</Heading>
                            <Text color={'white'} fontSize={'lg'}>
                                DAYS
                            </Text>
                        </Box>
                        <Box>
                            <Heading bgGradient={'linear(to-l, #00FFDD,#CC01FF)'} bgClip="text">22</Heading>
                            <Text color={'white'} fontSize={'lg'}>
                                HRS
                            </Text>
                        </Box>
                        <Box>
                            <Heading bgGradient={'linear(to-l, #00FFDD,#CC01FF)'} bgClip="text">22</Heading>
                            <Text color={'white'} fontSize={'lg'}>
                                MINS
                            </Text>
                        </Box>
                        <Box>
                            <Heading bgGradient={'linear(to-l, #00FFDD,#CC01FF)'} bgClip="text">22</Heading>
                            <Text color={'white'} fontSize={'lg'}>
                                SECS
                            </Text>
                        </Box>
                    </HStack>
                    <Flex justifyContent={'flex-start'}>
                        <Box border="2px solid gray" width="300px">
                            <Heading
                                fontSize={{ base: '1.8xl' }}
                                textAlign={'center'}
                                border={'2px solid gray'}
                                p={3}
                                width="300px"
                                position="relative"
                                top="7px"
                                left="7px"
                                padding="1rem"
                                transform="translateZ(-10px)"
                            >
                                SPONSORED BY{' '}
                                <Image
                                    width={'300px'}
                                    src={
                                        '../assests/images/Logo/Honeywell_logo.png'
                                    }
                                />
                            </Heading>
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
            {/*ABOUT US*/}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={"#7928CA"} height={'2px'} />
                    <Box border="2px solid #7928CA" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #7928CA'}
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
                    <Divider bg={'#7928CA'} height={'2px'} />
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
                    <Divider bg={'#7928CA'} height={'2px'} width={'10%'} />
                    <Heading
                        fontSize={{ base: '3xl', md: '4xl' }}
                        textAlign={'center'}
                        p={3}
                    >
                        THEMES
                    </Heading>
                    <Divider bg={'#7928CA'} height={'2px'} width={'10%'} />
                </Flex>
                <SimpleGrid
                    columns={3}
                    p={10}
                    backgroundImage={'./assests/images/Main/theme.png'}
                    backgroundPosition={'center'}
                    backgroundRepeat={'no-repeat'}
                >
                    <Box
                        borderRight={'1px solid white'}
                        borderBottom={'1px solid white'}
                        height="300px"
                    >
                    </Box>
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
                    <Divider bg={'#7928CA'} height={'2px'} />
                    <Box border="2px solid #7928CA" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #7928CA'}
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
                    <Divider bg={'#7928CA'} height={'2px'} />
                </Flex>
                <Box></Box>
            </Stack>
            {/*IMPORTANT DATES*/}
            <Box display={'flex'} minH={'85vh'} alignItems="center">
                <Flex
                    alignItems={'center'}
                    justify={'center'}
                    transform="rotate(-90deg)"
                    width={'25%'}
                >
                    <Divider bg={'#7928CA'} height={'2px'} />
                    <Box border="2px solid #7928CA" width="400px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #7928CA'}
                            p={3}
                            width="400px"
                            position="relative"
                            top="7px"
                            left="7px"
                        >
                            IMPORTANT DATES
                        </Heading>
                    </Box>
                    <Divider bg={'#7928CA'} height={'2px'} />
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
                            <Heading color="#7928CA" px={4}>
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
                            <Heading color="#7928CA" px={4}>
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
                            <Heading color="#7928CA" px={4}>
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
                            <Heading color="#7928CA" px={4}>
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
                my={20}
                spacing={12}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#7928CA'} height={'2px'} />
                    <Box border="2px solid #7928CA" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #7928CA'}
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
                    <Divider bg={'#7928CA'} height={'2px'} />
                </Flex>
                <Stack
                    minH={'40vh'}
                    direction={{ base: 'column', md: 'row' }}
                    align={'center'}
                >
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl' }}>
                                ABOUT SPONSERS
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                lineHeight={1.8}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla porttitor, eros vitae
                                congue rhoncus, diam magna dapibus libero, vel
                                ullamcorper neque metus a ante. Maecenas quis
                                neque non turpis aliquet aliquam. Nunc at
                                vehicula turpis. Donec sodales nunc risus,
                                porttitor eleifend ligula egestas vel. Maecenas
                                quis neque non turpis aliquet aliquam. Nunc at
                                vehicula turpis. Donec sodales nunc risus,
                                porttitor eleifend ligula egestas vel.
                            </Text>
                            <Box>
                                <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    color="black"
                                    bg="white"
                                    _hover={{
                                        bg: 'white',
                                        color: '#7928CA',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    _active={{ bg: 'white' }}
                                >
                                    LEARN MORE ABOUT US
                                </Button>
                            </Box>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            width={'75%'}
                            height={'50%'}
                            src={'../assests/images/Logo/Honeywell_logo.png'}
                        />
                    </Flex>
                </Stack>
            </Stack>
            {/*CONTACT US*/}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                spacing={12}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#7928CA'} height={'2px'} />
                    <Box border="2px solid #7928CA" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #7928CA'}
                            p={3}
                            width="400px"
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            CONTACT US
                        </Heading>
                    </Box>
                    <Divider bg={'#7928CA'} height={'2px'} />
                </Flex>
                <HStack spacing={12}>
                    <Box width={'45%'} padding={16} ml={14}>
                        <AspectRatio ratio={14 / 12}>
                            <iframe
                                style={{ borderRadius: '15px' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                            />
                        </AspectRatio>
                    </Box>
                    <Box
                        borderRadius="lg"
                        mr={{ base: 5 }}
                        p={{ base: 16 }}
                        width={'55%'}
                    >
                        <Stack spacing={6} maxW={'lg'} align="flex-end">
                            <Heading fontSize={{ base: '2xl' }} textAlign="end">
                                JSS ACADEMY OF TECHNICAL EDUCATION BENGALURU
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                textAlign="end"
                                lineHeight={1.8}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla porttitor, eros vitae
                                congue rhoncus, diam magna dapibus libero, vel
                                ullamcorper neque metus a ante. Maecenas quis
                                neque non turpis aliquet aliquam. Nunc at
                                vehicula turpis. Donec sodales nunc risus,
                                porttitor eleifend ligula egestas vel. Maecenas
                                quis neque non turpis aliquet aliquam. Nunc at
                                vehicula turpis. Donec sodales nunc risus,
                                porttitor eleifend ligula egestas vel.
                            </Text>
                            <Stack direction={'row'} spacing={5}>
                                <Tooltip
                                    label={
                                        hasCopied
                                            ? 'Email Copied!'
                                            : 'Copy Email'
                                    }
                                    closeOnClick={false}
                                    hasArrow
                                >
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue(
                                                'white',
                                                'gray.700'
                                            ),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Link href="#">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue(
                                                'white',
                                                'gray.700'
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="#">
                                    <IconButton
                                        aria-label="twitter"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsTwitter size="28px" />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue(
                                                'white',
                                                'gray.700'
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="#">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: useColorModeValue(
                                                'white',
                                                'gray.700'
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </HStack>
            </Stack>
        </>
    );
};

export default Home;
