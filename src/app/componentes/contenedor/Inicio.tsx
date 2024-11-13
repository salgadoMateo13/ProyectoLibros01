export const Inicio = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            Bienvenidos a el Mundo de las Letras
          </h1>
          <p className="col-md-8 fs-4">
            En el mundo de las letras, nos apasiona el mundo de los libros y
            creemos firmemente en el poder transformador de la lectura. Nuestra
            misión es conectar a los lectores con historias que inspiran, educan
            y entretienen, ofreciendo una amplia selección de libros para todos
            los gustos y edades.
          </p>
          <h1 className="display-5 fw-bold">Un recuento de nuestra Historia</h1>
          <p className="col-md-8 fs-4">
            Fundada en [Año de Fundación], el mundo de las letras nació del amor
            por la literatura y el deseo de crear una comunidad de lectores.
            Comenzamos como una pequeña librería en Barranquilla, y con el
            tiempo, hemos crecido para convertirnos en una plataforma en línea
            que llega a lectores de todo el mundo.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Qué Ofrecemos</h2>
              <p>
                ofrecemos una variedad de libros que abarca desde ficción y no
                ficción hasta libros infantiles y académicos, asegurando que
                tenemos algo para cada lector. Nuestro equipo de expertos en
                libros está aquí para proporcionarte recomendaciones
                personalizadas y ayudarte a encontrar tu próxima gran lectura.
                Además, organizamos eventos literarios, talleres de escritura y
                clubes de lectura para fomentar el amor por los libros. No te
                pierdas nuestro blog literario, donde podrás descubrir reseñas,
                entrevistas con autores y artículos sobre el fascinante mundo de
                la literatura.
              </p>
              <button className="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Nuestro Compromiso</h2>
              <p>
                Nos comprometemos a ofrecer un servicio excepcional y a apoyar a
                nuestros clientes en su viaje literario. Creemos en la
                importancia de la lectura como una herramienta para el
                crecimiento personal y el desarrollo intelectual.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
