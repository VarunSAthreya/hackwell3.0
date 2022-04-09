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
    Grid,
    GridItem,
    Link,
    SimpleGrid,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { BsTelephoneFill, BsLinkedin, BsCalendarDate } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Canvas from '../components/UI/Canvas/Canvas';

const Home: NextPage = () => {
    return (
        <>
            <Canvas />
            <Stack
                spacing={{ base: 10, md: 12, lg: 16 }}
                pos={'absolute'}
                top={{ base: '3%', md: '4%', lg: '4%' }}
                left={{ base: '8%', lg: '15%' }}
                zIndex={20}
            >
                <Stack spacing={2}>
                    <Text
                        textTransform={'uppercase'}
                        bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                        bgClip="text"
                        fontWeight={600}
                        fontSize={{ base: '1.5rem', md: '2xl' }}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        JSSATE-B PRESENTS
                    </Text>
                    <Box>
                        <Image
                            src={'../assests/images/Logo/Hackwell_logo.png'}
                            width={{ base: '300px', lg: '550px' }}
                            height={{ base: '100px', lg: '130px' }}
                        />
                    </Box>
                </Stack>
                <Stack spacing={6}>
                    <HStack
                        spacing={{ base: 4, md: 6, lg: 8 }}
                        divider={
                            <StackDivider borderColor={'whiteAlpha.500'} />
                        }
                    >
                        <Box>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                            >
                                22
                            </Heading>
                            <Text
                                color={'white'}
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                DAYS
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                            >
                                22
                            </Heading>
                            <Text
                                color={'white'}
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                HRS
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                            >
                                22
                            </Heading>
                            <Text
                                color={'white'}
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                MINS
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                            >
                                22
                            </Heading>
                            <Text
                                color={'white'}
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                SECS
                            </Text>
                        </Box>
                    </HStack>
                    <Flex justifyContent={'flex-start'}>
                        <Box
                            border="2px solid gray"
                            width={{ base: '200px', md: '300px' }}
                        >
                            <Heading
                                fontSize={{ base: '1.8xl' }}
                                textAlign={'center'}
                                border={'2px solid gray'}
                                p={3}
                                width={{ base: '200px', md: '300px' }}
                                position="relative"
                                top="7px"
                                left="7px"
                                padding="1rem"
                                transform="translateZ(-10px)"
                            >
                                SPONSORED BY{' '}
                                <Image
                                    width={{ base: '200px', md: '300px' }}
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
                id="about"
                spacing={{ base: 10, lg: 20 }}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box
                        border="2px solid #CC01FF"
                        width={{ base: '220px', lg: '500px' }}
                    >
                        <Heading
                            fontSize={{ base: '1.1rem', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
                            p={3}
                            width={{ base: '220px', lg: '500px' }}
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            ABOUT HACKWELL3.0
                        </Heading>
                    </Box>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <Stack
                    p={8}
                    spacing={{ base: 10, lg: 3 }}
                    justifyContent={'space-around'}
                    direction={{ base: 'column-reverse', lg: 'row' }}
                    alignItems={'center'}
                >
                    <Stack spacing={{ base: 5, lg: 3 }} w={'full'} maxW={'lg'}>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                            textTransform={'uppercase'}
                        >
                            hackwell 3.0 is a 48-hour Hackaton hosted by JSSATE
                            in association with honeywell.
                        </Text>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                            textTransform={'uppercase'}
                        >
                            honeywell will be driving the event and also sponsor
                            the cash prize worth INR 1.50.000 to the winner.
                        </Text>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                            textTransform={'uppercase'}
                        >
                            this event is intended to create a platform for
                            students fro self-expression and creativity to
                            foster a culture of learning, team work and
                            innovation.
                        </Text>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                            textTransform={'uppercase'}
                        >
                            Honeywell will provide mentors during the course of
                            the event,guide the teams and also judge the
                            solutions.
                        </Text>
                    </Stack>
                    <Image
                        alt={'Login Image'}
                        w={{ base: '300px', lg: '400px' }}
                        h={{ base: '125px', lg: '150px' }}
                        src={'../assests/images/Logo/Hackwell_logo.png'}
                    />
                </Stack>
            </Stack>
            {/*THEMES*/}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                id="themes"
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box
                        border="2px solid #CC01FF"
                        width={{ base: '220px', lg: '500px' }}
                    >
                        <Heading
                            fontSize={{ base: '1.1rem', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
                            p={3}
                            width={{ base: '220px', lg: '500px' }}
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            THEMES
                        </Heading>
                    </Box>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <SimpleGrid
                    columns={{ base: 2, lg: 3 }}
                    p={{ base: 0, lg: 10 }}
                    backgroundImage={'./assests/images/Main/theme.png'}
                    backgroundPosition={'center'}
                    backgroundRepeat={'no-repeat'}
                >
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Heading
                            fontSize={{ base: '1.2rem', lg: '2rem' }}
                            mt={3}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Artifical Intelligence
                        </Heading>
                        <Image
                            src={
                                '../assests/images/Themes/artificial-intelligence.png'
                            }
                            boxSize={{ base: '170px', lg: '200px' }}
                            p={6}
                            rounded={5}
                        />
                    </Box>
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Heading
                            fontSize={{ base: '1.2rem', lg: '2rem' }}
                            mt={3}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Internet of things
                        </Heading>
                        <Image
                            src={
                                '../assests/images/Themes/internet-of-things.png'
                            }
                            boxSize={{ base: '170px', lg: '200px' }}
                            p={6}
                            rounded={5}
                        />
                    </Box>
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Heading
                            mt={3}
                            fontSize={{ base: '1.2rem', lg: '2rem' }}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Machine Learning
                        </Heading>
                        <Image
                            src={'../assests/images/Themes/neural.png'}
                            boxSize={{ base: '170px', lg: '200px' }}
                            p={6}
                            rounded={5}
                        />
                    </Box>
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Heading
                            mt={3}
                            fontSize={{ base: '1.2rem', lg: '2rem' }}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Edge computing and analysis
                        </Heading>
                        <Image
                            src={'../assests/images/Themes/cloud-service.png'}
                            boxSize={{ base: '170px', lg: '200px' }}
                            p={6}
                            rounded={5}
                        />
                    </Box>
                </SimpleGrid>
            </Stack>
            {/*PHASES*/}
            <Stack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                id="phases"
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box
                        border="2px solid #CC01FF"
                        width={{ base: '220px', lg: '500px' }}
                    >
                        <Heading
                            fontSize={{ base: '1.2rem', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
                            p={3}
                            width={{ base: '220px', lg: '500px' }}
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            HACKWELL PHASES
                        </Heading>
                    </Box>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <Box p={{ base: 6, lg: 16 }} pb={4}>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            lg: 'repeat(2, 1fr)',
                        }}
                        gap={6}
                    >
                        <GridItem
                            colSpan={1}
                            rounded={10}
                            backgroundColor={'white'}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                        >
                            <Heading
                                textTransform={'uppercase'}
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                roundedTopRight={10}
                                roundedTopLeft={10}
                                color={'white'}
                                p={5}
                                textAlign={'center'}
                                fontSize={'3xl'}
                            >
                                Phase 1
                            </Heading>
                            <Stack spacing={5} p={3}>
                                <Box
                                    p={{ base: 2, lg: 4 }}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Box>
                                        <Heading
                                            mb={2}
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            textTransform={'uppercase'}
                                            fontSize={{ base: 'lg', lg: '2xl' }}
                                        >
                                            Register online
                                        </Heading>
                                        <Box display={'flex'}>
                                            <Text
                                                fontSize={{
                                                    base: 'sm',
                                                    lg: 'md',
                                                }}
                                                color={'gray.500'}
                                                lineHeight={1.6}
                                                textTransform={'uppercase'}
                                                mr={2}
                                            >
                                                register your team(1-4)
                                            </Text>
                                            <Link
                                                color={'#CC01FF'}
                                                href={'/register'}
                                                _focus={{ outline: 'none' }}
                                            >
                                                Click Here
                                            </Link>
                                        </Box>
                                    </Box>
                                    <Image
                                        src={
                                            '../assests/images/Phases/to-do-list.png'
                                        }
                                        boxSize={'50px'}
                                    />
                                </Box>
                                <Box
                                    p={{ base: 2, lg: 4 }}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Image
                                        src={
                                            '../assests/images/Phases/search.png'
                                        }
                                        boxSize={'50px'}
                                    />
                                    <Box>
                                        <Heading
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            textAlign={'right'}
                                            textTransform={'uppercase'}
                                            fontSize={{ base: 'lg', lg: '2xl' }}
                                            mb={2}
                                        >
                                            Team profile screening
                                        </Heading>
                                        <Text
                                            textAlign={'right'}
                                            fontSize={{ base: 'sm', lg: 'md' }}
                                            color={'gray.500'}
                                            lineHeight={1.6}
                                            textTransform={'uppercase'}
                                        >
                                            the submitted team profile will be
                                            screened to shortlist the teams for
                                            phase 2
                                        </Text>
                                    </Box>
                                </Box>
                                <Box
                                    p={{ base: 2, lg: 4 }}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Box>
                                        <Heading
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            mb={2}
                                            textTransform={'uppercase'}
                                            fontSize={{ base: 'lg', lg: '2xl' }}
                                        >
                                            selection confirmation
                                        </Heading>
                                        <Text
                                            fontSize={{ base: 'sm', lg: 'md' }}
                                            color={'gray.500'}
                                            lineHeight={1.6}
                                            textTransform={'uppercase'}
                                        >
                                            the shortlisted teams for phase 2
                                            will receive a conformation email.
                                        </Text>
                                    </Box>
                                    <Image
                                        ml={1}
                                        src={
                                            '../assests/images/Phases/mail.png'
                                        }
                                        boxSize={'50px'}
                                    />
                                </Box>
                            </Stack>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            rounded={10}
                            backgroundColor={'white'}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                        >
                            <Heading
                                textTransform={'uppercase'}
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                roundedTopRight={10}
                                roundedTopLeft={10}
                                color={'white'}
                                p={5}
                                textAlign={'center'}
                                fontSize={'3xl'}
                            >
                                Phase 2
                            </Heading>
                            <Stack spacing={5} p={3}>
                                <Box
                                    p={{ base: 2, lg: 4 }}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Box>
                                        <Heading
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            mb={2}
                                            textTransform={'uppercase'}
                                            fontSize={{ base: 'lg', lg: '2xl' }}
                                        >
                                            fee payment
                                        </Heading>
                                        <Text
                                            fontSize={{ base: 'sm', lg: 'md' }}
                                            color={'gray.500'}
                                            lineHeight={1.6}
                                            textTransform={'uppercase'}
                                        >
                                            shortlisted students must pay a
                                            registeration fee of inr 300.
                                        </Text>
                                    </Box>
                                    <Image
                                        src={
                                            '../assests/images/Phases/payment-method.png'
                                        }
                                        boxSize={'50px'}
                                    />
                                </Box>
                                <Box
                                    p={{ base: 2, lg: 4 }}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Image
                                        src={
                                            '../assests/images/Phases/binary-code.png'
                                        }
                                        boxSize={'50px'}
                                    />
                                    <Box>
                                        <Heading
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            mb={2}
                                            textAlign={'right'}
                                            textTransform={'uppercase'}
                                            fontSize={{ base: 'lg', lg: '2xl' }}
                                        >
                                            finally 48 - hour hackaton
                                        </Heading>
                                        <Text
                                            textAlign={'right'}
                                            fontSize={{ base: 'sm', lg: 'md' }}
                                            color={'gray.500'}
                                            lineHeight={1.6}
                                            textTransform={'uppercase'}
                                        >
                                            the shortlisted teams will be
                                            hacking on the problem statements
                                            given on the day of the event.
                                        </Text>
                                    </Box>
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
            </Stack>
            {/*IMPORTANT DATES*/}
            <Stack
                minH={{ base: '50vh' }}
                direction={{ base: 'column' }}
                my={{ base: 0, md: 10 }}
                spacing={10}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} width={'10%'} />
                    <Heading
                        fontSize={{ base: '1.5rem', md: '4xl' }}
                        textAlign={'center'}
                        p={3}
                    >
                        IMPORTANT DATES
                    </Heading>
                    <Divider bg={'#CC01FF'} height={'2px'} width={'10%'} />
                </Flex>
                <Box p={{ base: 4, md: 8, lg: 10 }}>
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                        <Stack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                        >
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'linear-gradient(#00FFDD,#CC01FF)'}
                                my={2}
                            >
                                <BsCalendarDate />
                            </Flex>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                fontSize={{ base: '1.2rem', lg: '3xl' }}
                                px={4}
                            >
                                14th - 20th
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                Online Registeration Begins
                            </Text>
                        </Stack>
                        <Stack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                        >
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'linear-gradient(#00FFDD,#CC01FF)'}
                                my={2}
                            >
                                <BsCalendarDate />
                            </Flex>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                fontSize={{ base: '1.2rem', lg: '3xl' }}
                                px={4}
                            >
                                20th - 25th
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                announcement of shortlisted Teams
                            </Text>
                        </Stack>
                        <Stack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                        >
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'linear-gradient(#00FFDD,#CC01FF)'}
                                my={2}
                            >
                                <BsCalendarDate />
                            </Flex>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                fontSize={{ base: '1.2rem', lg: '3xl' }}
                                px={4}
                            >
                                28th
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                Hackaton Begins (Online Event)
                            </Text>
                        </Stack>
                        <Stack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                        >
                            <Flex
                                w={16}
                                h={16}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg={'linear-gradient(#00FFDD,#CC01FF)'}
                                my={2}
                            >
                                <BsCalendarDate />
                            </Flex>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                fontSize={{ base: '1.2rem', lg: '3xl' }}
                                px={4}
                            >
                                29th
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                Hackaton Ends
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Stack>
            {/*SPONSERS */}
            <Stack
                minH={{ base: '40vh', lg: '75vh' }}
                direction={{ base: 'column' }}
                my={20}
                spacing={12}
                id="sponsor"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box
                        border="2px solid #CC01FF"
                        width={{ base: '220px', lg: '500px' }}
                    >
                        <Heading
                            fontSize={{ base: '1.2rem', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
                            p={3}
                            width={{ base: '220px', lg: '500px' }}
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            OUR SPONSOR PARTNER
                        </Heading>
                    </Box>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <Stack
                    minH={'40vh'}
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align={'center'}
                >
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading
                                fontSize={{ base: '3xl' }}
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                ABOUT SPONSERS
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                lineHeight={1.8}
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                Honeywell International Inc. is an American
                                publicly traded, multinational conglomerate
                                corporation headquartered in Charlotte, North
                                Carolina. It primarily operates in four areas of
                                business: aerospace, building technologies,
                                performance materials and technologies, and
                                safety and productivity solutions.
                            </Text>
                            <Box
                                alignItems={{ base: 'center' }}
                                display={'flex'}
                                justifyContent={{
                                    base: 'center',
                                    md: 'flex-start',
                                }}
                            >
                                <Link
                                    href={'https://www.honeywell.com/us/en'}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        rightIcon={<ArrowForwardIcon />}
                                        color="black"
                                        bg="white"
                                        _hover={{
                                            bg: '#CC01FF',
                                            color: 'white',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        _active={{ bg: '#CC01FF' }}
                                    >
                                        LEARN MORE ABOUT US
                                    </Button>
                                </Link>
                            </Box>
                        </Stack>
                    </Flex>
                    <Flex flex={1} justify={'center'}>
                        <Image
                            width={{ base: '90%', lg: '75%' }}
                            p={4}
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
                id="contact us"
                spacing={12}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box
                        border="2px solid #CC01FF"
                        width={{ base: '200px', lg: '500px' }}
                    >
                        <Heading
                            fontSize={{ base: '2xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
                            p={3}
                            width={{ base: '200px', lg: '500px' }}
                            position="relative"
                            top="7px"
                            left="7px"
                            padding="1rem"
                            transform="translateZ(-10px)"
                        >
                            CONTACT US
                        </Heading>
                    </Box>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <Stack
                    spacing={{ base: 5, lg: 12 }}
                    justifyContent={'space-around'}
                    direction={{ base: 'column', lg: 'row' }}
                >
                    <Box
                        width={{ base: '100%', lg: '45%' }}
                        padding={{ base: 5, lg: 16 }}
                        ml={{ base: 0, lg: 14 }}
                    >
                        <AspectRatio ratio={14 / 12}>
                            <iframe
                                style={{ borderRadius: '15px' }}
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=JSSATE-B%20Campus,%20Dr.Vishnuvardhan%20Rd%20Uttarahalli-Kengeri%20Main%20Road,%20JSS%20Campus%20Rd,%20Srinivaspura,%20Bengaluru,%20Karnataka%20560060+(JSSATE-B)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            />
                        </AspectRatio>
                    </Box>
                    <Box
                        borderRadius="lg"
                        mr={{ base: 5 }}
                        p={{ base: 5, lg: 16 }}
                        width={{ base: '100%', lg: '55%' }}
                    >
                        <Stack spacing={6} maxW={'lg'} align="flex-start">
                            <Heading
                                fontSize={{ base: '2xl' }}
                                textAlign="left"
                            >
                                JSS ACADEMY OF TECHNICAL EDUCATION BENGALURU
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                lineHeight={1.6}
                                textAlign="left"
                            >
                                JSS Academy of Technical Education (JSSATE) was
                                established in the year 1997 at Bengaluru and is
                                under the umbrella of JSS Mahavidyapeetha,
                                Mysuru. JSSATE is the result of the vision of
                                our President, His Holiness Jagadguru Sri
                                Shivarathri Deshikendra Mahaswamiji to
                                proactively participate in establishing a world
                                class Institution for Technical Education. The
                                Campus is located on a sprawling 21.17 acres
                                land surrounded by lush green plantation on the
                                South-Western edge of Bangalore City. The
                                institution is affiliated to Visvesvaraya
                                Technological University (VTU), Belgaum, India.
                            </Text>
                            <Stack direction={'row'} spacing={5}>
                                <Link
                                    href="mailto:info@jssateb.ac.in"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: '#CC01FF',
                                            color: 'white',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        _active={{ bg: '#CC01FF' }}
                                        isRound
                                    />
                                </Link>

                                <Link
                                    href="tel:+918028611702"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="2xl"
                                        icon={<BsTelephoneFill />}
                                        _hover={{
                                            bg: '#CC01FF',
                                            color: 'white',
                                        }}
                                        isRound
                                    />
                                </Link>
                                <Link href="https://www.linkedin.com/in/jssateb-bengaluru-3a432520a/?originalSubdomain=in">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: '#CC01FF',
                                            color: 'white',
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
};

export default Home;
