export const charactersResponse = {
  info: {
    count: 493,
    pages: 25,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: '',
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
      ],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
      ],
      url: 'https://rickandmortyapi.com/api/character/3',
      created: '2017-11-04T19:09:56.428Z',
    },
  ],
}

export const episodeResponse = {
  id: 12,
  name: 'A Rickle in Time',
  air_date: 'July 26, 2015',
  episode: 'S02E01',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/3',
    'https://rickandmortyapi.com/api/character/4',
    'https://rickandmortyapi.com/api/character/5',
    'https://rickandmortyapi.com/api/character/11',
    'https://rickandmortyapi.com/api/character/64',
    'https://rickandmortyapi.com/api/character/237',
    'https://rickandmortyapi.com/api/character/313',
    'https://rickandmortyapi.com/api/character/437',
    'https://rickandmortyapi.com/api/character/438',
    'https://rickandmortyapi.com/api/character/439',
    'https://rickandmortyapi.com/api/character/440',
  ],
  url: 'https://rickandmortyapi.com/api/episode/12',
  created: '2017-11-10T12:56:34.953Z',
}

export const locationResponse = [
  {
    id: 1,
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: [
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/356',
      'https://rickandmortyapi.com/api/character/394',
    ],
    url: 'https://rickandmortyapi.com/api/location/1',
    created: '2017-11-10T12:42:04.162Z',
  },
  {
    id: 20,
    name: 'Earth (Replacement Dimension)',
    type: 'Planet',
    dimension: 'Replacement Dimension',
    residents: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/492',
      'https://rickandmortyapi.com/api/character/493',
    ],
    url: 'https://rickandmortyapi.com/api/location/20',
    created: '2017-11-18T19:33:01.173Z',
  },
]