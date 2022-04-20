import { DownloadIcon } from '@chakra-ui/icons';
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
    let emails = {};
    for (let team of teams) {
        totalParticipants += Number(team.teamSize);
        if (
            team.college.includes('JSS') ||
            team.college.includes('jss') ||
            team.college.includes('Jss')
        ) {
            jssTeams++;
        }
        if (team.sendRegisterMail !== true) {
            emails[team.teamName] = [];
            emails[team.teamName].push(team.member1.email);
            emails[team.teamName].push(team.member2.email);
            emails[team.teamName].push(team.member3.email);
            emails[team.teamName].push(team.member4.email);
            emails[team.teamName] = emails[team.teamName].filter(function (e) {
                return e !== '';
            });
            newRegistrations++;
            newParticipants += Number(team.teamSize);
        }
    }
    console.log({ emails });

    const generateExcel = () => {
        // Deep copy
        let temp: ITeam[] = JSON.parse(JSON.stringify(teams));
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
                    <Card title="New Registration" number={newRegistrations} />
                    <Card title="New Participants" number={newParticipants} />
                </HStack>
                <HStack>
                    <Card title="New Registration" number={newRegistrations} />
                    <Card title="New Participants" number={newParticipants} />
                </HStack>
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
                    onClick={generateExcel}
                >
                    Download Excel
                </Button>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th align="center">Team Name</Th>
                                <Th align="center">College</Th>
                                <Th isNumeric align="center">
                                    Team Size
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {teams.map((team) => (
                                <Tr key={team.teamName}>
                                    <Td>{team.teamName}</Td>
                                    <Td>{team.college}</Td>
                                    <Td isNumeric>{team.teamSize}</Td>
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
        query(collection(db, 'registered_teams'), orderBy('teamName'))
    );

    let teams = [];
    querySnapshot.forEach((docs) => {
        // doc.data() is never undefined for query doc snapshots

        console.log(docs.id, ' => ', docs.data());
        teams.push(docs.data());
    });

    return {
        props: {
            teams,
        },
    };
};

export default Admin;
