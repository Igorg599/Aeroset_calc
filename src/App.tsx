import styled from 'styled-components';
import {useTranslation} from "react-i18next";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #E8E8E8;
  padding: 20px 16px;
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.5px;
    color: #3A3A3A;
  }
`;

function App() {
  const {t} = useTranslation();

  return (
    <AppWrapper>
      <h1>{t('drift_cross_section_parameters')}</h1>
    </AppWrapper>
  );
}

export default App;

