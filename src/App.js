import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import Carousell from './components/Carousel/Carousel';
import { images } from './assets';
import './App.css';
import Footer from './Footer/Footer';


function App() {
  const Images = [images.image1, images.image2, images.image3]

  const text_os = { title: 'Zakat', text: 'fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc' }
  const text_LBP = { title: 'Zakat Al Fitre', text: 'fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc fhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdcfhzu zejkcfn jncd zmjoenc omnzqc amocn mozncd qmojdnc monqdc monqcd omnqsdc' }

  return (
    <div className="App">
      <NavBar />
      <Carousell images={Images} />
   <div className="post-container">
  <Post image={images.image1} text={text_os} isImageRight={true} index='1' />
  <Post image={images.image2} text={text_LBP} isImageRight={false} index='2' />
  <Post image={images.image3} text={text_LBP} isImageRight={true} index='3' />
</div>

      <Footer/>

    </div>
  );
}

export default App;
