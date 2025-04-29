export type Task = {
  id: number;
  name: string;
  description: string;
  sortOrder: number;
};

export const dailyTasks: Task[] = [
  {
    id: 7,
    name: 'HoYoLab Check-In',
    description: 'Check in on the website.',
    sortOrder: 1,
  },
  {
    id: 1,
    name: 'Scratch Card Mania',
    description: 'Check in with Howl at the newsstand.',
    sortOrder: 2,
  },
  {
    id: 2,
    name: 'Coff Coffee',
    description: "Buy coffee from Tin Master's shop.",
    sortOrder: 3,
  },
  {
    id: 3,
    name: 'Open Video Store',
    description: 'Open the video store for business.',
    sortOrder: 4,
  },
  {
    id: 4,
    name: 'Spend Battery Charge',
    description: 'Rewards materials that make your Agents and W-Engines stronger.',
    sortOrder: 5,
  },
  {
    id: 5,
    name: 'Trust Events',
    description: 'Interact with Agents to increase their Trust Level.',
    sortOrder: 6,
  },
  {
    id: 6,
    name: 'New Eridu City Fund',
    description: 'Complete daily tasks to earn rewards.',
    sortOrder: 7,
  },
];

export const weeklyTasks: Task[] = [];

export const longTermTasks: Task[] = [];
