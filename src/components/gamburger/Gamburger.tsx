import React from 'react';
import { Button, Menu } from './styles';

function Gamburger() {
  const[fond, setFond] = React.useState(false);

  const onPress = () => {
    if (document.documentElement.clientWidth >= 767)
      setFond(!fond);
  }

  return (
    <Button style={ fond ? {  background: "rgba(0, 163, 197, 0.12)" } : {  background: "none" }}>
      <Menu onClick={onPress}>
          <span/>
          <span/>
          <span/>
      </Menu>
    </Button>
  );
}
  
export default Gamburger;