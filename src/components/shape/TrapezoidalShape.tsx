import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import BigHorizontalArrow from '../../assets/icons/BigHorizontalArrow.svg';
import SmallHorizontalArrow from '../../assets/icons/SmallHorizontalArrow.svg';
import { Shape, Line, Figure, FirstArrow, SecondArrow, ThirdArrow, FormTrapezoidal, Result} from './styles';

function TrapezoidalShape() {
    const {t} = useTranslation();

    return (
      <Shape>
        <h2>{t('trapecoidal_shape')}</h2>
        <Line/>
        <Figure>
            <FormTrapezoidal>
                <FirstArrow src={SmallHorizontalArrow} alt="arrow" style={{ marginTop: 155, zIndex:11 }}/>
                <TextField
                    label={t('median')}
                    id="outlined-size-normal"
                    variant="outlined"
                    style={{ width: 112, marginTop: 155, zIndex:11 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </FormTrapezoidal>
            <SecondArrow top="2px" src={BigVerticalArrow} alt="arrow"/>
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
        <ThirdArrow src={BigHorizontalArrow} alt="arrow" style={{ marginLeft: 6 }}/>
        <TextField
            label={t('width')}
            id="outlined-size-normal"
            variant="outlined"
            style={{ width: 112, top: 24, marginLeft: 32 }}
            InputProps={{
                endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
            }}
        />
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
  
export default TrapezoidalShape;