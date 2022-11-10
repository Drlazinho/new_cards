import React, { useMemo } from 'react';
import CountUp from 'react-countup';
import { Target, Truck, Factory } from 'phosphor-react'

import { Container } from './styles';

// interface IWalletBoxProps {
//     title: string;
//     amount: number;
//     footerlabel: string;
//     icon: 'dolar' | 'arrowUp' | 'arrowDown';
//     color: string;
// }

const NumberBox = ({ title, amount, footerlabel, icon, backcolor }) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return <Target size={32} />
      case 'estoque':
        return <Factory size={32} />
      case 'industria':
        return <Truck size={32} />
      default:
        return undefined;
    }
  }, [icon]);

  return (
    <Container backcolor={backcolor}>
      <span>{title}</span>
      <h1>
        <strong>QTD </strong>
        <CountUp end={amount} separator="." decimal="," decimals={0} />
      </h1>
      <small>{footerlabel}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
};

export default NumberBox;
