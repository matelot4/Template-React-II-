import { useState } from 'react';
import classes from './List.module.css';
function Liste(props) {

  const [count, setCount] = useState(0);

  function prendreIngredient(){
    setCount((prevCount) => count + 1 )
  }

  function retirerIngredient(){
    if (count <=0) {
      setCount(0)
    } else {
      setCount((prevCount) => count - 1)
    }
  }

  function ajouterChaudron(){
    setCount(0)
  }



  const mesIngredients = props.potionsMagiques[0].ingredients;

  const maListeIngredients = mesIngredients.map((ingredient) => (
    <li key={Math.random().toString()}>
      {ingredient}
      <div className={classes.liste}>
      <button onClick={prendreIngredient}>Prendre</button>
      <button onClick={retirerIngredient}>Retirer</button>
      </div>
    </li>
  ));

  return (
    <div className={classes.liste}>
      <h2>Mes ingredients</h2>
      <ul>{maListeIngredients}</ul>
      <span>Nombre d'ingrédients sur la table: {count} </span>
      <button className={classes.ajoutChaudron} onClick={ajouterChaudron}>Ajouter au chaudron</button>
    </div>
  );
}

export default Liste;
