import Gamburger from '../gamburger/Gamburger';
import {useTranslation} from "react-i18next";
import { ArchedShape, RectangularShape, TrapezoidalShape, RoundShape } from '../shape';
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
        <TrapezoidalShape/>
        <RoundShape/>
      </Forms>
    </AppWrapper>
  );
}

export default App;
