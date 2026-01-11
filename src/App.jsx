import Aromatics from "./assets/components/Aromatics";

function App() {
  return (
    <div>
      <h1>Top 5 de flores aromáticas</h1>

      <Aromatics
        nombre="Orquídea"
        latin="Orchidaceae"
        imagen="orquidea"
        descripcion="Las orquídeas son plantas florales de gran elegancia."
      />

      <Aromatics
        nombre="Jazmín"
        latin="Jasminum"
        imagen="jazmin"
        descripcion="El jazmín es una planta aromática muy utilizada en perfumería."
      />

      <Aromatics
        nombre="Iberis"
        latin="Iberis sempervirens"
        imagen="iberis"
        descripcion="El iberis es conocido por su fragancia dulce y delicada."
      />
      
      <Aromatics
        nombre="Flor de la pasión"
        latin="Passiflora"
        imagen="pasionaria" 
        descripcion="La flor de la pasión es famosa por su aroma relajante y sus propiedades medicinales."
      />  
      <Aromatics
      nombre="Madreselva"
      latin="Lonicera"
      imagen="madreselva"
      descripcion="La madreselva es apreciada por su fragancia intensa y dulce."
    />
        
    </div>
  );
}

export default App;
