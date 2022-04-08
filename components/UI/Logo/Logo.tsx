import { FC } from 'react';
import { Box, Image, Link } from '@chakra-ui/react';

const Logo: FC = () => {
    return (
        <Box>
            <Link href="/" _focus={{ outline: 'none' }}>
                <Image
                    src={'/../assests/images/Logo/Hackwell_logo.png'}
                    alt="Logo"
                    maxW={'150px'}
                    h={'auto'}
                    _focus={{ outline: 'none' }}
                />
            </Link>
        </Box>
    );
};

export default Logo;
