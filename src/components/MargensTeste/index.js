import React, { useState, useEffect, useMemo } from 'react';

import { apiFabrica } from '../../services/apis';
import LayoutNovo from '../../components/LayoutNovo';
import debounce from '../../utils/debounce';
import { useCotacao } from '../../hooks/cotacao';
import BaseTable, { Column } from 'react-base-table'

import WalletBox from '../../components/WalletBox';
import NumberBox from '../../components/NumberBox';
import Loader from '../../components/Loader';
import MargensTabela from '../../components/Tabela/MargensTabela';
import columnDefinition from './utils/column-definition';
import { markersLocalization } from '../../utils/localizationUFs';

export default function Margem() {
  const [produtoLista, setProdutoLista] = useState([]); // Define uma propriedade do componente com useState.
  const [removeLoading, setRemoveLoading] = useState(false);
  const [filtro, setFiltro] = useState({
    descricao: null,
    codigo: null,
    local: null,
  });

  const { dollar } = useCotacao();

  const totalDollar = useMemo(() => {
    let total = 0;
    let qdtprodutos_ = 0;
    let fatorx_ = 0;
    let customdx_ = 0;
    let qtdlinhasx_ = 0;
    let precomdx_ = 0;
    let dolarprecox_ = 0;
    let sugestaox_ = 0;
    let qtdinvoices_ = 0;
    let qtdvendas_ = 0;

    produtoLista.forEach((item) => (qtdinvoices_ += item.invoice));
    produtoLista.forEach((item) => (total += item.usd));
    produtoLista.forEach((item) => (qtdvendas_ += item.vendasTri));
    produtoLista.forEach((item) => (customdx_ += item.custo * item.disponivel));
    produtoLista.forEach((item) => (qdtprodutos_ += item.disponivel));
    produtoLista.forEach((item) => (fatorx_ += item.precoMedio / item.custo));
    produtoLista.forEach((item) => (qtdlinhasx_ += item.id));
    produtoLista.forEach(
      (item) => (sugestaox_ += parseFloat(item.sugestaoTri))
    );
    produtoLista.forEach(
      (item) => (precomdx_ += item.precoMedio * item.disponivel)
    );
    produtoLista.forEach(
      (item) => (dolarprecox_ += item.preco * item.disponivel)
    );
    return {
      dolar: new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 2,
      }).format(total),
      brl: new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(
        total * dollar?.bid
      ),
      qtdprodutos: qdtprodutos_,
      fatorx: fatorx_,
      custo_blr: customdx_,
      custo_dolar: customdx_ / dollar?.bid,
      preco_md_blr: precomdx_,
      preco_md_dolar: precomdx_ / dollar?.bid,
      sugestao: sugestaox_ * 1.35,
      invoices: qtdinvoices_,
      vendas: qtdvendas_,
    };
  }, [dollar?.bid, produtoLista]);

  useEffect(() => {
    handleFetch();
  }, [dollar, filtro]);

  const handleFetch = async () => {
    try {
      const response = await apiFabrica.get('/Estoque', { params: filtro });
      setProdutoLista(
        response.data.map((item) => {
          let _diasEstoque = 0;
          if (item.vendasTri !== 0)
            _diasEstoque = (item.saldo / (item.vendasTri / 90)).toFixed(0);

          return {
            id: item.id,
            codigo: item.codigo,
            disponivel: item.disponivel,
            pendente: item.pendente,
            reserva: item.reserva,
            descricao: item.descricao,
            saldo: item.saldo,
            preco: item.preco,
            custo: item.custo,
            precoMedio: item.precoMedio,
            fator: item.precoMedio / item.custo,
            // usd: item.usd * item.saldo,
            // blr: item.saldo * item.usd * dollar?.bid,
            usd: (item.disponivel * item.preco) / dollar?.bid,
            blr: item.disponivel * item.preco,
            sugestaoTri: (item.sugestaoTri * 1.35).toFixed(2),
            vendasTri: item.vendasTri,
            //   vendasAno: item.vendasAno,
            invoice: item.invoice,
            local: item.local,
            diasEstoque: _diasEstoque,
          };
        })
      );
    } catch (err) {
      alert('Erro grave - não carregou a tabela!!');
    } finally {
      setRemoveLoading(true);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.target.reset();
    setFiltro({ descricao: null, codigo: null, local: null });
  };



  return (
    <LayoutNovo>
      {/* <form onSubmit={handleClear}>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <NumberBox
              title="Total de Invoices"
              backcolor="#2F4F4F"
              amount={totalDollar.invoices}
              footerlabel="considerando os armazens filtrados"
              icon="industria"
            />
            <NumberBox
              title="Total de Vendas 90 dias"
              backcolor="#D2691E"
              amount={totalDollar.vendas}
              footerlabel="considerando os armazens filtrados"
              icon="industria"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <NumberBox
              title="Total de Produtos"
              backcolor="#0000FF"
              amount={Number(totalDollar.qtdprodutos)}
              footerlabel="considerando os armazens filtrados"
              icon="industria"
            />
            <NumberBox
              title="Total de Sugestão"
              backcolor="#FF4500"
              amount={Number(totalDollar.sugestao)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <WalletBox
              title="Total em Reais (Preco Medio)"
              backcolor="#006400"
              amount={parseFloat(totalDollar.preco_md_blr)}
              footerlabel="considerando os armazens filtrados"
              icon="arrowUp"
            />
            <WalletBox
              title="Total em Reais (Custo Medio Inv.)"
              backcolor="#FFA500"
              amount={parseFloat(totalDollar.custo_blr)}
              footerlabel="considerando os armazens filtrados"
              icon="arrowDown"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <WalletBox
              title="Total em Dolar (Preço Medio)"
              backcolor="#800000"
              amount={parseFloat(totalDollar.preco_md_dolar)}
              footerlabel="considerando os armazens filtrados"
              icon="dolar"
            />
            <WalletBox
              title="Total em Dolar (Custo Medio Inv.)"
              backcolor="#FF4500"
              amount={parseFloat(totalDollar.custo_dolar)}
              footerlabel="considerando os armazens filtrados"
              icon="dolar"
            />
          </div>
        </div>
        <div className="row">
          <h2>Produtos Analises</h2>
          <div className="col-md-3">
            <label>Descricao</label>
            <input
              type="text"
              placeholder="Descricao"
              name="descricao"
              className="form-control"
              onChange={(e) =>
                debounce(() => {
                  setFiltro({ ...filtro, descricao: e.target.value });
                })
              }
            />
          </div>
          <div className="col-md-3">
            <label>Codigo</label>
            <input
              type="text"
              placeholder="Codigo"
              name="codigo"
              className="form-control"
              onChange={(e) =>
                debounce(() => {
                  setFiltro({ ...filtro, codigo: e.target.value });
                })
              }
            />
          </div>
          <div className="col-md-3">
            <label>Armazem</label>
            <input
              type="text"
              placeholder="Local"
              name="local"
              className="form-control"
              onChange={(e) =>
                debounce(() => {
                  setFiltro({ ...filtro, local: e.target.value });
                })
              }
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-warning my-4" type="submit">
              <i className="fas fa-trash me-2"></i>
              Clear
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div style={{ height: 600, width: '100%', overflow: 'scroll' }}>
              <MargensTabela margens={produtoLista} />
              <div className="col-md-12">{!removeLoading && <Loader />}</div>
            </div>
          </div>
        </div>
      </form> */}
<BaseTable data={produtoLista} width={600} height={400}>
  <Column key="col0" dataKey="col0" width={100} />
  <Column key="col1" dataKey="col1" width={100} />
</BaseTable>
 
    </LayoutNovo>
  );
}
