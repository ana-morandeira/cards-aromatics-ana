import Aromatics from "./assets/components/Aromatics";

function App() {
  return (
    <div>
      <h1>Top 5 de flores aromáticas</h1>

      <Aromatics
        nombre="Orquídea"
        latin="Orchidaceae"
        descripcion="Las orquídeas son plantas florales de gran elegancia."
      />

      <Aromatics
        nombre="Jazmín"
        latin="Jasminum"
        descripcion="El jazmín es una planta aromática muy utilizada en perfumería."
      />
    </div>
  );
}

export default App;
