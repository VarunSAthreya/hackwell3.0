import {
    Box,
    Container,
    Stack,
    Text,
    Icon,
    Flex,
    useColorModeValue,
    HStack,
    Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube } from 'react-icons/ai';
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import SocialMedia from '../UI/SocialMedia/SocialMedia';
import { ISocialMedia } from '../../@types';
import Logo from '../UI/Logo/Logo';

const Footer: FC = () => {

    const Social: ISocialMedia[] = [
        {
            icon: AiOutlineTwitter,
            label: 'Twitter',
            url: '#'
        },
        {
            icon: AiFillYoutube,
            label: 'Youtube',
            url: '#'
        },
        {
            icon: AiOutlineInstagram,
            label: 'Instagram',
            url: '#'
        },
        {
            icon: AiFillFacebook,
            label: 'Facebook',
            url: '#'
        }
    ]

    return (
        <Box p={18} color={useColorModeValue('gray.700', 'gray.200')}>
            <Flex
                align={'center'}
                _before={{
                    content: '""',
                    borderBottom: '2px solid #CC01FF',
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '2px solid #CC01FF',
                    flexGrow: 1,
                    ml: 8,
                }}
            >
                <Logo />
            </Flex>
            <Container
                as={Stack}
                maxW={'8xl'}
                py={4}
                my={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 8, lg: 4 }}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Stack direction={'row'}>
                    <Text>© 2022 HackWell 3.0</Text>
                    <Text>All rights reserved</Text>
                </Stack>
                <Stack direction={'row'} spacing={10}>
                    {Social.map((data, index) => {
                        return <SocialMedia data={data} key={index} />;
                    })}
                </Stack>
                <Stack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
                    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                        Designed And Developed By:
                    </Text>
                    <HStack spacing={4}>
                        <Text fontWeight={'500'} fontSize={'lg'}>
                            Varun S Athreya
                        </Text>
                        <Link
                            href={'https://github.com/VarunSAthreya'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsGithub}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/varunsathreya/'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsLinkedin}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                    </HStack>
                    <HStack spacing={4}>
                        <Text fontWeight={'500'} fontSize={'lg'}>
                            Sandeep M
                        </Text>
                        <Link
                            href={'https://github.com/Sandeep-M23'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsGithub}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/sandeep-m23/'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsLinkedin}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;