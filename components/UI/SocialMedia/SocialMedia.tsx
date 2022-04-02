import { FC } from 'react';
import { Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { ISocialMedia } from '../../../@types';

type Props = {
    data: ISocialMedia;
}

const SocialMedia: FC<Props> = ({ data }: Props) => {
    const { icon, url, label } = data;
    return (
        <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            p={2}
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            _hover={{ bg: useColorModeValue('black', 'white'), color: useColorModeValue('white', 'black') }}
            _focus={{ outline: 'none' }}

        >
            <Icon w={10} h={6} mt={1} alignItems={'center'} as={icon} />
        </Link>
    );
};

export default SocialMedia;