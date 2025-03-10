// Add Note
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes-container');

addNoteBtn.addEventListener('click', () => {
  const noteInput = document.getElementById('new-note-input');
  const noteText = noteInput.value.trim();

  if (noteText) {
    const noteElement = document.createElement('div');
    noteElement.textContent = noteText;

    // Add delete button to each note
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      notesContainer.removeChild(noteElement);
    });

    noteElement.appendChild(deleteBtn);
    notesContainer.appendChild(noteElement);
    noteInput.value = '';
  }
});

// Add To-Do
const addTodoBtn = document.getElementById('add-todo-btn');
const todoContainer = document.getElementById('todo-container');

addTodoBtn.addEventListener('click', () => {
  const todoInput = document.getElementById('new-todo-input');
  const todoText = todoInput.value.trim();

  if (todoText) {
    const todoElement = document.createElement('div');
    todoElement.textContent = todoText;

    // Add delete button to each to-do item
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      todoContainer.removeChild(todoElement);
    });

    todoElement.appendChild(deleteBtn);
    todoContainer.appendChild(todoElement);
    todoInput.value = '';
  }
});

//Set localstorage and retrive from it

localStorage.setItem('notes', JSON.stringify(notesArray));
const savedNotes = JSON.parse(localStorage.getItem('notes'));
