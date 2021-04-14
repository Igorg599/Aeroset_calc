import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import SmallHorizontalArrow from '../../assets/icons/SmallHorizontalArrow.svg';
import { Shape, Line, Figure, FirstArrow, SecondArrow, FormTrapezoidal, Result, theme} from './styles';
import { ThemeProvider } from '@material-ui/core/styles';

interface PropsTab {
    active: number
}

function TrapezoidalShape({active}: PropsTab) {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: string,
        perimeter: string,
        mediana: number,
        height: number
    }>({
        square: '0',
        perimeter: '0',
        mediana: 0,
        height: 0
    })

    const [stateFocus, setStateFocus] = React.useState<{
        focusInputHeight: boolean,
        focusInputMediana: boolean,
    }>({
        focusInputHeight: false,
        focusInputMediana: false
    })

    const onValueMediana = (e: any) => {
        setCalculation({...calculation, mediana: e.target.value});
    }

    const onValueHeight = (e: any) => {
        setCalculation({...calculation, height: e.target.value});
    }

    if (!calculation.mediana || !calculation.height) {
        calculation.square = '0';
        calculation.perimeter = '0';
    } else {
        calculation.square = (Math.ceil((calculation.mediana * calculation.height) * 10) / 10).toString().replace('.', ',');
        calculation.perimeter = (Math.ceil((2 * calculation.mediana + 2 * calculation.height / 0.992546152) * 10) / 10).toString().replace('.', ',');
    }

    function onFocusHeight() {
        setStateFocus({...stateFocus, focusInputHeight: true})
    }

    function onBlurHeight() {
        setStateFocus({...stateFocus, focusInputHeight: false})
    }

    function onFocusMediana() {
        setStateFocus({...stateFocus, focusInputMediana: true})
    }

    function onBlurMediana() {
        setStateFocus({...stateFocus, focusInputMediana: false})
    }

    return (
      <Shape style={ active === 0 || active === 4 ? {  display: "block" } : {  display: "none" }}>
        <h2>{t('trapecoidal_shape')}</h2>
        <Line/>
        <Figure>
            <FormTrapezoidal>
                <FirstArrow src={SmallHorizontalArrow} alt="arrow" style={{ marginTop: 155, zIndex:11 }}/>
                <ThemeProvider theme={theme}>
                    <TextField
                        label={t('median')}
                        value={calculation.mediana === 0 ? '' : calculation.mediana}
                        onChange={onValueMediana}
                        type='number'
                        variant="outlined"
                        style={{ width: 112, marginTop: 155, zIndex:11 }}
                        onFocus={onFocusMediana}
                        onBlur={onBlurMediana}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{stateFocus.focusInputMediana || calculation.mediana ? t('meters') : ''}</InputAdornment>,
                        }}
                    />
                </ThemeProvider>
            </FormTrapezoidal>
            <SecondArrow top="2px" src={BigVerticalArrow} alt="arrow" style={{ marginLeft: 6 }}/>
            <ThemeProvider theme={theme}>
                <TextField
                    label={t('height')}
                    value={calculation.height === 0 ? '' : calculation.height}
                    onChange={onValueHeight}
                    type='number'
                    variant="outlined"
                    style={{ width: 112, top: 54, marginLeft: 16 }}
                    onFocus={onFocusHeight}
                    onBlur={onBlurHeight}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{stateFocus.focusInputHeight || calculation.height ? t('meters') : ''}</InputAdornment>,
                    }}
                />
            </ThemeProvider>
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