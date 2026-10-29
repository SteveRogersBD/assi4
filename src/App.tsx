import { useState } from 'react';
import './App.css';
import ContactCard from './ContactCard';

interface Contact {
  id: number;
  name: string;
  email: string;
  department: string;
  phone: string;
}

// The contact data is intentionally hard-coded for this assignment.
// Do not replace it with fetch() or an external API.
const contacts: Contact[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@truman.edu', department: 'Computer Science', phone: '660-555-1001' },
  { id: 2, name: 'Bob Smith', email: 'bob@truman.edu', department: 'Mathematics', phone: '660-555-1002' },
  { id: 3, name: 'Carol Lee', email: 'carol@truman.edu', department: 'Biology', phone: '660-555-1003' },
  { id: 4, name: 'David Brown', email: 'david@truman.edu', department: 'Business', phone: '660-555-1004' },
  { id: 5, name: 'Emily Davis', email: 'emily@truman.edu', department: 'Computer Science', phone: '660-555-1005' },
  { id: 6, name: 'Frank Wilson', email: 'frank@truman.edu', department: 'Physics', phone: '660-555-1006' },
  { id: 7, name: 'Grace Miller', email: 'grace@truman.edu', department: 'Chemistry', phone: '660-555-1007' },
  { id: 8, name: 'Henry Taylor', email: 'henry@truman.edu', department: 'Statistics', phone: '660-555-1008' },
];

function App() {
  // TODO 1: Create a state variable named selectedIndex.
  // Initial value should be 0.
  // const [selectedIndex, setSelectedIndex] = ...

  // TODO 2: Create a function named showNextContact().
  // It should move selectedIndex to the next contact.
  // When the last contact is reached, it should return to index 0.
  // Hint: use contacts.length and the % operator.

  return (
    <main className="page">
      <header className="page-header">
        <h1>React Contact Directory</h1>
        <p>CS 315 - Assignment 4</p>
      </header>

      <section className="featured">
        <h2>Featured Contact</h2>

        {/* TODO 3: Display the selected contact's name and department.
            Use contacts[selectedIndex].name and contacts[selectedIndex].department. */}

        {/* TODO 4: Add a button that calls showNextContact when clicked. */}
      </section>

      <section>
        <h2>All Contacts</h2>

        <div className="contact-grid">
          {/* TODO 5: Use contacts.map(...) to generate one ContactCard per contact.
              Requirements:
              - key={contact.id}
              - pass name, email, department, and phone as props
              - do NOT manually write eight ContactCard components */}
        </div>
      </section>
    </main>
  );
}

export default App;
