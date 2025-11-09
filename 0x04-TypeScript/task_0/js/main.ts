// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 23,
  location: 'London',
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

// Loop through the studentsList and append a new row for each student
studentsList.forEach((student) => {
  // Create a new table row
  const row = document.createElement('tr');

  // Create a cell for the first name
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  // Create a cell for the location
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tbody.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);