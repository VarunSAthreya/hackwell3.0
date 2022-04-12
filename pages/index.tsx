import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    AspectRatio,
    AspectRatioProps,
    Box,
    BoxProps,
    Button,
    Divider,
    DividerProps,
    Flex,
    Grid,
    GridItem,
    GridItemProps,
    Heading,
    IconButton,
    Image,
    ImageProps,
    Link,
    SimpleGrid,
    SimpleGridProps,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import React from 'react';
import { BsCalendarDate, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Main from '../layout/Main';
import {
    aspectRatio,
    box,
    divider,
    gridItem,
    image,
    innerStack,
    secondaryDivider,
    secondaryGridItem,
    secondaryImage,
    secondaryStack,
    simpleGrid,
    stack,
    ternaryStack,
} from '../util/variants';

const Home: NextPage = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionImage = motion<ImageProps>(Image);
    const MotionBox = motion<BoxProps>(Box);
    const MotionAspectRatio = motion<AspectRatioProps>(AspectRatio);
    const MotionGridItem = motion<GridItemProps>(GridItem);
    const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);

    return (
        <>
            <Main />
            {/*ABOUT US*/}
            <MotionStack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                id="about"
                spacing={{ base: 10, lg: 20 }}
                variants={stack}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
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
                            ABOUT HACKWELL 3.0
                        </Heading>
                    </Box>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
                </Flex>
                <Stack
                    p={8}
                    spacing={{ base: 10, lg: 3 }}
                    justifyContent={'space-around'}
                    direction={{ base: 'column-reverse', lg: 'row' }}
                    alignItems={'center'}
                >
                    <MotionStack
                        spacing={{ base: 5, lg: 3 }}
                        w={'full'}
                        maxW={'lg'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={innerStack}
                    >
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.200'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                        >
                            Hackwell 3.0 is a 48-hour Hackathon hosted by JSSATEB
                            in association with Honeywell.
                        </Text>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.200'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                        >
                            Honeywell will be driving the event, provide mentors during the course of
                            the event, guide the teams, judge the
                            solutions and also sponsor
                            the cash prize worth INR 1,50,000 to the winner.
                        </Text>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.200'}
                            textAlign={{ base: 'center', lg: 'left' }}
                            lineHeight={1.6}
                        >
                            This event is intended to create a platform for
                            student's self-expression and creativity to
                            foster a culture of learning, team work and
                            innovation.
                        </Text>
                       
                    </MotionStack>
                    <MotionImage
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={image}
                        alt={'hackwell'}
                        rounded={8}
                        w={{ base: '300px', lg: '600px' }}
                        h={{ base: '200px', lg: '400px' }}
                        src={'../assests/images/Main/about.jpg'}
                    />
                </Stack>
            </MotionStack>
            {/*THEMES*/}
            <MotionStack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                id="themes"
                spacing={10}
                variants={stack}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
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
                            DOMAINS
                        </Heading>
                    </Box>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
                </Flex>
                <MotionSimpleGrid
                    columns={{ base: 2, lg: 3 }}
                    p={{ base: 0, lg: 10 }}
                    backgroundImage={'./assests/images/Main/theme.png'}
                    backgroundPosition={'center'}
                    backgroundRepeat={'no-repeat'}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={simpleGrid}
                >
                    <MotionBox
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={box}
                    >
                        <Heading
                            fontSize={{ base: '1.2rem', lg: '2rem' }}
                            mt={3}
                            textAlign={'center'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            bgClip="text"
                            textTransform={'uppercase'}
                        >
                            Artificial Intelligence
                        </Heading>
                        <Image
                            src={
                                '../assests/images/Themes/artificial-intelligence.png'
                            }
                            boxSize={{ base: '170px', lg: '200px' }}
                            p={6}
                            rounded={5}
                        />
                    </MotionBox>
                    <MotionBox
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={box}
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
                    </MotionBox>
                    <MotionBox
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={box}
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
                    </MotionBox>
                    <MotionBox
                        borderRight={'1px solid #2d3748'}
                        borderBottom={'1px solid #2d3748'}
                        height="320px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                        alignItems="center"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={box}
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
                    </MotionBox>
                </MotionSimpleGrid>
            </MotionStack>
            {/*PHASES*/}
            <MotionStack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                id="phases"
                spacing={10}
                variants={stack}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
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
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
                </Flex>
                <Box p={{ base: 6, lg: 16 }} pb={4}>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            lg: 'repeat(2, 1fr)',
                        }}
                        gap={6}
                    >
                        <MotionGridItem
                            colSpan={1}
                            rounded={10}
                            backgroundColor={'white'}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={gridItem}
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
                                                color={'gray.700'}
                                                lineHeight={1.6}
                                                mr={2}
                                            >
                                                Register your team(1-4)
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
                                            color={'gray.700'}
                                            lineHeight={1.6}
                                        >
                                            The submitted team profile will be
                                            screened to shortlist the teams for
                                            phase 2.
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
                                            color={'gray.700'}
                                            lineHeight={1.6}
                                        >
                                            The shortlisted teams for phase 2
                                            will receive a confirmation email.
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
                        </MotionGridItem>
                        <MotionGridItem
                            colSpan={1}
                            rounded={10}
                            backgroundColor={'white'}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={secondaryGridItem}
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
                                            Fee Payment
                                        </Heading>
                                        <Text
                                            fontSize={{ base: 'sm', lg: 'md' }}
                                            color={'gray.700'}
                                            lineHeight={1.6}
                                        >
                                            Shortlisted students must pay a
                                            registration fee of INR 250.
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
                                            Finally 48 - hour hackathon
                                        </Heading>
                                        <Text
                                            textAlign={'right'}
                                            fontSize={{ base: 'sm', lg: 'md' }}
                                            color={'gray.700'}
                                            lineHeight={1.6}
                                        >
                                            The shortlisted teams will be
                                            hacking on the problem statements
                                            given on the day of the event.
                                        </Text>
                                    </Box>
                                </Box>
                            </Stack>
                        </MotionGridItem>
                    </Grid>
                </Box>
            </MotionStack>
            {/*IMPORTANT DATES*/}
            <MotionStack
                minH={{ base: '50vh' }}
                direction={{ base: 'column' }}
                my={{ base: 0, md: 10 }}
                spacing={10}
                variants={stack}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        width={'10%'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={secondaryDivider}
                    />
                    <Heading
                        fontSize={{ base: '1.5rem', md: '4xl' }}
                        textAlign={'center'}
                        p={3}
                    >
                        IMPORTANT DATES
                    </Heading>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        width={'10%'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={secondaryDivider}
                    />
                </Flex>
                <Box p={{ base: 4, md: 8, lg: 10 }}>
                    <MotionSimpleGrid
                        columns={{ base: 2, md: 4 }}
                        spacing={8}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={simpleGrid}
                    >
                        <MotionStack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={ternaryStack}
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
                                12th - 21st
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                Online Registration Begins
                            </Text>
                        </MotionStack>
                        <MotionStack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={ternaryStack}
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
                                22nd - 25th
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                Announcement of Shortlisted Teams
                            </Text>
                        </MotionStack>
                        <MotionStack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={ternaryStack}
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
                                27th
                            </Heading>
                            <Text
                                color={'gray.500'}
                                textTransform="uppercase"
                                textAlign={'center'}
                            >
                                Hackathon Begins (Online Event)
                            </Text>
                        </MotionStack>
                        <MotionStack
                            align={'center'}
                            p={{ base: 4 }}
                            borderRadius={5}
                            bg={'white'}
                            spacing={4}
                            boxShadow={'#CC01FF 0px 5px 15px'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={ternaryStack}
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
                                Hackathon Ends
                            </Text>
                        </MotionStack>
                    </MotionSimpleGrid>
                </Box>
            </MotionStack>
            {/*SPONSORS */}
            <MotionStack
                minH={{ base: '40vh', lg: '75vh' }}
                direction={{ base: 'column' }}
                my={20}
                spacing={12}
                id="sponsor"
                variants={stack}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
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
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
                </Flex>
                <Stack
                    minH={'40vh'}
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align={'center'}
                >
                    <Flex p={6} flex={1} align={'center'} justify={'center'}>
                        <MotionStack
                            spacing={6}
                            w={'full'}
                            maxW={'lg'}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={innerStack}
                        >
                            <Heading
                                fontSize={{ base: '3xl' }}
                                textAlign={{ base: 'center', lg: 'left' }}
                            >
                                ABOUT SPONSOR
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.200'}
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
                        </MotionStack>
                    </Flex>
                    <Flex flex={1} justify={'center'}>
                        <MotionImage
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={secondaryImage}
                            width={{ base: '90%', lg: '75%' }}
                            p={4}
                            height={'50%'}
                            src={'../assests/images/Logo/Honeywell_logo.png'}
                        />
                    </Flex>
                </Stack>
            </MotionStack>
            {/*CONTACT US*/}
            <MotionStack
                minH={'75vh'}
                direction={{ base: 'column' }}
                my={10}
                id="contact us"
                spacing={12}
                variants={stack}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
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
                    <MotionDivider
                        bg={'#CC01FF'}
                        height={'2px'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={divider}
                    />
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
                        <MotionAspectRatio
                            ratio={14 / 12}
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={aspectRatio}
                        >
                            <iframe
                                style={{ borderRadius: '15px' }}
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=JSSATE-B%20Campus,%20Dr.Vishnuvardhan%20Rd%20Uttarahalli-Kengeri%20Main%20Road,%20JSS%20Campus%20Rd,%20Srinivaspura,%20Bengaluru,%20Karnataka%20560060+(JSSATE-B)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            />
                        </MotionAspectRatio>
                    </Box>
                    <Box
                        borderRadius="lg"
                        mr={{ base: 5 }}
                        p={{ base: 5, lg: 16 }}
                        width={{ base: '100%', lg: '55%' }}
                    >
                        <MotionStack
                            spacing={6}
                            maxW={'lg'}
                            align="flex-start"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={secondaryStack}
                        >
                            <Heading
                                fontSize={{ base: '2xl' }}
                                textAlign="left"
                            >
                                JSS ACADEMY OF TECHNICAL EDUCATION BENGALURU
                            </Heading>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.200'}
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
                        </MotionStack>
                    </Box>
                </Stack>
            </MotionStack>
        </>
    );
};

export default Home;
