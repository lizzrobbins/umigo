export default [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '#awesome',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Legit!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Jake Robbins',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Umm, yes please! We could hit up Clear Creek Canyon.',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
    location: {
      latitude: 39.1188749,
      longitude: -107.0839451,
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'I looooove white water rafting. That\'s a great idea!',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hey, Lizz! I saw that you like white water rafting! Do you want to go sometime?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Jake Robbins',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi, Jake!',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Type to start connecting!',
    createdAt: new Date(),
    system: true,
  },
];
