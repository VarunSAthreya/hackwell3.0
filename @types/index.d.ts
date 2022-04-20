import { IconType } from 'react-icons/lib';

interface ISocialMedia {
    icon: IconType;
    url: string;
    label: string;
}

interface IMember {
    name: string;
    email: string;
    phone: string;
    year: number;
    address: string;
    tsize: number;
    language: string;
    project: string;
    hackathonprev: string;

    // resume: File;
}

interface ITeam {
    teamName: string;
    college: string;
    teamSize: number;
    // paymentId: string;
    sendRegisterMail: boolean;
    createdAt: string;
    member1: IMember;
    member2?: IMember;
    member3?: IMember;
    member4?: IMember;
}
