import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import Carousell from './components/Carousel/Carousel';

import { images } from './assets';


import './App.css';


function App() {
  const Images = [images.os, images.lebonProf, images.about04]

  const text_os = { title: 'Zakat', text: 'fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc' }
  const text_LBP = { title: 'Zakat Al Fitre', text: 'fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdcfhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc' }

  return (
    <div className="App">
      <NavBar />
      <Carousell images={Images} />
      <Post image={images.os} text={text_os} isImageRight={true} index='1' />
      <Post image={images.lebonProf} text={text_LBP} isImageRight={false} index='2' />
      <Post image={images.about04} text={text_LBP} isImageRight={true} index='3' />

    </div>
  );
}

export default App;
