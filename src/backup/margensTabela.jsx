import React, { useContext, useState } from 'react';
import useSortableData from '../../../utils/sortable';
import { FixedSizeList as List } from 'react-window';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import {VirtualTable} from '../../../context/VirtualTable'
// import { FaCommentDollar } from 'react-icons/fa';
// import { VscError } from 'react-icons/vsc';
import { TbHandStop } from 'react-icons/tb';
import { FcApproval } from 'react-icons/fc';
// import {
//   BsFillArrowUpCircleFill,
//   BsFillArrowDownCircleFill,
// } from 'react-icons/bs';

import './styles.css';

const MargensTabela = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.margens);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  
  function Row() {
    return (
      <tr>
        {/** Make sure your table rows are the same height as what you passed into the list... */}
        <td style={{ height: '36px' }}>Row</td>
        <td>Col 2</td>
        <td>Col 3</td>
        <td>Col 4</td>
      </tr>
    )
  }
  

  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark mt-3">
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('codigo')}
              className={getClassNamesFor('codigo')}
            >
              Código
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('descricao')}
              className={getClassNamesFor('descricao')}
            >
              Descrição
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('diasEstoque')}
              className={getClassNamesFor('diasEstoque')}
            >
              Dias Stk
            </button>
          </th>
          <th>
            <button
            // type="button"
            // onClick={() => requestSort("diasEstoque")}
            // className={getClassNamesFor("diasEstoque")}
            >
              Icon
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('saldo')}
              className={getClassNamesFor('saldo')}
            >
              Saldo
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('preco')}
              className={getClassNamesFor('preco')}
            >
              Preço
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('precoMedio')}
              className={getClassNamesFor('precoMedio')}
            >
              Preço Medio
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('custo')}
              className={getClassNamesFor('custo')}
            >
              Custo Medio Inv.
            </button>
          </th>
          {/* <th>
            <button
              type="button"
              onClick={() => requestSort("fator")}
              className={getClassNamesFor("fator")}
            >
              Fator
            </button>
          </th> */}
          {/* <th>
            <button
              type="button"
              onClick={() => requestSort("pos")}
              className={getClassNamesFor("pos")}
            >
              Pos.
            </button>
          </th> */}
          <th>
            <button
            // type="button"
            // onClick={() => requestSort("pos")}
            // className={getClassNamesFor("pos")}
            >
              Icon
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('sugestao')}
              className={getClassNamesFor('sugestao')}
            >
              Sugestão
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('vendastri')}
              className={getClassNamesFor('vendastri')}
            >
              Vendas-90D
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('invoices')}
              className={getClassNamesFor('invoices')}
            >
              Invoices
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('local')}
              className={getClassNamesFor('local')}
            >
              Local
            </button>
          </th>
        </tr>
      </thead>
      <List
        itemsData={items}
        outerElementType="tbody"
        innerElementType="tr"
        itemCount={items.length}
        itemSize={10}
        height={700}
        width={1000}
      >
        {({ index, style }) => {
          return (
            <tr colSpan={13}>
              <td>{items[index].codigo}</td>
              <td>{items[index].descricao}</td>
              <td>{items[index].diasEstoque}</td>
              <td>
                {items[index].diasEstoque > 90 ? (
                  <>
                    <AiFillLike style={{ color: 'green' }} size={20} />
                  </>
                ) : (
                  <>
                    <AiFillDislike style={{ color: 'red' }} size={20} />
                  </>
                )}
              </td>
              <td>
                {String(items[index].saldo).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  '.'
                )}
              </td>
              <td>R${items[index].preco}</td>
              <td>R${items[index].precoMedio}</td>
              <td>R${items[index].custo}</td>
              {/* <td>{items[index].fator.toFixed(2)}</td> */}
              {/* <td>
      {items[index].fator > 2.0 ? (
        <BsFillArrowUpCircleFill style={{ color: "green" }} size={20} />
        ) : (
          <BsFillArrowDownCircleFill style={{ color: "red" }} size={20} />
          )}
        </td> */}
              <td>
                {(items[index].sugestaoTri - items[index].invoice).toFixed(0) >
                0 ? (
                  <>
                    <FcApproval style={{ color: 'green' }} size={24} />
                  </>
                ) : (
                  <TbHandStop style={{ color: 'red' }} size={24} />
                )}
              </td>
              <td>
                {(items[index].sugestaoTri - items[index].invoice).toFixed(0) >
                0
                  ? (items[index].sugestaoTri - items[index].invoice).toFixed(0)
                  : 0}
              </td>
              <td>
                {String(items[index].vendasTri).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  '.'
                )}
              </td>
              <td>
                {String(items[index].invoice).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  '.'
                )}
              </td>
              <td>{items[index].local}</td>
            </tr>
          );
        }}
      </List>
    </table>
  );
};

export default MargensTabela;
