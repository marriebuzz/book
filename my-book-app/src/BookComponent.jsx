import React from "react";

const BookComponent = ({
  image,
  title,
  description,
  characters,
  onButtonClick,
}) => {
  const handleClick = () => {
    console.log(`Title: ${title}`);
    console.log("Characters:", characters.join(", "));
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const styles = {
    container: {
      border: "1px solid #ccc",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
      textAlign: "center",
      maxWidth: "400px",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Characters:</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Show Details</button>
    </div>
  );
};

export default BookComponent;
