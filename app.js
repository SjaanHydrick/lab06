require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');

app.get('/', (req, res) => {
  res.json([
      {
        alias: 'Bane',
        name: 'Edward',
        alive: true,
        category: 'Central Rogue'
      },
      {
        alias: 'Black Mask',
        name: 'Roman Sionis',
        alive: false,
        category: 'Central Rogues'
      },
      {
        alias: 'The Boss',
        name: 'Sal Maroni',
        alive: false,
        category: 'Organized Crime'
      },
      {
        alias: 'Catwoman',
        name: 'Selina Kyle',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Calendar Man',
        name: 'Julian Gregory Day',
        alive: true,
        category: 'Secondary Rogues'
      },
      {
        alias: 'Clayface',
        name: 'Basil Karlo',
        alive: false,
        category: 'Central Rogues'
      },
      {
        alias: 'Deadshot',
        name: 'Floyd Lawton',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Deathstroke',
        name: 'Slade Wilson',
        alive: false,
        category: 'Central Rogues'
      },
      {
        alias: 'Firefly',
        name: 'Garfield Lynns',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Great White Shark',
        name: 'Warren White',
        alive: true,
        category: 'Secondary Rogues'
      },
      {
        alias: 'Hangman',
        name: 'Sofia Gigante',
        alive: false,
        category: 'Organized Crime'
      },
      {
        alias: 'Harley Quinn',
        name: 'Dr. Harleen F. Quinzel',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Holiday',
        name: 'Alberto Falcone',
        alive: false,
        category: 'Organized Crime'
      },
      {
        alias: 'Hugo Strange',
        name: 'Professor Hugo Strange',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Hush',
        name: 'Dr. Thomas Elliot',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'The Joker',
        name: 'Jack Napier',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Killer Croc',
        name: 'Waylon Jones',
        alive: true,
        category: 'Central ROgues'
      },
      {
        alias: 'Mad Hatter',
        name: 'Dr. Jervis Tetch',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Mr. Freeze',
        name: 'Dr. Victor Fries',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Onomatopoeia',
        name: 'N/A',
        alive: true,
        category: 'Recurring Rogues'
      },
      {
        alias: 'The Penguin',
        name: 'Oswald Chesterfield Cobblepot',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Poison Ivy',
        name: 'Dr. Pamela Lillian Isley',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Ra\'s al Ghul',
        name: 'Ra\'s al Ghul',
        alive: true,
        category: 'League of ASsassins'
      },
      {
        alias: 'The Red Hood',
        name: 'Jason Todd',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'The Riddler',
        name: 'Edward Nigma/Nashton',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'The Roman',
        name: 'Carmine Falcone',
        alive: false,
        category: 'Organized Crime'
      },
      {
        alias: 'Two-Face',
        name: 'Harvey Dent',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Man-Bat',
        name: 'Dr. Kirk Langstrom',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Maxie Zeus',
        name: 'Maximillian Zeus',
        alive: true,
        category: 'Secondary Rogues'
      },
      {
        alias: 'Mr. Zsasz',
        name: 'Victor Zsasz',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Professor Pyg',
        name: 'Dr. Lazlo Valentin',
        alive: true,
        category: 'Secondary Rogues'
      },
      {
        alias: 'Scarecrow',
        name: 'Professor Jonathan Crane',
        alive: true,
        category: 'Central Rogues'
      },
      {
        alias: 'Solomon Grundy',
        name: 'Cyrus Gold',
        alive: false,
        category: 'Secondary Rogue'
      },
      {
        alias: 'Talia al Ghul',
        name: 'Talia al Ghul',
        alive: true,
        category: 'League of Assassins'
      },
      {
        alias: 'Ventriloquist',
        name: 'Arnold Wesker',
        alive: true,
        category: 'Central Rogues'
      },
  ])
})

app.get('/hard', (req, res) => {
    res.send('whooman is this going to be a tough week.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})