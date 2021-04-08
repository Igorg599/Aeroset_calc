import React from 'react';
import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import SmallVerticalArrow from '../../assets/icons/SmallVerticalArrow.svg';
import BigHorizontalArrow from '../../assets/icons/BigHorizontalArrow.svg';
import { Shape, Line, Figure, FirstArrow, SecondArrow, ThirdArrow, Form, Result} from './styles';

function ArchedShape() {
    const {t} = useTranslation();

    const [calculation, setCalculation] = React.useState<{
        square: number,
        perimeter: number,
        bigHeight: number,
        smallHeight: number,
        width: number
    }>({
        square: 0,
        perimeter: 0,
        bigHeight: 0,
        smallHeight: 0,
        width: 0
    })

    const onValueBigHeight = (e: any) => {
        setCalculation({...calculation, bigHeight: e.target.value.replace(/[^0-9.]/g, '')});
    }

    const onValueSmallHeight = (e: any) => {
        setCalculation({...calculation, smallHeight: e.target.value.replace(/[^0-9.]/g, '')});
    }

    const onValueWidth = (e: any) => {
        setCalculation({...calculation, width: e.target.value.replace(/[^0-9.]/g, '')});
    }

    if (!calculation.smallHeight) {
        calculation.square = 0
    } else {
        calculation.square = Math.ceil(((calculation.smallHeight * calculation.width) + ((calculation.width / 2) * (calculation.width / 2) / 2 * 3.1415926535)) * 10) / 10;  
    }

    return (
      <Shape>
        <h2>{t('arched_shape')}</h2>
        <Line/>
        <Figure>
            <Form radius="84px 84px 0 0">
                <FirstArrow src={BigVerticalArrow} alt="arrow"/>
                <TextField
                    label={t('height')}
                    value={calculation.bigHeight === 0 ? null : calculation.bigHeight}
                    onChange={onValueBigHeight}
                    variant="outlined"
                    style={{ width: 112, marginBottom: 8 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </Form>
            <SecondArrow top="85px" src={SmallVerticalArrow} alt="arrow"/>
            <TextField
                label={t('height')}
                variant="outlined"
                value={calculation.smallHeight === 0 ? null : calculation.smallHeight}
                onChange={onValueSmallHeight}
                style={{ width: 112, top: 98, marginLeft: 16 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                }}
            />
        </Figure>
        <ThirdArrow src={BigHorizontalArrow} alt="arrow" style={{ marginLeft: 2 }}/>
        <TextField
            label={t('width')}
            variant="outlined"
            value={calculation.width === 0 ? null : calculation.width}
            onChange={onValueWidth}
            style={{ width: 112, top: 24, marginLeft: 28 }}
            InputProps={{
                endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
            }}
        />
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
  
export default ArchedShape;