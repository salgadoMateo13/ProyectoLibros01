export const LibroListar = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-primary">
            <thead>
              <tr>
                <th style={{width: "5%"}}>No.</th>
                <th style={{width: "35%"}}>Título de libro</th>
                <th style={{width: "30%"}}>Autor</th>
                <th style={{width: "15%"}} className="text-center">ISBN</th>
                <th style={{width: "15%"}}>Editorial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cien años de soledad</td>
                <td>Gabriel Garcia Marquez</td>
                <td className="text-center">778888888</td>
                <td>Sudamericana</td>
              </tr>
              <tr>
                <td>2</td>
                <td>La casa de los espíritus</td>
                <td>Isabel Allende</td>
                <td className="text-center">788888888</td>
                <td>Rama</td>
              </tr>
              <tr>
                <td>3</td>
                <td>El Tunel</td>
                <td>Ernesto Sabato</td>
                <td className="text-center">989623233</td>
                <td>Planeta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
