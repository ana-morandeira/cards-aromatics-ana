import Navbar from './assets/components/Navbar';
import Aromatics from "./assets/components/Aromatics";
import Footer from './assets/components/Footer';
import "./App.css";

function App() {
  return (
     <>
     <Navbar />

    <div className="app-container">
     
      <h1>Top 5 de flores aromáticas</h1>

      <Aromatics
        nombre="Orquídea"
        latin="Orchidaceae"
        imagen="orquidea"
        descripcion="Las orquídeas son plantas florales de gran elegancia y diversidad, conocidas por la complejidad y simetría de sus flores. Existen miles de especies distintas, con una amplia variedad de formas, tamaños y colores. Muchas de ellas se adaptan muy bien a espacios interiores, siempre que reciban luz indirecta y cuidados adecuados. Son muy valoradas como plantas ornamentales por su belleza duradera y su capacidad para aportar un toque sofisticado a cualquier ambiente."
        cuidados="Las orquídeas requieren un ambiente con buena circulación de aire y luz indirecta."
      />
      <Aromatics
        nombre="Jazmín"
        latin="Jasminum"
        imagen="jazmin"
        descripcion="El jazmín es una planta aromática muy apreciada por el intenso y agradable perfume de sus flores, especialmente durante la noche. Sus flores, generalmente blancas, se utilizan desde hace siglos en perfumería, aromaterapia y cosmética natural. Además de su valor ornamental, el jazmín está asociado a efectos relajantes y calmantes, por lo que suele emplearse en infusiones y aceites esenciales destinados a reducir el estrés y favorecer el descanso."
        cuidados="El jazmín prefiere suelos bien drenados y exposición a pleno sol o sombra parcial."
      />

      <Aromatics
        nombre="Iberis"
        latin="Iberis sempervirens"
        imagen="iberis"
        descripcion="El iberis es una planta aromática de pequeño tamaño que destaca por sus delicadas flores blancas o ligeramente rosadas. Se utiliza con frecuencia en jardinería ornamental, tanto en macetas como en borduras, debido a su resistencia y facilidad de mantenimiento. Su aroma es suave y agradable, lo que la convierte en una opción ideal para espacios exteriores donde se busca una presencia discreta pero elegante."
        cuidados="El iberis prefiere suelos bien drenados y exposición a pleno sol o sombra parcial."
      />

      <Aromatics
        nombre="Flor de la pasión"
        latin="Passiflora"
        imagen="pasionaria"
        descripcion="La flor de la pasión, también conocida como pasionaria, es una planta trepadora de aspecto exótico y muy llamativo. Sus flores presentan una estructura compleja con filamentos de colores intensos que la hacen fácilmente reconocible. Tradicionalmente, esta planta se ha utilizado por sus propiedades calmantes y relajantes, siendo común en preparados naturales destinados a aliviar la ansiedad y favorecer el sueño."
        cuidados="La flor de la pasión requiere un lugar soleado y protegido del viento."
      />

      <Aromatics
        nombre="Madreselva"
        latin="Lonicera"
        imagen="madreselva"
        descripcion="La madreselva es una planta aromática conocida por el dulce y penetrante aroma de sus flores, especialmente perceptible al atardecer. Crece habitualmente como planta trepadora y se utiliza tanto con fines ornamentales como por sus propiedades tradicionales en remedios naturales. Su fragancia intensa la convierte en una opción muy popular para jardines y espacios exteriores donde se busca estimular los sentidos."
        cuidados="La madreselva prospera en suelos bien drenados y con exposición a pleno sol o sombra parcial."
      />
    </div>
    <Footer />
    </>
  );
}

export default App;

