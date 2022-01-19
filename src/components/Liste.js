
import classes from './List.module.css';



function Liste(props) {
  const mesIngredients = props.potionsMagiques[0].ingredients;

  const maListeIngredients = mesIngredients.map((ingredient) => (
    <li key={Math.random().toString()}>
      {ingredient}
      <div className={classes.liste}>
      <button>Prendre</button>
      <button>Retirer</button>
      </div>
    </li>
  ));

  return (
    <div className={classes.liste}>
      <h2>Mes ingredients</h2>
      <ul>{maListeIngredients}</ul>
      <span>Nombre d'ingrédients sur la table: </span>
      <button className={classes.ajoutChaudron}>Ajouter au chaudron</button>
    </div>
  );
}

export default Liste;
