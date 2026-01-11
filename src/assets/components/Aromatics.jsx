const imagenes = import.meta.glob("../img/*.png", {
  eager: true,
  import: "default",
});

function Aromatics(props) {
  const imagen = imagenes[`../img/${props.imagen}.png`];

  return (
    <div className="aromatics-card">
      {imagen && (
        <img
          src={imagen}
          alt={`Foto de ${props.nombre}`}
          width="200"
        />
      )}
<div className="aromatics-info">
      <h2>{props.nombre}</h2>
      <p><em>{props.latin}</em></p>
      <p>{props.descripcion}</p>
    </div>
    </div>
  );
}

export default Aromatics;

