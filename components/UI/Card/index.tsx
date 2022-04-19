import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';

export default function Card({ title, number }) {
    return (
        <Center py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={'white'}
                color="black"
                boxShadow={'#CC01FF 0px 3px 9px'}
                rounded={'md'}
                overflow={'hidden'}
            >
                <Box p={6}>
                    <Stack spacing={2} align={'center'}>
                        <Heading
                            fontSize={'2xl'}
                            fontWeight={500}
                            fontFamily={'body'}
                        >
                            {title}
                        </Heading>
                        <Text color={'gray.800'}>{number}</Text>
                    </Stack>

                    {/* <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                    </Stack> */}
                </Box>
            </Box>
        </Center>
    );
}
