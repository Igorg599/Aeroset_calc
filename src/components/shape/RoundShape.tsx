import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import { Shape, Line, Figure, FirstArrow, Form, Result} from './styles';

function RoundShape() {
    const {t} = useTranslation();

    return (
      <Shape>
        <h2>{t('round_shape')}</h2>
        <Line/>
        <Figure>
            <Form radius="84px">
                <FirstArrow src={BigVerticalArrow} alt="arrow"/>
                <TextField
                    label={t('diameter')}
                    id="outlined-size-normal"
                    variant="outlined"
                    style={{ width: 112, marginBottom: 6 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </Form>
        </Figure>
        <Result>
            <div>
                <h3>{t('area')}</h3>
                <p>12</p>
                <h4>{t('square_meters')}</h4>
            </div>
            <div style={{ marginLeft: 67 }}>
                <h3>{t('perimeter')}</h3>
                <p>12</p>
                <h4>{t('meters')}</h4>
            </div>
        </Result>
      </Shape>
    );
}
  
export default RoundShape;