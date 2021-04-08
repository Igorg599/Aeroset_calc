import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import SmallHorizontalArrow from '../../assets/icons/SmallHorizontalArrow.svg';
import { Shape, Line, Figure, FirstArrow, SecondArrow, FormTrapezoidal, Result} from './styles';

function TrapezoidalShape() {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: number,
        perimeter: number,
        mediana: number,
        height: number
    }>({
        square: 0,
        perimeter: 0,
        mediana: 0,
        height: 0
    })

    const onValueMediana = (e: any) => {
        setCalculation({...calculation, mediana: e.target.value.replace(/[^0-9.]/g, '')});
    }

    const onValueHeight = (e: any) => {
        setCalculation({...calculation, height: e.target.value.replace(/[^0-9.]/g, '')});
    }

    calculation.square = Math.ceil((calculation.mediana * calculation.height) * 10) / 10;

    return (
      <Shape>
        <h2>{t('trapecoidal_shape')}</h2>
        <Line/>
        <Figure>
            <FormTrapezoidal>
                <FirstArrow src={SmallHorizontalArrow} alt="arrow" style={{ marginTop: 155, zIndex:11 }}/>
                <TextField
                    label={t('median')}
                    value={calculation.mediana === 0 ? null : calculation.mediana}
                    onChange={onValueMediana}
                    variant="outlined"
                    style={{ width: 112, marginTop: 155, zIndex:11 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </FormTrapezoidal>
            <SecondArrow top="2px" src={BigVerticalArrow} alt="arrow" style={{ marginLeft: 6 }}/>
            <TextField
                label={t('height')}
                value={calculation.height === 0 ? null : calculation.height}
                    onChange={onValueHeight}
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
                <p>{calculation.square}</p>
                <h4>{t('square_meters')}</h4>
            </div>
            <div style={{ marginLeft: 67 }}>
                <h3>{t('perimeter')}</h3>
                <p>{calculation.perimeter}</p>
                <h4>{t('meters')}</h4>
            </div>
        </Result>
      </Shape>
    );
}
  
export default TrapezoidalShape;