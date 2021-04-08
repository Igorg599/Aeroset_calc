import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import { Shape, Line, Figure, FirstArrow, Form, Result} from './styles';

function RoundShape() {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: number,
        perimeter: number,
        diameter: number
    }>({
        square: 0,
        perimeter: 0,
        diameter: 0
    })

    const onValueDiameter = (e: any) => {
        setCalculation({...calculation, diameter: e.target.value.replace(/[^0-9.]/g, '')});
    }

    calculation.square = Math.ceil(((calculation.diameter / 2 ) * (calculation.diameter / 2 ) * 3.1415926535) * 10) / 10;

    calculation.perimeter = Math.ceil((2 * 3.1415926535 * calculation.diameter / 2) * 10) / 10;

    return (
      <Shape>
        <h2>{t('round_shape')}</h2>
        <Line/>
        <Figure>
            <Form radius="84px">
                <FirstArrow src={BigVerticalArrow} alt="arrow"/>
                <TextField
                    label={t('diameter')}
                    value={calculation.diameter === 0 ? null : calculation.diameter}
                    onChange={onValueDiameter}
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
  
export default RoundShape;