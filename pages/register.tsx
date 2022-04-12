import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    Grid,
    GridItem,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    Link,
    Select,
    Spinner,
    Stack,
    Text,
    useToast,
    VStack,
} from '@chakra-ui/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiNotepad } from 'react-icons/bi';
import { db } from '../lib/firebase';

interface IMember {
    name: string;
    email: string;
    phone: string;
    year: number;
    address: string;
    tsize: number;
    language: string;
    project: string;

    // resume: File;
}

type FormValues = {
    teamName: string;
    college: string;
    teamSize: number;
   // paymentId: string;
    member1: IMember;
    member2?: IMember;
    member3?: IMember;
    member4?: IMember;
};

const Register: NextPage = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormValues>();
    const router = useRouter();

    const tsize = ['S', 'M', 'L'];
    const teamSize = [1, 2, 3, 4];
    const year = [1, 2, 3, 4];
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const onSubmit = async (data: FormValues) => {
        console.log({ data });
        setIsLoading(true);
        const documentSnapshot = await getDoc(
            doc(db, 'registered_teams', data.teamName)
        );

        if (documentSnapshot.exists()) {
            setError('teamName', {
                type: 'manual',
                message: 'Team name already exists',
            });
            setIsLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        await setDoc(doc(db, 'registered_teams', data.teamName), data);

        toast({
            title: 'Registration Successful',
            description: 'Your team has been registered successfully',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        router.push('/');
        setIsLoading(false);
    };

    return (
        <Stack
            minH={'75vh'}
            direction={{ base: 'column' }}
            spacing={{ base: 36, lg: 24 }}
        >
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                position={'relative'}
                top={{ base: '140px', md: '160px' }}
            >
                <Divider bg={'#CC01FF'} height={'2px'} />
                <Box
                    border="2px solid #CC01FF"
                    width={{ base: '220px', lg: '400px' }}
                >
                    <Heading
                        fontSize={{ base: '1.1rem', md: '4xl' }}
                        textAlign={'center'}
                        border={'2px solid #CC01FF'}
                        p={3}
                        width={{ base: '220px', lg: '400px' }}
                        position="relative"
                        top="7px"
                        left="7px"
                        padding="1rem"
                        transform="translateZ(-10px)"
                    >
                        REGISTER
                    </Heading>
                </Box>
                <Divider bg={'#CC01FF'} height={'2px'} />
            </Flex>
            <Flex>
                <Box
                    color="white"
                    borderRadius="lg"
                    w={'100%'}
                    m={{ sm: 4, md: 16, lg: 8 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <VStack spacing={5}>
                        <Box
                            p={4}
                            borderRadius={8}
                            bg={'#232323'}
                            my={10}
                            mx={3}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Team Details */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem
                                        p={{ base: 1, md: 4 }}
                                        py={5}
                                        colSpan={2}
                                    >
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Divider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                            />
                                            <Text
                                                bgGradient={
                                                    'linear(to-l, #00FFDD,#CC01FF)'
                                                }
                                                bgClip="text"
                                                fontSize="3xl"
                                                mx={2}
                                                fontWeight="extrabold"
                                                textAlign={'center'}
                                                textTransform={'uppercase'}
                                            >
                                                Team Details
                                            </Text>
                                            <Divider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                            />
                                        </Flex>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.teamName !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Team Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Team Name"
                                                    {...register('teamName', {
                                                        required:
                                                            'Please enter The Team Name',
                                                    })}
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>
                                                {errors.teamName &&
                                                    errors.teamName.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.college !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    College Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="College Name"
                                                    {...register('college', {
                                                        required:
                                                            'Please Enter The College name',
                                                    })}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.college &&
                                                    errors.college.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.teamSize !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Team Size:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Team Size"
                                                    {...register('teamSize', {
                                                        required:
                                                            'Please Enter The Team Size',
                                                    })}
                                                >
                                                    {teamSize.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.teamSize &&
                                                    errors.teamSize.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                {/* Member Details */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem p={4} colSpan={2}>
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Divider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                            />
                                            <Text
                                                bgGradient={
                                                    'linear(to-l, #00FFDD,#CC01FF)'
                                                }
                                                bgClip="text"
                                                fontSize={{
                                                    base: '2xl',
                                                    md: '3xl',
                                                }}
                                                mx={2}
                                                fontWeight="extrabold"
                                                textAlign={'center'}
                                                textTransform={'uppercase'}
                                            >
                                                Members Details
                                            </Text>
                                            <Divider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                            />
                                        </Flex>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 1
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member1.name',
                                                        {
                                                            required:
                                                                'Please enter the name',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.name &&
                                                    errors.member1?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member1.email',
                                                        {
                                                            required:
                                                                'Please enter the email',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.email &&
                                                    errors.member1?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member1.phone',
                                                        {
                                                            required:
                                                                'Please enter the phone number',
                                                            maxLength: {
                                                                value: 10,
                                                                message:
                                                                    'Please enter a valid phone number',
                                                            },
                                                            minLength: {
                                                                value: 10,
                                                                message:
                                                                    'Please enter a valid phone number',
                                                            },
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.phone &&
                                                    errors.member1?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member1.year',
                                                        {
                                                            required:
                                                                'Please Enter The Year',
                                                        }
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.year &&
                                                    errors.member1?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member1.address',
                                                        {
                                                            required:
                                                                'Please enter the address',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.address &&
                                                    errors.member1?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.tsize !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="TShirt Size"
                                                    {...register(
                                                        'member1.tsize',
                                                        {
                                                            required:
                                                                'Please Enter The tshirt size',
                                                        }
                                                    )}
                                                >
                                                    {tsize.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.year &&
                                                    errors.member1?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Language:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="C++,Python,Java..."
                                                    {...register(
                                                        'member1.language',
                                                        {
                                                            required:
                                                                'Please enter valid languages',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.language &&
                                                    errors.member1?.language
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Project Details:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Project: Description"
                                                    {...register(
                                                        'member1.project',
                                                        {
                                                            required:
                                                                'Please enter your project Details',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.project &&
                                                    errors.member1?.project
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    
                                    </GridItem>
                                    {/* <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.resume !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon

                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input

                                                    type="file"
                                                    placeholder="Resume"
                                                    {...register(
                                                        'member1.resume',
                                                        {
                                                            required:
                                                                'Please enter the resume',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.resume &&
                                                    errors.member1?.resume
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem> */}
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 2
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member2.name'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.name &&
                                                    errors.member2?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member2.email'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.email &&
                                                    errors.member2?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member2.phone'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.phone &&
                                                    errors.member2?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member2.year'
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.year &&
                                                    errors.member2?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member2.address'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.address &&
                                                    errors.member2?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.tsize !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="TShirt Size"
                                                    {...register(
                                                        'member2.tsize'
                                                    )}
                                                >
                                                    {tsize.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.year &&
                                                    errors.member2?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Language:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="C++,Python,Java..."
                                                    {...register(
                                                        'member2.language',
                                                        {
                                                            required:
                                                                'Please enter valid languages',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.language &&
                                                    errors.member2?.language
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Project Details:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Project: Description"
                                                    {...register(
                                                        'member2.project',
                                                        {
                                                            required:
                                                                'Please enter your project Details',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.project &&
                                                    errors.member2?.project
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    {/* <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.resume !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon

                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input

                                                    type="file"
                                                    placeholder="Resume"
                                                    {...register(
                                                        'member2.resume'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.resume &&
                                                    errors.member2?.resume
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem> */}
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 3
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member3.name'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.name &&
                                                    errors.member3?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member3.email'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.email &&
                                                    errors.member3?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member3.phone'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.phone &&
                                                    errors.member3?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member3.year'
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.year &&
                                                    errors.member3?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member3.address'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.address &&
                                                    errors.member3?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.tsize !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="TShirt Size"
                                                    {...register(
                                                        'member3.tsize'
                                                    )}
                                                >
                                                    {tsize.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.year &&
                                                    errors.member3?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Language:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="C++,Python,Java..."
                                                    {...register(
                                                        'member3.language',
                                                        {
                                                            required:
                                                                'Please enter valid languages',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.language &&
                                                    errors.member3?.language
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Project Details:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Project: Description"
                                                    {...register(
                                                        'member3.project',
                                                        {
                                                            required:
                                                                'Please enter your project Details',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.project &&
                                                    errors.member3?.project
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    {/* <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.resume !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon

                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input

                                                    type="file"
                                                    placeholder="Resume"
                                                    {...register(
                                                        'member3.resume'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.resume &&
                                                    errors.member3?.resume
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem> */}
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 4
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member4.name'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.name &&
                                                    errors.member4?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member4.email'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.email &&
                                                    errors.member4?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member4.phone'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.phone &&
                                                    errors.member4?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member4.year'
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.year &&
                                                    errors.member4?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member4.address'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.address &&
                                                    errors.member4?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.tsize !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="TShirt Size"
                                                    {...register(
                                                        'member4.tsize'
                                                    )}
                                                >
                                                    {tsize.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.year &&
                                                    errors.member4?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Language:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="C++,Python,Java..."
                                                    {...register(
                                                        'member4.language',
                                                        {
                                                            required:
                                                                'Please enter valid languages',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.language &&
                                                    errors.member4?.language
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup pt={8}>
                                                <InputLeftAddon>
                                                    Project Details:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Project: Description"
                                                    {...register(
                                                        'member4.project',
                                                        {
                                                            required:
                                                                'Please enter your project Details',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.project &&
                                                    errors.member4?.project
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    {/* <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.resume !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon

                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input

                                                    type="file"
                                                    placeholder="Resume"
                                                    {...register(
                                                        'member4.resume'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.resume &&
                                                    errors.member4?.resume
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem> */}
                                    {/*<GridItem
                                        p={{ base: 1, md: 4 }}
                                        py={5}
                                        colSpan={2}
                                    >
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Divider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                            />
                                            <Text
                                                bgGradient={
                                                    'linear(to-l, #00FFDD,#CC01FF)'
                                                }
                                                bgClip="text"
                                                fontSize="3xl"
                                                mx={2}
                                                fontWeight="extrabold"
                                                textAlign={'center'}
                                                textTransform={'uppercase'}
                                            >
                                                Payment Details
                                            </Text>
                                            <Divider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                            />
                                        </Flex>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.paymentId !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Razorpay Payment Id:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Razorpay Payment Id"
                                                    {...register('paymentId', {
                                                        required:
                                                            'Please Enter The Payment ID',
                                                    })}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.paymentId &&
                                                    errors.paymentId.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <Box
                                            display={'flex'}
                                            alignItems={'center'}
                                            bg={'white'}
                                            padding={3}
                                            borderRadius={'10px'}
                                        >
                                            <Icon
                                                as={BiNotepad}
                                                color={'#CC01FF'}
                                                mr={5}
                                            />
                                            <Link
                                                color={'#CC01FF'}
                                                href={
                                                    'https://rzp.io/l/FxLro0IXf'
                                                }
                                                _focus={{ outline: 'none' }}
                                            >
                                                Click Here To Pay
                                            </Link>
                                        </Box>
                                    </GridItem>*/}
                                </Grid>
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem p={4} colSpan={2} mt={4}>
                                        <Flex justify={'center'}>
                                            <Button
                                                fontSize={'1.3rem'}
                                                size={'lg'}
                                                color={'white'}
                                                bg={
                                                    'linear-gradient( 310deg, #00FFDD 0%, #CC01FF 100%)'
                                                }
                                                _hover={{
                                                    bg: 'linear-gradient( 310deg,  #00FFDD 0%, #CC01FF 100%)',
                                                }}
                                                _focus={{ outline: 'none' }}
                                                type="submit"
                                                textTransform={'uppercase'}
                                                disabled={isLoading}
                                                
                                            >
                                                Register
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
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </form>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Stack>
    );
};

export default Register;
