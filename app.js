require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');

app.get('/', (req, res) => {
  res.json([
      {
        alias: 'Anarky',
        name: 'Lonnie Machin'
      },
      {
          alias: 'Bane',
          name: 'Dorrance'
      },
      {
        alias: 'Black Mask',
        name: 'Roman Sionis'
      },
      {
        alias: 'Bronze Tiger',
        name: 'Benjamin Turner'
      },
      {
        alias: 'Catman',
        name: 'Thomas Blake'
      },
      {
        alias: 'Catwoman',
        name: 'Selina Kyle'
      },
      {
        alias: 'Calendar Man',
        name: 'Julian Gregory Day'
      },
      {
        alias: 'Clayface',
        name: 'Basil Karlo' 
      },
      {
        alias: 'Clayface (II)',
        name: 'Matthew "Matt" Haggen'
      },
      {
        alias: 'Cluemaster',
        name: 'Arthur Brown'
      },
      {
        alias: 'Deathstroke',
        name: 'Slade Wilson'
      },
      {
        alias: 'Firefly',
        name: 'Garfield Lynns'
      },
      {
        alias: 'Great White Shark',
        name: 'Warren White'
      },
      {
        alias: 'Hugo Strange',
        name: 'Professor Hugo Strange'
      },
      {
        alias: 'Hush',
        name: 'Dr. Thomas Elliot'
      },
      {
        alias: 'J.J. Gordon',
        name: 'James Gordon, Jr.'
      },
      {
        alias: 'The Joker',
        name: 'Jack Napier'
      },
      {
        alias: 'Joker\'s Daughter',
        name: 'Duela Dent'
      },
      {
        alias: 'Killer Croc',
        name: 'Waylon Jones'
      },
      {
        alias: 'Killer Moth',
        name: 'Drury Walker'
      },
      {
        alias: 'Lady Shiva',
        name: 'Sandra Woosan'
      },
      {
        alias: 'Lincoln March',
        name: 'Thomas Wayne, Jr.'
      },
      {
        alias: 'Mad Hatter',
        name: 'Dr. Jervis Tetch'
      },
      {
        alias: 'Mr. Freeze',
        name: 'Dr. Victor Fries'
      },
      {
        alias: 'The Penguin',
        name: 'Oswald Chesterfield Cobblepot'
      },
      {
        alias: 'Poison Ivy',
        name: 'Dr. Pamela Lillian Isley'
      },
      {
        alias: 'Ra\'s al Ghul',
        name: 'Ra\'s al Ghul'
      },
      {
        alias: 'The Red Hood',
        name: 'Jason Todd'
      },
      {
        alias: 'The Riddler',
        name: 'Edward Nigma/Nashton'
      },
      {
        alias: 'The Scarecrow',
        name: 'Dr. Jonathan Crane'
      },
      {
        alias: 'Two-Face',
        name: 'Harvey Dent'
      },
      {
        alias: 'Man-Bat',
        name: 'Dr. Kirk Langstrom'
      },
      {
        alias: 'Maxie Zeus',
        name: 'Maximillian Zeus'
      },
      {
        alias: 'Mister Zsasz',
        name: 'Victor Zsasz'
      },
      {
        alias: 'Deadshot',
        name: 'Floyd Lawton'
      },
      {
        alias: 'Harley Quinn',
        name: 'Dr. Harleen F. Quinzel'
      },
      {
        alias: 'The Phantasm',
        name: 'Andrea Beaumont'
      },
      {
        alias: 'Professor Pyg',
        name: 'Dr. Lazlo Valentin'
      },
      {
        alias: 'Prometheus',
        name: 'N/A'
      },
      {
        alias: 'Solomon Grundy',
        name: 'Cyrus Gold'
      },
      {
        alias: 'Talia al Ghul',
        name: 'Talia al Ghul'
      },
      {
        alias: 'Talon',
        name: 'William Cobb'
      },
      {
        alias: 'The Ventriloquist & Scarface',
        name: 'Arnold Wesker'
      }
  ])
})

app.get('/hard', (req, res) => {
    res.send('whooman is this going to be a tough week.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})