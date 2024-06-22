import React from "react";
import "./App.css";
import BookComponent from "./BookComponent";

function App() {
  const book = {
    image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "Harry Potter has no idea how famous he is...",
    characters: [
      "Harry Potter",
      "Hermione Granger",
      "Ron Weasley",
      "Albus Dumbledore",
      "Severus Snape",
    ],
  };

  const handleButtonClick = () => {
    console.log(`Button clicked for book: ${book.title}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BookComponent
          image={book.image}
          title={book.title}
          description={book.description}
          characters={book.characters}
          onButtonClick={handleButtonClick}
        />
      </header>
    </div>
  );
}

export default App;
