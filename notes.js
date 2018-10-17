const fs = require('fs')

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (error) {
    return []
  }

}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  };

  //test for duplicate notes
  let duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    //add new note to the app
    notes.push(note)
    saveNotes(notes)
    return note
  }
};

let getAll = () => {
  return fetchNotes();
}

let getNote = (title) => {
  let notes = fetchNotes()
  let filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0]
}
let removeNote = (title) => {

  let notes = fetchNotes()
  let filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}
let logNote = (note) => {
  debugger
  console.log('--')
  console.log(`Title: ${note.title}`)
  console.log(`body:${note.body}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}