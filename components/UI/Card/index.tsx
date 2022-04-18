import {
    Box,
    Center,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Card({ title, number }) {
    return (
        <Center py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
            >
                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading
                            fontSize={'2xl'}
                            fontWeight={500}
                            fontFamily={'body'}
                        >
                            {title}
                        </Heading>
                        <Text color={'gray.500'}>{number}</Text>
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
