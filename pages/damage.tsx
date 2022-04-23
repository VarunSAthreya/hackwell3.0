import { RepeatClockIcon } from '@chakra-ui/icons';
import { Button, Center, Spinner, useToast } from '@chakra-ui/react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../lib/firebase';

const Damage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const reset = async () => {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, 'registered_teams'));
        querySnapshot.docs.forEach(async (docs) => {
            await updateDoc(doc(db, 'registered_teams', docs.id), {
                sendRegisterMail: true,
            });
        });
        setIsLoading(false);
        toast({
            title: 'Reset Successful',
            status: 'success',
            duration: 2000,
        });
    };

    return (
        <Center pt={140}>
            <Button
                rightIcon={<RepeatClockIcon />}
                color="black"
                bg="white"
                p={2}
                m={2}
                _hover={{
                    bg: '#CC01FF',
                    color: 'white',
                }}
                _focus={{ outline: 'none' }}
                _active={{ bg: '#CC01FF' }}
                onClick={reset}
                disabled={isLoading}
            >
                Reset New Team{' '}
                {isLoading && (
                    <Spinner
                        ml={2}
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="#00FFDD"
                        color="#CC01FF"
                    />
                )}
            </Button>
        </Center>
    );
};

export default Damage;
