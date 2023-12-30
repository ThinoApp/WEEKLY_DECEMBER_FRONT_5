import {
    GoWorkflow,
    GoPackage,
    GoShieldCheck,
    GoCodespaces,
    GoCopilot,
    GoCodeReview,
    GoIssueOpened,
    GoCommentDiscussion,
} from 'react-icons/go';

export const products = [
    {
        id: 1,
        icon: <GoWorkflow className="github-menu-icon" />,
        title: 'Actions',
        description: 'Automate any workflow',
    },
    {
        id: 2,
        icon: <GoPackage className="github-menu-icon" />,
        title: 'Packages',
        description: 'Host and manage packages',
    },
    {
        id: 3,
        icon: <GoShieldCheck className="github-menu-icon" />,
        title: 'Security',
        description: 'Find and fix vulnerabilities',
    },
    {
        id: 4,
        icon: <GoCodespaces className="github-menu-icon" />,
        title: 'Codespaces',
        description: 'Instant dev environments',
    },
    {
        id: 5,
        icon: <GoCopilot className="github-menu-icon" />,
        title: 'Copilot',
        description: 'Write better code with AI',
    },
    {
        id: 6,
        icon: <GoCodeReview className="github-menu-icon" />,
        title: 'Code review',
        description: 'Manage code changes',
    },
    {
        id: 7,
        icon: <GoIssueOpened className="github-menu-icon" />,
        title: 'Code review',
        description: 'Plan and track work',
    },
    {
        id: 8,
        icon: <GoCommentDiscussion className="github-menu-icon" />,
        title: 'Code review',
        description: 'Collaborate outside of code',
    },
];

export const solutions = [
    {
        id: 1,
        items: ['For', 'Entreprise', 'Teams', 'Startups', 'Education'],
    },
    {
        id: 2,
        items: ['By Solution', 'CI/CD & Automation', 'DevOps', 'DevSecOps'],
    },
    {
        id: 3,
        items: ['Resources', 'Learning Pathways ', 'White papers, Ebooks, Webinars ', 'Customer Stories'],
    },
];

export const OpenSource = [
    {
        id: 1,
        items: ['GitHub Sponsors', 'Fund open source developers'],
    },
    {
        id: 2,
        items: ['The ReadME Project', 'GitHub community articles'],
    },
    {
        id: 3,
        items: ['Repositories', 'Topics', 'Trending', 'Collections'],
    },
];
