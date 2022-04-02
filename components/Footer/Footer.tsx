import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube } from 'react-icons/ai'
import SocialMedia from '../UI/SocialMedia/SocialMedia';
import { ISocialMedia } from '../../@types';

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
        <Box
            p={18}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Flex
                align={'center'}
                _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    flexGrow: 1,
                    ml: 8,
                }}>
                <Text>Logo</Text>
            </Flex>
            <Container
                as={Stack}
                maxW={'8xl'}
                py={4}
                my={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction={'row'}>
                    <Text>© 2022 HackWell 3.0</Text>
                    <Text>All rights reserved</Text>
                </Stack>
                <Stack direction={'row'} spacing={10}>
                    {Social.map((data, index) => {
                        return (
                            <SocialMedia data={data} key={index} />
                        )
                    })}
                </Stack>
                <Stack align={'flex-start'}>
                    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                        Designed And Developed By:
                    </Text>
                    <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                        Varun S Athreya
                    </Text>
                    <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                        Sandeep M
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;