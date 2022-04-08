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
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { BsTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Canvas from '../components/UI/Canvas/Canvas';

const Home: NextPage = () => {
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
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                            >
                                22
                            </Heading>
                            <Text color={'white'} fontSize={'lg'}>
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
                            <Text color={'white'} fontSize={'lg'}>
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
                            <Text color={'white'} fontSize={'lg'}>
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
                spacing={20}
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box border="2px solid #CC01FF" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <HStack p={8} justifyContent={'space-around'}>
                    <Stack spacing={3} w={'full'} maxW={'lg'}>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
                            lineHeight={1.6}
                            textTransform={'uppercase'}
                        >
                            hackwell 3.0 is a 48-hour Hackaton hosted by JSSATE
                            in association with honeywell.
                        </Text>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
                            lineHeight={1.6}
                            textTransform={'uppercase'}
                        >
                            honeywell will be driving the event and also sponsor
                            the cash prize worth INR 1.50.000 to the winner.
                        </Text>
                        <Text
                            fontSize={{ base: 'md' }}
                            color={'gray.500'}
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
                        w={'400px'}
                        src={'../assests/images/Logo/Hackwell_logo.png'}
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
                    <Divider bg={'#CC01FF'} height={'2px'} width={'10%'} />
                    <Heading
                        fontSize={{ base: '3xl', md: '4xl' }}
                        textAlign={'center'}
                        p={3}
                    >
                        THEMES
                    </Heading>
                    <Divider bg={'#CC01FF'} height={'2px'} width={'10%'} />
                </Flex>
                <SimpleGrid
                    columns={3}
                    p={10}
                    backgroundImage={'./assests/images/Main/theme.png'}
                    backgroundPosition={'center'}
                    backgroundRepeat={'no-repeat'}
                >
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="300px"
                    >
                        <Heading
                            fontSize={'2rem'}
                            mt={3}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Artifical Intelligence
                        </Heading>
                    </Box>
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="300px"
                    >
                        <Heading
                            fontSize={'2rem'}
                            mt={3}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Internet of things
                        </Heading>
                    </Box>
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="300px"
                    >
                        <Heading
                            mt={3}
                            fontSize={'2rem'}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Machine Learning
                        </Heading>
                    </Box>
                    <Box
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="300px"
                    >
                        <Heading
                            mt={3}
                            fontSize={'2rem'}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Edge computing and analysis
                        </Heading>
                    </Box>
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box border="2px solid #CC01FF" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box border="2px solid #CC01FF" width="400px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
                            p={3}
                            width="400px"
                            position="relative"
                            top="7px"
                            left="7px"
                        >
                            IMPORTANT DATES
                        </Heading>
                    </Box>
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <Stack
                    width={'65%'}
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
                        justifyContent={'space-between'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                px={4}
                            >
                                14th - 20th
                            </Heading>
                            <Text fontSize="2xl" fontWeight="bold">
                                APR
                            </Text>
                        </Flex>
                        <Text color={'gray.500'} textTransform="uppercase">
                            Online Registration
                        </Text>
                    </HStack>
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                px={4}
                            >
                                20th - 25th
                            </Heading>
                            <Text fontSize="2xl" fontWeight="bold">
                                APR
                            </Text>
                        </Flex>
                        <Text color={'gray.500'} textTransform="uppercase">
                            announcement of shortlisted Teams
                        </Text>
                    </HStack>
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                px={4}
                            >
                                28th
                            </Heading>
                            <Text fontSize="2xl" fontWeight="bold">
                                APR
                            </Text>
                        </Flex>
                        <Text color={'gray.500'} textTransform="uppercase">
                            Hackaton Begins (Onlive Event)
                        </Text>
                    </HStack>
                    <HStack
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Flex align={'flex-end'}>
                            <Heading
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
                                px={4}
                            >
                                29th
                            </Heading>
                            <Text fontSize="2xl" fontWeight="bold">
                                APR
                            </Text>
                        </Flex>
                        <Text color={'gray.500'} textTransform="uppercase">
                            Hackaton Ends
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box border="2px solid #CC01FF" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
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
                                Honeywell International Inc. is an American
                                publicly traded, multinational conglomerate
                                corporation headquartered in Charlotte, North
                                Carolina. It primarily operates in four areas of
                                business: aerospace, building technologies,
                                performance materials and technologies, and
                                safety and productivity solutions.
                            </Text>
                            <Box>
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
                    <Box border="2px solid #CC01FF" width="500px">
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            textAlign={'center'}
                            border={'2px solid #CC01FF'}
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
                    <Divider bg={'#CC01FF'} height={'2px'} />
                </Flex>
                <HStack spacing={12}>
                    <Box width={'45%'} padding={16} ml={14}>
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
                        p={{ base: 16 }}
                        width={'55%'}
                    >
                        <Stack spacing={6} maxW={'lg'} align="flex-start">
                            <Heading
                                fontSize={{ base: '2xl' }}
                                textAlign="left"
                                bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                                bgClip="text"
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
                </HStack>
            </Stack>
        </>
    );
};

export default Home;
