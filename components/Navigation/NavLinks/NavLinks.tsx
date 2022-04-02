import { FC, ReactNode } from 'react';
import { Link, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';


const fill = keyframes`
0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: #333;
  }
`

const NavLink: FC = ({ children }: { children: ReactNode }) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const animation = prefersReducedMotion ? undefined : `${fill} 1s forwards`
    return (
        <Link
            px={2}
            py={1}
            _hover={{
                textDecoration: 'none',
                color: '#fff',
                zIndex: 1
            }}
            _focus={{ outline: 'none' }}
            sx={{
                position: "relative",
                letterSpacing: "2px",
                padding: "12px",
                transition: 'all',
                ":after": {
                    content: '"."',
                    textAlign: 'left',
                    margin: 'auto',
                    opacity: 0,
                    rounded: 4,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '0%',
                    color: 'transparent',
                    height: "2px",
                    background: "#aaa",
                },
                ":hover::after": {
                    zIndex: -10,
                    animation: animation,
                    opacity: 1,
                },
            }}
            href={children.toString().toLowerCase()}>
            {children}
        </Link>
    );
}

export default NavLink;