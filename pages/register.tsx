import React from 'react';
import { NextPage } from 'next';
import {
    Flex,
    Box,
    Heading,
    Button,
    VStack,
    Stack,
    Divider,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const Register: NextPage = () => {
    return (
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
                        REGISTER
                    </Heading>
                </Box>
                <Divider bg={'red'} height={'2px'} />
            </Flex>
            <Flex>
                <Box
                    bg="white"
                    color="black"
                    borderRadius="lg"
                    w={'100%'}
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <VStack spacing={5}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Team Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement pointerEvents="none">
                                    <BsPerson color="gray.800" />
                                </InputLeftElement>
                                <Input
                                    type="text"
                                    size="md"
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    placeholder="Team Name"
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="name" float="right">
                            <Button
                                variant="solid"
                                bg="red"
                                color="white"
                                _hover={{}}
                            >
                                Register
                            </Button>
                        </FormControl>
                    </VStack>
                </Box>
            </Flex>
        </Stack>
    );
};

export default Register;
