import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import estoqueImg from '../../assets/Estoqueind.png';
import industriaImg from '../../assets/industria.png';

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
        return dolarImg;
      case 'estoque':
        return estoqueImg;
      case 'industria':
        return industriaImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
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
