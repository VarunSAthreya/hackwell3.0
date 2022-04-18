import {
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
import { collection, getDocs } from 'firebase/firestore';
import { GetServerSideProps, NextPage } from 'next/types';
import React from 'react';
import { ITeam } from '../@types';
import Card from '../components/UI/Card';
import { db } from '../lib/firebase';

type Props = {
    teams: ITeam[];
};

const Admin: NextPage<Props> = ({ teams }) => {
    let totalParticipants: number = 0;
    let jssTeams: number = 0;
    for (let team of teams) {
        totalParticipants += Number(team.teamSize);
        if (
            team.college.includes('JSS') ||
            team.college.includes('jss') ||
            team.college.includes('Jss')
        ) {
            jssTeams++;
        }
    }
    return (
        <Center pt={120}>
            <VStack>
                <HStack>
                    <Card title="Total Teams" number={teams.length} />
                    <Card
                        title="Total Participants"
                        number={totalParticipants}
                    />
                    <Card title="JSS Teams" number={jssTeams} />
                </HStack>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Team Name</Th>
                                <Th>College</Th>
                                <Th isNumeric>Team Size</Th>
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
    const querySnapshot = await getDocs(collection(db, 'registered_teams'));
    let teams = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        teams.push(doc.data());
    });
    return {
        props: {
            teams,
        },
    };
};

export default Admin;
