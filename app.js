const fs = require('fs');
const _ = require('lodash') //lodash
const yargs = require('yargs') //yargs

const notes = require('./notes')
const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const body = {
  describe: 'Enter the body of the note',
  demand: true,
  alias: 'b'
}
//using yargs to add a note and validate
const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title,
  })
  .command('remove', 'Remove a note', {
    title
  })
  .help()
  .argv
let command = argv._[0]


if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log(`Note ${note.title} created succesfully`)
    notes.logNote(note)
  } else {
    console.log(`a note already exists with the title: ${argv.title}`)
  }
} else if (command === 'list') {
  let allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'remove') {
  notes.removeNote(argv.title)
  console.log(`Note ${argv.title} succesfully removed`)
} else if (command === 'read') {
  let note = notes.getNote(argv.title)
  if (note) {
    notes.logNote(note)
  } else {
    console.log('note not found')
  }
} else {
  console.log('Command not recognized')
}