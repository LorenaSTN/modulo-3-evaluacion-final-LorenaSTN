import "../scss/main/CharacterDetail.scss";
import { Link } from "react-router-dom";
import PhotoNotFound from "../images/characterNotFound.png";

function CharacterDetail({ character }) {
  if (!character) {
    return (
      <>
        <h3 className="characterdetail__notfound">
          Sorry, the character your searching is not in our list
        </h3>
        <img
          className="image_notFound"
          src={PhotoNotFound}
          alt="Character not found"
        />
        <Link className="characterdetail__link2" to="/">
          Back to Home
        </Link>
      </>
    );
  }

  let deadOrAlive;

  if (character.status === "Dead") {
    deadOrAlive = "☠️";
  } else if (character.status === "Alive") {
    deadOrAlive = "🤍";
  } else {
    deadOrAlive = "❔";
  }

  return (
    <div className="characterdetail">
      <Link className="characterdetail__link" to="/">
        Back to Home
      </Link>
      <img
        className="characterdetail__image"
        src={character.photo}
        alt={character.name}
      />
      <h4 className="characterdetail__name">{character.name}</h4>
      <p> Status: {deadOrAlive}</p>
      <p> Species: {character.species}</p>
      <p> Gender: {character.gender}</p>
      <p> Origin: {character.location}</p>
      <p> Episodes: {character.episode.length}</p>
    </div>
  );
}

export default CharacterDetail;
