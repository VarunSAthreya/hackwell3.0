import {
  Box,
  Container,
  Divider,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Canvas from '../components/UI/Canvas/Canvas';


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <>
        <Canvas />
        <Stack spacing={32} pos={'fixed'} top={'30%'} left={'15%'}>
          <Stack spacing={3}>
            <Text
              textTransform={'uppercase'}
              color={'red.500'}
              fontWeight={600}
              fontSize={'sm'}
              bg={'white'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              JSSATE-B PRESENTS
            </Text>
            <Heading fontSize={'6xl'} letterSpacing={4}>HACKWELL 3.0</Heading>
            <Text color={'gray.500'} fontSize={'lg'} letterSpacing={3}>
              Every Line Matters
            </Text>
          </Stack>
          <HStack
            spacing={8}
            divider={
              <StackDivider
                borderColor={'whiteAlpha.500'}
              />
            }>
            <Box>
              <Heading>22</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>DAYS</Text>
            </Box>
            <Box>
              <Heading>22</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>HRS</Text>
            </Box>
            <Box>
              <Heading>22</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>MINS</Text>
            </Box>
            <Box>
              <Heading>22</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>SECS</Text>
            </Box>
          </HStack>
        </Stack>
      </>
    </React.Fragment>
  )
};

export default Home;

