# How to Use the Library Management Angular Application

This Angular 16 application allows a librarian to manage books, authors, and loans (emprunts) with a simulated backend using json-server.

## Setup

1. Ensure you have Node.js and Angular CLI installed.
2. Run `npm install` to install dependencies.
3. Start the json-server backend:
   ```
   npx json-server --watch db.json --port 3000
   ```
4. Start the Angular development server:
   ```
   ng serve
   ```
5. Open your browser at `http://localhost:4200`.

## Application Features

### Navigation Bar

- Links to:
  - Liste des livres (List of available books)
  - Liste des auteurs (List of authors)
  - Emprunter un livre (Borrow a book)

### Home Page

- Displays a welcome message.
- Shows statistics: number of books and authors.

### Liste des livres

- Displays all available books.
- Shows title, author, and year.
- "Emprunter" button to borrow a book.
- The button is disabled for unavailable books.

### Emprunter un livre

- Borrowing form with fields:
  - Prenom (First name)
  - Nom (Last name)
  - Date Emprunt (Borrow date)
  - Date Retour (Return date)
- The form validates required fields and date logic.
- On submission:
  - Adds the loan to the backend.
  - Updates the book's availability to unavailable.
  - Redirects to the list of books.

## Notes

- The UpdateEmpruntComponent (modifying return date) is not implemented as per instructions.
- The backend is simulated with json-server using `db.json`.

## Testing

- Verify navigation links work correctly.
- Verify only available books are shown in the list.
- Verify borrowing a book disables the "Emprunter" button for that book.
- Verify the borrowing form validates inputs and updates the backend correctly.
