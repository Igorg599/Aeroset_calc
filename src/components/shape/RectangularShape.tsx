import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import BigHorizontalArrow from '../../assets/icons/BigHorizontalArrow.svg';
import { Shape, Line, Figure, SecondArrow, ThirdArrow, Result, Form} from './styles';

interface PropsTab {
    active: number
}

function RectangularShape({active}: PropsTab) {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: number,
        perimeter: number,
        bigHeight: number,
        width: number
    }>({
        square: 0,
        perimeter: 0,
        bigHeight: 0,
        width: 0
    })

    const onValueBigHeight = (e: any) => {
        setCalculation({...calculation, bigHeight: e.target.value.replace(/[^0-9.]/g, '')});
    }

    const onValueWidth = (e: any) => {
        setCalculation({...calculation, width: e.target.value.replace(/[^0-9.]/g, '')});
    }

    if (!calculation.bigHeight || !calculation.width) {
        calculation.square = 0;
        calculation.perimeter = 0;
    } else {
        calculation.square = Math.ceil((calculation.bigHeight * calculation.width) * 10) / 10;
        calculation.perimeter = Math.ceil((calculation.bigHeight * 2 + calculation.width * 2) * 10) / 10;
    }

    return (
      <Shape style={ active === 0 || active === 2 ? {  display: "block" } : {  display: "none" }}>
        <h2>{t('rectangular_shape')}</h2>
        <Line/>
        <Figure>
            <Form radius="0">
                <ThirdArrow src={BigHorizontalArrow} style={{ marginBottom: 20, marginRight: 2 }} alt="arrow"/>
                <TextField
                    label={t('width')}
                    variant="outlined"
                    value={calculation.width === 0 ? null : calculation.width}
                    onChange={onValueWidth}
                    style={{ width: 112 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </Form>
            <SecondArrow top="2px" src={BigVerticalArrow} alt="arrow"/>
            <TextField
                label={t('height')}
                value={calculation.bigHeight === 0 ? null : calculation.bigHeight}
                onChange={onValueBigHeight}
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
  
export default RectangularShape;