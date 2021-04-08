import {useTranslation} from "react-i18next";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BigVerticalArrow from '../../assets/icons/BigVerticalArrow.svg';
import SmallVerticalArrow from '../../assets/icons/SmallVerticalArrow.svg';
import BigHorizontalArrow from '../../assets/icons/BigHorizontalArrow.svg';
import { Shape, Line, Figure, FirstArrow, SecondArrow, ThirdArrow, Arch, Result} from './styles';

function ArchedShape() {
    const {t} = useTranslation();

    return (
      <Shape>
        <h2>{t('arched_shape')}</h2>
        <Line/>
        <Figure>
            <Arch>
                <FirstArrow src={BigVerticalArrow} alt="arrow"/>
                <TextField
                    label={t('height')}
                    id="outlined-size-normal"
                    variant="outlined"
                    style={{ width: 112 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                    }}
                />
            </Arch>
            <SecondArrow src={SmallVerticalArrow} alt="arrow"/>
            <TextField
                label={t('height')}
                id="outlined-size-normal"
                variant="outlined"
                style={{ width: 112, top: 98, marginLeft: 16 }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{t('meters')}</InputAdornment>,
                }}
            />
        </Figure>
        <ThirdArrow src={BigHorizontalArrow} alt="arrow"/>
        <TextField
            label={t('width')}
            id="outlined-size-normal"
            variant="outlined"
            style={{ width: 112, top: 24, marginLeft: 28 }}
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
  
export default ArchedShape;