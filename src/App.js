import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {

  const [lineaSuperior, setLineaSuperior] = useState('');
  const [lineaInferior, setLineaInferior] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLineaSuperior = function(event) {
    setLineaSuperior(event.target.value);
  }

  const onChangeLineaInferior = function(event) {
    setLineaInferior(event.target.value);
  }

  const onChangeImagen = function(event) {
    setImagen(event.target.value);
  }

  const onClickExportar = function(event) {
    html2canvas(document.querySelector("#divMeme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="futurama">Futurama</option>
        <option value="smart">Smart Nigga</option>
        <option value="history">History chanel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="fire">House in fire</option>
      </select>
      <br/>
      <input onChange={onChangeLineaSuperior} type="text" placeholder="Ingrese la linea superior"/>
      <br/>
      <input onChange={onChangeLineaInferior} type="text" placeholder="Ingrese la linea inferior"/>
      <br/>
      <button onClick={onClickExportar}>Exportar meme</button>
      <br/>
      <div className="divMeme" id="divMeme">
        <span>{lineaSuperior}</span> <br/>
        <span>{lineaInferior}</span>
        <img src={"/img/"+ imagen +".jpg"}/>
      </div>
    </div>
  );
}

export default App;
