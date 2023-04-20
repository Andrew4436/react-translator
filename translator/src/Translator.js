import { useState, useEffect, useRef } from "react";
import "./style.css";
import img from "./imgs/image-removebg-preview (11).png";

function Translator() {
  const translateRef = useRef();
  const translateToRef = useRef();
  let language1Ref = useRef();
  let language2Ref = useRef();
  const [translation, setTranslation] = useState();

  async function translate() {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${translateRef.current.value}!&langpair=${language1Ref.current.value}|${language2Ref.current.value}`
    );
    if (res.ok) {
      const jsonData = await res.json();
      setTranslation(jsonData);
    }
  }

  useEffect(() => {
    if(translation) {
      console.log(translation);

      translation.responseStatus === 403 ? translateToRef.current.value = 'Error' : translateToRef.current.value = translation.matches[0].translation
    }
  }, [translation])

  function swap() {
    const l1 = language1Ref.current.value
    language1Ref.current.value = language2Ref.current.value
    language2Ref.current.value = l1

    if(translateRef.current.value && translateToRef.current.value) {
      const t = translateRef.current.value
      translateRef.current.value =  translateToRef.current.value
      translateToRef.current.value = t
    }
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="translator-body">
        <div>
          <div className="language-selection">
            <select className="language" ref={language1Ref}>
              <option>Abkhazian</option>
              <option>Avestan</option>
              <option>Afrikaans</option>
              <option>Akan</option>
              <option>Amharic</option>
              <option>Aragonese</option>
              <option>Arabic</option>
              <option>Assamese</option>
              <option>Avaric</option>
              <option>Aymara</option>
              <option>Azerbaijani</option>
              <option>Bashkir</option>
              <option>Belarusian</option>
              <option>Bulgarian</option>
              <option>Bihari</option>
              <option>Bislama</option>
              <option>Bambara</option>
              <option>Bengali</option>
              <option>Tibetan</option>
              <option>Breton</option>
              <option>Bosnian</option>
              <option>Catalan</option>
              <option>Chechen</option>
              <option>Chamorro</option>
              <option>Corsican</option>
              <option>Cree</option>
              <option>Czech</option>
              <option>Church</option>
              <option>Chuvash</option>
              <option>Welsh</option>
              <option>Danish</option>
              <option>German</option>
              <option>Divehi</option>
              <option>Dzongkha</option>
              <option>Ewe</option>
              <option>Greek</option>
              <option>English</option>
              <option>Esperanto</option>
              <option>Spanish</option>
              <option>Estonian</option>
              <option>Basque</option>
              <option>Persian</option>
              <option>Fulah</option>
              <option>Finnish</option>
              <option>Fijian</option>
              <option>Faroese</option>
              <option>French</option>
              <option>Western</option>
              <option>Irish</option>
              <option>Scottish</option>	
              <option>Galician</option>
              <option>Guarani</option>
              <option>Gujarati</option>
              <option>Manx</option>
              <option>Hausa</option>
              <option>Hebrew</option>
              <option>Hindi</option>
              <option>Hiri</option>	
              <option>Croatian</option>
              <option>Haitian</option>	
              <option>Hungarian</option>
              <option>Armenian</option>
              <option>Herero</option>
              <option>Interlingua</option>
              <option>Indonesian</option>
              <option>Interlingue</option>
              <option>Igbo</option>
              <option>Sichuan</option>
              <option>Inupiaq</option>
              <option>Ido</option>
              <option>Icelandic</option>
              <option>Italian</option>
              <option>Inuktitut</option>
              <option>Japanese</option>
              <option>Javanese</option>
              <option>Georgian</option>
              <option>Kongo</option>
              <option>Kikuyu</option>
              <option>Kwanyama</option>
              <option>Kazakh</option>
              <option>Kalaallisut</option>
              <option>Khmer</option>
              <option>Kannada</option>
              <option>Korean</option>
              <option>Kanuri</option>
              <option>Kashmiri</option>
              <option>Kurdish</option>
            </select>

            <img onClick={swap} className="swap-img" src={img} />

            <select className="language" ref={language2Ref}>
              <option>Abkhazian</option>
              <option>Avestan</option>
              <option>Afrikaans</option>
              <option>Akan</option>
              <option>Amharic</option>
              <option>Aragonese</option>
              <option>Arabic</option>
              <option>Assamese</option>
              <option>Avaric</option>
              <option>Aymara</option>
              <option>Azerbaijani</option>
              <option>Bashkir</option>
              <option>Belarusian</option>
              <option>Bulgarian</option>
              <option>Bihari</option>
              <option>Bislama</option>
              <option>Bambara</option>
              <option>Bengali</option>
              <option>Tibetan</option>
              <option>Breton</option>
              <option>Bosnian</option>
              <option>Catalan</option>
              <option>Chechen</option>
              <option>Chamorro</option>
              <option>Corsican</option>
              <option>Cree</option>
              <option>Czech</option>
              <option>Church</option>
              <option>Chuvash</option>
              <option>Welsh</option>
              <option>Danish</option>
              <option>German</option>
              <option>Divehi</option>
              <option>Dzongkha</option>
              <option>Ewe</option>
              <option>Greek</option>
              <option>English</option>
              <option>Esperanto</option>
              <option>Spanish</option>
              <option>Estonian</option>
              <option>Basque</option>
              <option>Persian</option>
              <option>Fulah</option>
              <option>Finnish</option>
              <option>Fijian</option>
              <option>Faroese</option>
              <option>French</option>
              <option>Western</option>
              <option>Irish</option>
              <option>Scottish</option>
              <option>Galician</option>
              <option>Guarani</option>
              <option>Gujarati</option>
              <option>Manx</option>
              <option>Hausa</option>
              <option>Hebrew</option>
              <option>Hindi</option>
              <option>Hiri</option>
              <option>Croatian</option>
              <option>Haitian</option>
              <option>Hungarian</option>
              <option>Armenian</option>
              <option>Herero</option>
              <option>Interlingua</option>
              <option>Indonesian</option>
              <option>Interlingue</option>
              <option>Igbo</option>
              <option>Sichuan</option>
              <option>Inupiaq</option>
              <option>Ido</option>
              <option>Icelandic</option>
              <option>Italian</option>
              <option>Inuktitut</option>
              <option>Japanese</option>
              <option>Javanese</option>
              <option>Georgian</option>
              <option>Kongo</option>
              <option>Kikuyu</option>
              <option>Kwanyama</option>
              <option>Kazakh</option>
              <option>Kalaallisut</option>
              <option>Khmer</option>
              <option>Kannada</option>
              <option>Korean</option>
              <option>Kanuri</option>
              <option>Kashmiri</option>
              <option>Kurdish</option>
            </select>
          </div>
          <div className="translate-results">
            <textarea className="translate" ref={translateRef} type="text" />
            <textarea className="translate-to" ref={translateToRef}>
  
            </textarea>
          </div>
          <button className="btn" onClick={translate}>Translate</button>
        </div>
      </div>
    </div>
  );
}

export default Translator;
