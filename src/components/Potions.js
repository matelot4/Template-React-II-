import Card from "./Card";

export default function Potions(props) {
  
  const cartesPotions = props.potionsMagiques.map((item) => {

    return (
      <div key={item.id}>
        <Card>
          <h3>{item.nomLatin}</h3>
          <h4>{item.nomCommun}</h4>
          <ul>
            <li>
              <span>Ingredients: </span>
              {item.ingredients}
            </li>
            <li>
              <span>Temps de préparation: </span>
              {item.tempsPreparation} minutes
            </li>
            <li>
              <span>Effet: </span>
              {item.effet}
            </li>
          </ul>
        </Card>
      </div>
    );
  });

  return <div className="container-cartes">{cartesPotions}</div>;
}
