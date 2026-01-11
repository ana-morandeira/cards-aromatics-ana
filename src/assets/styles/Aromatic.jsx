/* Contenedor de cada tarjeta */
.aromatic-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

/* Imagen */
.aromatic-card img {
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  align-self: center;
}

/* Texto */
.aromatic-info h2 {
  margin: 0;
  font-size: 1.4rem;
}

.aromatic-info p {
  margin: 0.3rem 0;
  line-height: 1.4;
}

/* --- Responsive --- */
@media (min-width: 768px) {
  .aromatic-card {
    flex-direction: row;
    align-items: center;
  }

  .aromatic-info {
    padding-left: 1.5rem;
  }

  .aromatic-card img {
    max-width: 200px;
  }
}
