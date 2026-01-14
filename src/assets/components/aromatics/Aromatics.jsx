import "../styles/Aromatics.css";

const imagenes = import.meta.glob("../img/*.png", {
  eager: true,
  import: "default",
});

function Aromatics({ nombre, latin, imagen, descripcion, cuidados }) {
  const imagenSrc = imagenes[`../img/${imagen}.png`];

  return (
    <div className="aromatic-card">
      {imagenSrc && (
        <img
          className="aromatic-image"
          src={imagenSrc}
          alt={`Foto de ${nombre}`}
        />
      )}

      <div className="aromatic-info">
        <h2>{nombre}</h2>
        <p className="aromatic-latin">
          <em>{latin}</em>
        </p>
        <p className="aromatic-description">{descripcion}</p>
        <p className="aromatic-care">
         <strong>Cuidados:</strong> {cuidados}
</p>

      </div>
    </div>
  );
}

export default Aromatics;

