import React, { useState, useEffect, useMemo } from 'react';
import { apiFabrica } from '../../services/apis';
import LayoutNovo from '../../components/LayoutNovo';
// import debounce from '../../utils/debounce';
import { useCotacao } from '../../hooks/cotacao';

import WalletBox from '../../components/WalletBox';
import PieChartBox from '../../components/PieChartBox';
import BarChartBox from '../../components/BarChartBox';
import NumberBox from '../../components/NumberBox';

import BreadCards from '../../components/BreadCards';
// import MessageBox from '../../components/MessageBox';

// import happyImg from '../../assets/happy.svg';
// import sadImg from '../../assets/sad.svg';
// import grinningImg from '../../assets/grinning.svg';
// import opsImg from '../../assets/ops.svg';

import Chart from 'react-apexcharts';
import converterDateCatoBr from '../../utils/converterDateCaToBr';
import useWindowDimensions from '../../hooks/viewportWindows';
import newDateFormatYearMonth from '../../utils/newDateFormatYearMonth';
import formatDateTotvs from '../../utils/formatDataTotvs';

export default function Dashboard() {
  const dateNow = new Date();

  const [produtoLista, setProdutoLista] = useState([]);
  const [windowsSize, setWindowSize] = useState(650);
  const [pedidoLista, setPedidoLista] = useState([]);

  const [data, setData] = useState({
    ano: dateNow.getFullYear(),
    mes: dateNow.getMonth() + 1,
  });

  const [producaoLista, setProducaoLista] = useState([]); // Define uma propriedade do componente com useState.
  const [entregaLista, setEntregaLista] = useState([]);
  const [dateDia] = useState(new Date()); // Define uma propriedade do componente com useState.
  const [filtro] = useState({
    descricao: null,
    dataproducao: dateNow.toLocaleDateString('en-CA'),
    datainicio: dateNow.toLocaleDateString('en-CA'),
    dataEntregas: `${data.ano}-${
      data.mes && (data.mes.toString().length < 2 ? '0' + data.mes : data.mes)
    }`,
  });
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 700) {
      setWindowSize(350);
    }
  }, []);
  // const totalBalance = useMemo(() => {
  //   return entregaLista.Entregue;
  // }, [entregaLista.Entregue]);

  // const message = useMemo(() => {
  //   if (totalBalance < 0) {
  //     return {
  //       title: "Que triste!",
  //       description: "Neste mês, você atrasou mais do que deveria.",
  //       footerText:
  //         "Verifique seus atrasos e tente cortar algumas coisas desnecessárias.",
  //       icon: sadImg,
  //     };
  //   } else if (entregaLista.Entregue === 0) {
  //     return {
  //       title: "Op's!",
  //       description: "Neste mês, não há registros de entregas",
  //       footerText:
  //         "Parece que você não fez nenhum registro no mês e ano selecionado.",
  //       icon: opsImg,
  //     };
  //   } else if (entregaLista.Entregue === entregaLista.Asair) {
  //     return {
  //       title: "Ufaa!",
  //       description: "Neste mês, você entregou exatamente o que saiu.",
  //       footerText: "Tenha cuidado. No próximo tente ganhar o tempo.",
  //       icon: grinningImg,
  //     };
  //   } else {
  //     return {
  //       title: "Muito bem!",
  //       description: "Sua entrega está positiva!",
  //       footerText: "Continue assim. Considere garantir o seu saldo.",
  //       icon: happyImg,
  //     };
  //   }
  // }, [entregaLista.Entregue]);

  // const relationExpensesVersusGains = useMemo(() => {
  //   // const total = totalGains + totalExpenses;
  //   const total = 7 + 3;

  //   const percentGains = Number(((7 / total) * 100).toFixed(1));
  //   const percentExpenses = Number(((3 / total) * 100).toFixed(1));

  //   const data = [
  //     {
  //       name: 'Curva A',
  //       value: 7,
  //       percent: percentGains,
  //       color: '#E44C4E',
  //     },
  //     {
  //       name: 'Curva B',
  //       value: 3,
  //       percent: percentExpenses,
  //       color: '#F7931B',
  //     },
  //     {
  //       name: 'Curva C',
  //       value: 3,
  //       percent: percentExpenses,
  //       color: '#F7931B',
  //     },
  //   ];

  //   return data;
  // }, [7, 3]);

  // const relationExpensevesRecurrentVersusEventual = useMemo(() => {
  //   // let amountRecurrent = 0;
  //   // let amountEventual = 0;

  //   //  expenses
  //   // .filter((expense) => {
  //   //     const date = new Date(expense.date);
  //   //     const year = date.getFullYear();
  //   //     const month = date.getMonth() + 1;

  //   //     return month === monthSelected && year === yearSelected;
  //   // })
  //   // .forEach((expense) => {
  //   //     if(expense.frequency === 'recorrente'){
  //   //         return amountRecurrent += Number(expense.amount);
  //   //     }

  //   //     if(expense.frequency === 'eventual'){
  //   //         return amountEventual += Number(expense.amount);
  //   //     }
  //   // });

  //   // const total = amountRecurrent + amountEventual;
  //   const total = 235 + 465;

  //   const percentRecurrent = Number(((235 / total) * 100).toFixed(1));
  //   const percentEventual = Number(((465 / total) * 100).toFixed(1));

  //   return [
  //     {
  //       name: 'Recorrentes',
  //       amount: 235,
  //       percent: percentRecurrent,
  //       color: '#F7931B',
  //     },
  //     {
  //       name: 'Eventuais',
  //       amount: 465,
  //       percent: percentEventual,
  //       color: '#E44C4E',
  //     },
  //   ];
  //   // }, [monthSelected, yearSelected]);
  // }, [7, 2022]);

  // const relationGainsRecurrentVersusEventual = useMemo(() => {
  //   // let amountRecurrent = 0;
  //   // let amountEventual = 0;

  //   // gains
  //   // .filter((gain) => {
  //   //     const date = new Date(gain.date);
  //   //     const year = date.getFullYear();
  //   //     const month = date.getMonth() + 1;

  //   //     return month === monthSelected && year === yearSelected;
  //   // })
  //   // .forEach((gain) => {
  //   //     if(gain.frequency === 'recorrente'){
  //   //         return amountRecurrent += Number(gain.amount);
  //   //     }

  //   //     if(gain.frequency === 'eventual'){
  //   //         return amountEventual += Number(gain.amount);
  //   //     }
  //   // });

  //   // const total = amountRecurrent + amountEventual;
  //   const total = 578 + 367;

  //   const percentRecurrent = Number(((578 / total) * 100).toFixed(1));
  //   const percentEventual = Number(((367 / total) * 100).toFixed(1));

  //   return [
  //     {
  //       name: 'Recorrentes',
  //       amount: 578,
  //       percent: percentRecurrent,
  //       color: '#F7931B',
  //     },
  //     {
  //       name: 'Eventuais',
  //       amount: 367,
  //       percent: percentEventual,
  //       color: '#E44C4E',
  //     },
  //   ];
  // }, [7, 2022]);

  const { dollar } = useCotacao();

  const totalDash = useMemo(() => {
    let total = 0;
    let qdtProdutos_ = 0;
    let fatorx_ = 0;
    let valorblrx_ = 0;
    let qtdlinhasx_ = 0;
    let qtdinvoices_ = 0;
    let sugestaox_ = 0;

    let totalLinha = 0;

    let aentr_ = 0;
    let asair_ = 0;
    let edias_ = 0;
    let eentregue_ = 0;
    let emedia_ = 0;
    let eatraso_ = 0;
    let totalMes_ = 0;
    let totalAentr_ = 0;

    producaoLista.forEach((item) => (total += item.id !== 0));
    producaoLista.forEach((item) => (totalLinha += item.soma));
    // producaoLista.forEach((item) => (totalMes_ = item.totalmes));
    //  producaoLista.forEach((item) => {
    //  if(item.dataProducao === newDateFormatYearMonth()) {
    //   totalMes_ = item.totalMes
    // }
    // });

    let totalMes = 0;

    producaoLista.forEach((item) => (totalMes = item.totalmes));

    produtoLista.forEach((item) => (qtdinvoices_ += item.invoice));
    produtoLista.forEach((item) => (total += item.usd));
    produtoLista.forEach(
      (item) => (valorblrx_ += item.custo * item.disponivel)
    );
    produtoLista.forEach(
      (item) => (sugestaox_ += parseFloat(item.sugestaoTri))
    );
    produtoLista.forEach((item) => (qdtProdutos_ += item.disponivel));
    produtoLista.forEach((item) => (fatorx_ += item.precoMedio / item.custo));
    produtoLista.forEach((item) => (qtdlinhasx_ += item.id));

    entregaLista.forEach((item) => (asair_ += item.saida === ''));
    entregaLista.forEach((item) => (aentr_ += item.previsao === ''));
    entregaLista.forEach((item) => {
      if (item.previsao !== '' && item.dias > 0) edias_ += item.dias;
    });
    entregaLista.forEach((item) => {
      if (
        formatDateTotvs(item.previsao) ===
        new Date().toLocaleDateString('pt-BR')
      ) {
        totalAentr_++;
      }
    });
    entregaLista.forEach((item) => (eatraso_ += item.dias > 7));
    entregaLista.forEach((item) => {
      if (item.previsao !== '' && item.dias > 0) eentregue_ += 1;
    });

    const media = edias_ / eentregue_;
    emedia_ = media.toFixed(2);

    return {
      qtdprodutos: qdtProdutos_,
      fatorx: fatorx_,
      valor_blr: valorblrx_,
      dolar_blr: valorblrx_ / dollar?.bid,
      invoices: qtdinvoices_,
      sugestao: sugestaox_ * 1.35,
      producao: total,
      producaoLinha: totalLinha,
      Asair: asair_,
      Aentregar: aentr_,
      Edias: edias_,
      Entregue: eentregue_,
      Media: emedia_,
      Atraso: eatraso_,
      previsaoHoje: totalAentr_,
      producaoMes: totalMes,
    };
  }, [dollar?.bid, produtoLista, producaoLista, entregaLista]);

  useEffect(() => {
    handleEstock();
    handleFactory();
    handleLog();
  }, [dollar, filtro, dateDia]);

  // const handleClear = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   setFiltro({ descricao: null, codigo: null, local: null });
  // };

  const handleEstock = async () => {
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
      // alert('Erro grave - não carregou a tabela Estoque!!');
    } finally {
      // setRemoveLoading(true);
    }
  };
  const [producaoGrafico, setProducaoGrafico] = useState({
    series: [
      {
        data: [],
      },
    ],
  });


  useEffect(() => {
    apiFabrica
      .get('/Pedidos', { params: filtro })
      .then((retorno) => {
        setPedidoLista(
          retorno.data.map((item) => {
            return {
              id: item.id,
              nome: item.nome,
              descricao: item.descricao,
              valor: item.valor.toFixed(2),
              qtde: item.qtde,
              total: item.total.toFixed(2),
              dtfat: item.dtFat,
            };
          })
        );
      })
      .catch((_err) => {
        alert('erro grave');
      });
  }, [filtro]);

  const handleLog = async () => {
    try {
      const response = await apiFabrica.get('/Entregas', { params: filtro });
      setEntregaLista(
        response.data.map((item) => {
          return {
            id: item.id,
            documento: item.documento,
            nome: item.nome,
            cnpj: item.cnpj,
            liquido: item.liquido,
            bruto: item.bruto,
            destino: item.destino,
            saida: item.saida,
            emissao: item.emissao,
            previsao: item.previsao,
            dias: item.dias,
            diasemissao: item.diasEmissao,
            meta: item.meta,
            comercial: item.comercial,
            expedido: item.expedido,
          };
        })
      );
    } catch (err) {
      // alert('Erro grave - não carregou a tabela Entrega!!');
    } finally {
      // setRemoveLoading(true);
    }
  };

  const [produtosGraficos, setProdutosGraficos] = useState({
    series: [
      {
        data: [404, 404, 404, 404],
      },
    ],
    options: {
      title: {
        text: 'Obtendo dados - Total Produzido',
        align: 'left',
      },
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function (val, opts) {
          return val;
        },
        textAnchor: 'middle',
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ['#333', '#999'],
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#fff',
          opacity: 0.9,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45,
          },
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45,
        },
      },
      xaxis: {
        categories: ['CARREGANDO', 'OU', 'SEM', 'CONEXAO'],
      },
    },
  });

  const handleFactory = async () => {
    const produtos = [];
    const qtdProdutosProduzidos = [];
    try {
      const response = await apiFabrica.get('/Producao', { params: filtro });

      for (const obj of response.data) {
        produtos.push(obj.apelido);
        qtdProdutosProduzidos.push(obj.soma);
      }
      setProducaoLista(
        response.data.map((item) => {
          return {
            codigo: item.codigo,
            qrcode: item.qrCode,
            linha: item.linha,
            soma: item.soma,
            totalmes: item.totalMes,
            dataproducao: item.dataProducao,
            apelido: item.apelido,
          };
        })
      );

      setProdutosGraficos({
        series: [
          {
            data: qtdProdutosProduzidos,
          },
        ],
        options: {
          title: {
            text:
              'Gráfico Total Produzido/Hoje - ' +
              Number(totalDash.producaoLinha),
            align: 'left',
            style: {
              fontSize: '14px',
            },
          },
          chart: {
            type: 'bar',
            height: 350,
          },
          fill: {
            colors: ['#800000'],
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              vertical: true,
            },
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            formatter: function (val, opts) {
              return val;
            },
            textAnchor: 'middle',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
              colors: ['#000', '#999'],
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              padding: 4,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: '#fff',
              opacity: 0.9,
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45,
              },
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45,
            },
          },

          xaxis: {
            categories: produtos,
          },
        },
      });
    } catch (err) {
      // alert('Erro grave - não carregou a tabela Producao!!');
    } finally {
      // setRemoveLoading(true);
    }
  };

  // DATA ULTIMOS 7 DIAS
  const data7dias = [];

  for (let i = 0; i < 7; i++) {
    const formatter = Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    });

    const hoje = new Date();
    const diasAnteriores = new Date(hoje.getTime());
    diasAnteriores.setDate(hoje.getDate() - i);
    data7dias.unshift(formatter.format(diasAnteriores));
  }

  // -----------------------------------------------------------------------------------------------

  // const options2 = {
  //   chart: {
  //   width: 380,
  //   type: 'pie',
  // },
  // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  // responsive: [{
  //   breakpoint: 480,
  //   options: {
  //     chart: {
  //       width: "100%"
  //     },
  //     legend: {
  //       position: 'bottom'
  //     }
  //   }
  // }]
  // };

  // const series2 = [
  //   44, 55, 13, 43, 22
  // ]

  // const options3 = {
  //   chart: {
  //   type: 'bar',
  //   height: 350
  // },
  // plotOptions: {
  //   bar: {
  //     horizontal: false,
  //     columnWidth: '55%',
  //     endingShape: 'rounded'
  //   },
  // },
  // dataLabels: {
  //   enabled: false
  // },
  // stroke: {
  //   show: true,
  //   width: 2,
  //   colors: ['transparent']
  // },
  // xaxis: {
  //   categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  // },
  // yaxis: {
  //   title: {
  //     text: '$ (thousands)'
  //   }
  // },
  // fill: {
  //   opacity: 1
  // },
  // tooltip: {
  //   y: {
  //     formatter: function (val) {
  //       return "$ " + val + " thousands"
  //     }
  //   }
  // }
  // };

  // const series3 = [
  //   {
  //     name: 'Free Cash Flow',
  //     data: [35, 100]
  //   }
  // ]

  return (
    <LayoutNovo>
      <div className="col-6 col-sm-1">
        <input
          type="month"
          placeholder="Data"
          name="datainicio"
          className="form-control"
          onChange=""
        />
      </div>
      <form>
        <div className="row">
          <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-6">
            <WalletBox
              title="Total em Reais"
              backcolor="#E44C4E"
              amount={parseFloat(totalDash.valor_blr)}
              footerlabel="considerando os armazens filtrados"
              icon="arrowDown"
            />
          </div>
          <div className="col-xxl-2 col-lg-3 col-sm-3 col-md-3 col-sm-6">
            <WalletBox
              title="Total em Dolar"
              backcolor="#0000FF"
              amount={parseFloat(totalDash.dolar_blr)}
              footerlabel="considerando os armazens filtrados"
              icon="dolar"
            />
          </div>

          <div className="col-xxl-2 col-lg-3 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Total produtos"
              backcolor="#800000"
              amount={totalDash.qtdprodutos}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-lg-3 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Total Mês Produzido"
              backcolor="#006400"
              amount={Number(totalDash.producaoMes)}
              footerlabel="considerando os armazens filtrados"
              icon="arrowUp"
            />
          </div>
          <div className="col-xxl-2  col-lg-3 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Total Sugestão"
              backcolor="#000000"
              amount={Number(totalDash.sugestao)}
              footerlabel="considerando os armazens filtrados"
              icon="arrowUp"
            />
          </div>
          <div className="col-xxl-2 col-lg-3 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Total Invoices"
              backcolor="#ba4107"
              amount={totalDash.invoices}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Entregues/Mês"
              backcolor="#1962c2"
              amount={Number(totalDash.Entregue)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Media em dias"
              backcolor="#0000FF"
              amount={Number(totalDash.Media)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="A entregar/Mês"
              backcolor="#DC143C"
              amount={Number(totalDash.Aentregar)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Entrega/Previsão/Mês"
              backcolor="#295532"
              amount={Number(totalDash.previsaoHoje)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Notas Emitidas Mês"
              backcolor="#c3c3c3"
              amount={Number(totalDash.previsaoHoje)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>
          <div className="col-xxl-2 col-sm-3 col-md-3 col-6">
            <NumberBox
              title="Total/Pedidos/Mês"
              backcolor="#620000"
              amount={Number(totalDash.previsaoHoje)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div>

          {/* <div className="col-md-3">
            <NumberBox
              title="Atraso"
              backcolor="#DC143C"
              amount={Number(totalDash.Atraso)}
              footerlabel="considerando os armazens filtrados"
              icon="estoque"
            />
          </div> */}
        </div>
        <div className="row">
          {/* <div className="col-md-6">
            <BarChartBox
              title="Entregas Fora do Prazo"
              data={relationExpensevesRecurrentVersusEventual}
            />
          </div>
          <div className="col-md-6">
            <PieChartBox data={relationExpensesVersusGains} />
            {/* <MessageBox
              title={message.title}
              description={message.description}
              footerText={message.footerText}
              icon={message.icon}
            /> 
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-12">
            <Chart
              options={produtosGraficos.options}
              series={produtosGraficos.series}
              type="bar"
              width="100%"
              height={windowsSize}
            />
          </div>
          {/* <div className="col-md-6">
            <Chart
              options={options2}
              width={400}
              type="pie"
              series={series2}
            />
          </div>
          <div className="col-md-6">
            <Chart
              width="100%"
              options={options3}
              type="bar"
              series={series3}
            />
          </div> */}
          <div className="row">
            <div className="col-md-8">
              {/* <PieChartBox data={relationExpensesVersusGains} /> */}
            </div>
            {/* <div className="col-md-4">
            <BarChartBox
              title="Entregas No Prazo"
              data={relationGainsRecurrentVersusEventual}
            />
          </div> */}
          </div>
        </div>
        {/* </div> */}
      </form>
      §
    </LayoutNovo>
  );
}
