function SelecionaPaises() {
  return (
    <div>
      <h1>Selecione um país</h1>
      <p>Paises da Américado Norte</p>
      <select>
        <option>EUA</option>
        <option>CANADA</option>
        <option>MEXICO</option>
      </select>
    </div>
  );
}

function SelecionaIdiomas() {
  return (
    <div>
      <h1>Selecione um idioma</h1>
      <select>
        <option>PorTuguês</option>
        <option>ingles</option>
        <option>Alemão</option>
        <option>Frances</option>
        <option>Espanhol</option>
        <option>Crioulo</option>
        <option>Italiano</option>
        <option>Árabe</option>
        <option>Japonês</option>
      </select>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <SelecionaPaises />
      <SelecionaIdiomas />
    </div>
  );
}
