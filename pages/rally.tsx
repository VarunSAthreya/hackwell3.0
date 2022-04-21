import { CopyIcon, DownloadIcon } from '@chakra-ui/icons';
import {
    Button,
    Center,
    HStack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast,
    VStack,
} from '@chakra-ui/react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { GetServerSideProps, NextPage } from 'next/types';
import React from 'react';
import { ITeam } from '../@types';
import Card from '../components/UI/Card';
import { db } from '../lib/firebase';
const XLSX = require('xlsx');

type Props = {
    teams: ITeam[];
};

const Admin: NextPage<Props> = ({ teams }) => {
    let totalParticipants: number = 0;
    let jssTeams: number = 0;
    let newRegistrations: number = 0;
    let newParticipants: number = 0;
    let newTeam: ITeam[] = [];
    let teamEmails = {};
    let newEmails = [];
    let allEmails = [];
    const toast = useToast();

    for (let team of teams) {
        totalParticipants += Number(team.teamSize);
        allEmails.push(team.member1.email);
        allEmails.push(team.member2.email);
        allEmails.push(team.member3.email);
        allEmails.push(team.member4.email);
        if (
            team.college.includes('JSS') ||
            team.college.includes('jss') ||
            team.college.includes('Jss')
        ) {
            jssTeams++;
        }
        if (team.sendRegisterMail !== true) {
            newTeam.push(team);
            teamEmails[team.teamName] = [];
            teamEmails[team.teamName].push(team.member1.email);
            teamEmails[team.teamName].push(team.member2.email);
            teamEmails[team.teamName].push(team.member3.email);
            teamEmails[team.teamName].push(team.member4.email);
            teamEmails[team.teamName] = teamEmails[team.teamName].filter(
                function (e) {
                    return e !== '';
                }
            );
            newEmails.push(teamEmails[team.teamName]);
            newRegistrations++;
            newParticipants += Number(team.teamSize);
        }
    }
    console.log({ emails: newEmails });
    allEmails = allEmails.filter(function (e) {
        return e !== '';
    });

    const generateExcel = (data) => {
        // Deep copy
        let temp: ITeam[] = JSON.parse(JSON.stringify(data));
        const flatten = (data) => {
            var result = {};
            function recurse(cur, prop) {
                if (Object(cur) !== cur) {
                    result[prop] = cur;
                } else if (Array.isArray(cur)) {
                    for (var i = 0, l = cur.length; i < l; i++)
                        recurse(cur[i], prop + '[' + i + ']');
                    if (l == 0) result[prop] = [];
                } else {
                    var isEmpty = true;
                    for (var p in cur) {
                        isEmpty = false;
                        recurse(cur[p], prop ? prop + '.' + p : p);
                    }
                    if (isEmpty && prop) result[prop] = {};
                }
            }
            recurse(data, '');
            return result;
        };
        const res = [];
        temp.forEach((t) => {
            res.push(flatten(t));
        });

        const workSheet = XLSX.utils.json_to_sheet(res);
        const workBook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workBook, workSheet, 'teams');
        XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });

        XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });

        XLSX.writeFile(workBook, 'TeamData.xlsx');
    };

    return (
        <Center pt={140}>
            <VStack spacing={10}>
                <HStack>
                    <Card title="Total Teams" number={teams.length} />
                    <Card
                        title="Total Participants"
                        number={totalParticipants}
                    />
                    <Card title="JSS Teams" number={jssTeams} />
                </HStack>
                <HStack>
                    <Card title="New Registration" number={newRegistrations} />
                    <Card title="New Participants" number={newParticipants} />
                </HStack>
                <HStack>
                    <Button
                        rightIcon={<DownloadIcon />}
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
                        onClick={() => {
                            generateExcel(teams);
                        }}
                    >
                        Download All team Excel
                    </Button>
                    <Button
                        rightIcon={<CopyIcon />}
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
                        onClick={() => {
                            navigator.clipboard.writeText(allEmails.join(','));
                            toast({
                                title: 'Copied to clipboard',
                                status: 'success',
                                duration: 1000,
                            });
                        }}
                    >
                        Copy All team members emails
                    </Button>
                </HStack>

                <HStack>
                    <Button
                        rightIcon={<DownloadIcon />}
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
                        onClick={() => {
                            generateExcel(newTeam);
                        }}
                    >
                        Download New Team Excel
                    </Button>
                    <Button
                        rightIcon={<CopyIcon />}
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
                        onClick={() => {
                            navigator.clipboard.writeText(newEmails.join(','));
                            toast({
                                title: 'Copied to clipboard',
                                status: 'success',
                                duration: 1000,
                            });
                        }}
                    >
                        Copy New team members emails
                    </Button>
                </HStack>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th align="center">Team Name</Th>
                                <Th align="center">College</Th>
                                <Th isNumeric align="center">
                                    Team Size
                                </Th>
                                <Th align="center">Sent Mail</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {teams.map((team) => (
                                <Tr key={team.teamName}>
                                    <Td>{team.teamName}</Td>
                                    <Td>{team.college}</Td>
                                    <Td isNumeric>{team.teamSize}</Td>
                                    <Td>{team.sendRegisterMail.toString()}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        </Center>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const querySnapshot = await getDocs(
        query(collection(db, 'registered_teams'), orderBy('createdAt', 'desc'))
    );

    let teams = [];
    querySnapshot.forEach((docs) => {
        teams.push(docs.data());
    });

    return {
        props: {
            teams,
        },
    };
};

export default Admin;
