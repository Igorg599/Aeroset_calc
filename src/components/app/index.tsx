import Gamburger from '../gamburger/Gamburger';
import {useTranslation} from "react-i18next";
import ArchedShape from '../shape/ArchedShape';
import RectangularShape from '../shape/RectangularShape';
import { AppWrapper, Forms } from "./styles";


function App() {
  const {t} = useTranslation();

  return (
    <AppWrapper>
      <Gamburger/>
      <h1>{t('drift_cross_section_parameters')}</h1>
      <Forms>
        <ArchedShape/>
        <RectangularShape/>
      </Forms>
    </AppWrapper>
  );
}

export default App;
