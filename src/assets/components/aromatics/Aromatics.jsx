import "./Aromatics.css";

// 1. Aseguramos la ruta: de aromatics -> components -> assets -> img
const imagenes = import.meta.glob("../../img/*.png", {
  eager: true,
  import: "default",
});

// Esto te mostrará en la consola las llaves exactas que Vite creó
console.log("Rutas disponibles:", Object.keys(imagenes));

function Aromatics({ nombre, latin, imagen, descripcion, cuidados }) {
  // 2. La ruta aquí DEBE ser idéntica a la del glob de arriba
  const rutaBusqueda = `../../img/${imagen}.png`;
  const imagenSrc = imagenes[rutaBusqueda];

  return (
    <div className="aromatic-card">
      {imagenSrc ? (
        <img
          className="aromatic-image"
          src={imagenSrc}
          alt={`Foto de ${nombre}`}
        />
      ) : (
        <p>Imagen no encontrada: {imagen}.png</p>
      )}

      <div className="aromatic-info">
        <h2>{nombre}</h2>
        <p className="aromatic-latin"><em>{latin}</em></p>
        <p className="aromatic-description">{descripcion}</p>
        <p className="aromatic-care"><strong>Cuidados:</strong> {cuidados}</p>
      </div>
    </div>
  );
}

export default Aromatics;

