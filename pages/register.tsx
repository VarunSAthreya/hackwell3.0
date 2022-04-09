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
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    loadScript,
    showRazorpay,
} from '../components/UI/Button/PaymentButton';

interface IMember {
    name: string;
    email: string;
    phone: string;
    year: number;
    address: string;
    tsize: number;
    // resume: File;
}

type FormValues = {
    teamName: string;
    college: string;
    teamSize: number;
    member1: IMember;
    member2?: IMember;
    member3?: IMember;
    member4?: IMember;
};

const Register: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const tsize = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const teamSize = [1, 2, 3, 4];
    const year = [1, 2, 3, 4];

    const onSubmit = (data: FormValues) => {
        console.log({ data });
        showRazorpay({
            amount: data.teamSize * 300,
            window,
            teamData: data,
        });
    };

    useEffect(() => {
        loadScript();
    }, []);

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
                        <Box p={4} borderRadius={8}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Team Details */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="3xl"
                                            fontWeight="extrabold"
                                            textTransform={'uppercase'}
                                        >
                                            Team Details
                                        </Text>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.teamName !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Team Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.college !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    College Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="College Name"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.teamSize !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Team Size:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="3xl"
                                            fontWeight="extrabold"
                                            textTransform={'uppercase'}
                                        >
                                            Member Details
                                        </Text>
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    bgColor={'#CC01FF'}
                                                    {...register(
                                                        'member1.phone',
                                                        {
                                                            required:
                                                                'Please enter the phone number',
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    bgColor={'#CC01FF'}
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
                                    <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                                <InputLeftAddon
                                                    bgColor={'#CC01FF'}
                                                >
                                                    TShirt Size:
                                                </InputLeftAddon>
                                                <Select
                                                    bgColor={'#CC01FF'}
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
                                                    bgColor={'#CC01FF'}
                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input
                                                    bgColor={'#CC01FF'}
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
                                            >
                                                Register
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
