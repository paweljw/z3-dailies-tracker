export type Task = {
  id: number;
  name: string;
  description: string;
};

export const dailyTasks: Task[] = [
  {
    id: 1,
    name: 'Scratch Card Mania',
    description: 'Check in with Howl at the newsstand.',
  },
  {
    id: 2,
    name: 'Coff Coffee',
    description: "Buy coffee from Tin Master's shop.",
  },
  {
    id: 3,
    name: 'Open Video Store',
    description: 'Open the video store for business.',
  },
  {
    id: 4,
    name: 'Spend Battery Charge',
    description: 'Rewards materials that make your Agents and W-Engines stronger.',
  },
  {
    id: 5,
    name: 'Trust Events',
    description: 'Interact with Agents to increase their Trust Level.',
  },
  {
    id: 6,
    name: 'New Eridu City Fund',
    description: 'Complete daily tasks to earn rewards.',
  },
];

export const weeklyTasks: Task[] = [];

export const longTermTasks: Task[] = [];
