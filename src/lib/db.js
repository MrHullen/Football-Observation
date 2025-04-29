//  Get the parts of Firebase that the web app is going to use.
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore'

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB78Z3ZwNTDFZ9FbtCDv7JSZtr1auwGmYM',
  authDomain: 'football-observation.firebaseapp.com',
  projectId: 'football-observation',
  storageBucket: 'football-observation.firebasestorage.app',
  messagingSenderId: '731295014973',
  appId: '1:731295014973:web:dbe86d838942577f7d4a54',
}

// Start Firebase running and get a reference to the database.
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// The ID of the player document you want to retrieve
// You can replace this with the actual ID of the player you want to retrieve
const playerID = 'rQQoABvHnphwWuuhh8mc'

// Get the player object from the database using the player ID from above.
export async function getPlayer() {
  const playerRef = doc(db, 'Players', playerID)
  const playerDoc = await getDoc(playerRef)
  return playerDoc.data()
}

// Overwrite the player document in the database with the current player object in the web app.
export async function updatePlayer(player) {
  const playerRef = doc(db, "Players", playerID)
  await updateDoc(playerRef, player)
}

export async function addPlayer() {
  const player = {
    firstName: 'FirstName',
    lastName: 'LastName',
    achievements: [
      {
        category: 'Attacking',
        criteria: [
          {
            name: 'Penetration to get behind opponents by passing, dribbling, and shooting.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Create space behind a defender by committing the defender to challenge for the ball.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Keep possession of the ball.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Support by providing pasing options for the player on the ball to achieve penetration or maintain possession.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Unbalance the defense by making runs that create space.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Provide depth, width, and penetration.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Move defending players out of position, i.e. feints and dummy runs.',
            value: 0,
            observationDate: '2025-05-01',
          },
        ],
      },
      {
        category: 'Transition from Attack to Defense',
        criteria: [
          {
            name: 'After losing possession react quickly.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'As defender, close down the ball. slowing down play, tracking forward runs, and by tackling.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Force opposition wide or back.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Prevent opposition from switching play.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'As defender, be able to remain in a position to support other defense players.',
            value: 0,
            observationDate: '2025-05-01',
          },
        ]
      },
      {
        category: 'Defense',
        criteria: [
          {
            name: 'Reduce opponents space by applying pressure quickly.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Stop or dely the opponent playing the ball and generate a turnover.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Apply a tackle to the opponent when there are supporting defenders.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Stay on your feet in a balanced and ready state, focusing on the ball.',
            value: 0,
            observationDate: '2025-05-01',
          },
        ]
      },
      {
        category: 'Transition from Defense to Attack',
        criteria: [
          {
            name: 'After gaining the ball, look to penetrate or get the ball wide.',
            value: 0,
            observationDate: '2025-05-01',
          },
          {
            name: 'Get in behind defense quickly.',
            value: 0,
          },
          {
            name: 'With possession of the ball, look to pass forward.',
            value: 0,
          },
          {
            name: 'Without possession of the ball, make forward runs to split the defense.',
            value: 0,
          },
        ]
      },
    ],
  }
  const playerDoc = await addDoc(collection(db, 'Players'), player)
}
