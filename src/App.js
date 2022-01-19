import "./App.css";
import Chaudron from "./components/Chaudron";
import Liste from "./components/Liste";
import Potions from "./components/Potions";

function App() {
  const potionsMagiques = [
    {
      nomLatin: "amnesia",
      nomCommun: "Potion d'amnésie",
      ingredients: ["eau du fleuve, ", "baie de gui, ", "vrins de valériane"],
      tempsPreparation: 50,
      effet: "fait perdre la mémoire",
      id: "1",
    },
    {
      nomLatin: "felix felicis ",
      nomCommun: "Chance liquide",
      ingredients: [
        "oeuf de Serpencendre, ",
        "raifort, ",
        " jus de scille, ",
        " tentacules de Murlap, ",
        "alcoolature de thym, ",
        "oeuf d'Occamy, ",
        "poudre de Ruta",
      ],
      tempsPreparation: 262800,
      effet: "Rend la personne qui la bois extremement chanceuse",
      id: "2",
    },
    {
      nomLatin: "armotentia",
      nomCommun: "Filtre damour",
      ingredients: [
        "cannelle, ",
        "pétale de rose, ",
        "épine de rose,",
        "menthe, ",
        "pierre de lune, ",
        "serpencendre",
      ],
      tempsPreparation: 50,
      effet: "provoque une obsession amoureuse pour celui qui la boit ",
      id: "3",
    },
  ];
  return (
    <div className="App">
      <Potions potionsMagiques={potionsMagiques} />
      <Liste potionsMagiques={potionsMagiques} />
      <Chaudron />
    </div>
  );
}

export default App;
