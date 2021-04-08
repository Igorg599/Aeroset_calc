import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import BigHorizontalArrow from '../../assets/icons/BigHorizontalArrow.svg';
import { Shape, Line, Figure, SecondArrow, ThirdArrow, Result, Arch} from './styles';

function RectangularShape() {
    const {t} = useTranslation();

    return (
      <Shape>
        <h2>{t('rectangular_shape')}</h2>
        <Line/>
        <Figure>
            <Arch rectangular>
                <ThirdArrow src={BigHorizontalArrow} alt="arrow"/>
                <TextField
                    label={t('width')}
                    id="outlined-size-normal"
                    variant="outlined"
                    style={{ width: 112 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </Arch>
            <SecondArrow rectangular src={BigVerticalArrow} alt="arrow"/>
            <TextField
                label={t('height')}
                id="outlined-size-normal"
                variant="outlined"
                style={{ width: 112, top: 54, marginLeft: 16 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                }}
            />
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
  
export default RectangularShape;