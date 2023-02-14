import React, { useState, useEffect, useMemo } from 'react';

import { apiFabrica } from '../../services/apis';
import LayoutNovo from '../../components/LayoutNovo';
import debounce from '../../utils/debounce';
import { AiOutlineMinus } from 'react-icons/ai';
import { FiSquare } from 'react-icons/fi';
import Pagination from '@mui/material/Pagination';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import NumberBox from '../../components/NumberBox';
import Loader from '../../components/Loader';
// import BreadCards from '../../components/BreadCards';
import BreadCrump from '../../components/BreadCumbs';
import './styles.css';
// import styles from '../../components/BreadCards/styles.modules.css';
import formatDateTotvs from '../../utils/formatDataTotvs';
import { EntregasTabela } from '../../components/Tabela/EntregasTabela';

export default function Entrega() {
  const [entregaLista, setEntregaLista] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [entregaPriority, setEntregaPriority] = useState(0);
  const [entregaSetor, setEntregaSetor] = useState({});
  const [usuarioSetor, setUsuarioSetor] = useState({});
  const [modalItem, setModalItem] = useState({});
  const [sectionNumberBoxReveal, setSectionNumberBoxReveal] = useState(true);
  const [sectionFilterBoxReveal, setSectionFilterBoxReveal] = useState('row');
  const [show, setShow] = useState(false);

  const [dataProducao, setDataProducao] = useState('Sem Data');
  const [dataCarregamento, setDataCarregamento] = useState('Sem Data');
  const [dataTransporte, setDataTransporte] = useState('Sem Data');
  const [dataEntregue, setDataEntregue] = useState('Sem Data');
  const [renderOverBreadCrumb, setRenderOverBreadCrumb] = useState({});
  const [inputEmissao, setInputEmissao] = useState(true);
  const [inputSaida, setInputSaida] = useState(Boolean);
  const [inputPrevisao, setInputPrevisao] = useState(Boolean);

  const handleClose = () => setShow(false);
  // const handleShow = (item) => {
  //   setShow(true);
  //   setModalItem(item);
  //   setEntregaPriority({ expedido: item.expedido, comercial: item.comercial });
  //   setUsuarioSetor({ usercom: item.userCom, userlog: item.userLog });
  //   setEntregaSetor({ setorcom: item.setorCom, setorlog: item.setorLog });
  // };

  const [filtro, setFiltro] = useState({
    documento: null,
    cnpj: null,
    nome: null,
    dias: null,
  });

  const totalEntrega = useMemo(() => {
    let aentr_ = 0;
    let asair_ = 0;
    let edias_ = 0;
    let eentregue_ = 0;
    let emedia_ = 0;

    entregaLista.forEach((item) => (asair_ += item.saida === ''));
    entregaLista.forEach((item) => (aentr_ += item.previsao === ''));
    entregaLista.forEach((item) => {
      if (item.previsao !== '' && item.dias > 0) eentregue_ += 1;
    });
    entregaLista.forEach((item) => {
      if (item.previsao !== '' && item.dias > 0) edias_ += item.dias;
    });

    const media = edias_ / eentregue_;
    emedia_ = media.toFixed(2);

    return {
      Asair: asair_,
      Aentregar: aentr_,
      Edias: edias_,
      Entregue: eentregue_,
      Media: emedia_,
    };
  }, [entregaLista]);

  useEffect(() => {
    handleFetch();
  }, [filtro]);

  // const handleUpdate = async (item) => {
  //   try {
  //     await apiFabrica.put(`/Entregas/${item.id}`, {
  //       ...entregaPriority,
  //       ...entregaSetor,
  //       ...usuarioSetor,
  //     });
  //     handleFetch();
  //     handleClose();
  //   } catch (err) {
  //     alert('Erro grave - não carregou a tabela!!');
  //   } finally {
  //     // setRemoveLoading(true);
  //   }
  // };

  const handleFetch = async () => {
    try {
      const response = await apiFabrica.get('/Entregas', { params: filtro });
      setEntregaLista(
        response.data.map((item) => {
          setDataProducao(formatDateTotvs(item.emissao, '/'));
          setDataCarregamento(formatDateTotvs(item.saida, '/'));
          setDataTransporte(formatDateTotvs(item.previsao, '/'));
          setDataEntregue(formatDateTotvs(item.entregue, '/'));
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
            entregue: item.entregue,
            dias: item.dias,
            diasemissao: item.diasEmissao,
            meta: item.meta,
            comercial: item.comercial,
            expedido: item.expedido,
            usercom: item.userCom,
            userlog: item.userLog,
            setorcom: item.setorCom,
            setorlog: item.setorLog,
          };
        })
      );
    } catch (err) {
      alert('Erro grave - não carregou a tabela!!');
    } finally {
      setRemoveLoading(true);
    }
  };

  console.log(entregaLista);

  const handleClear = (e) => {
    e.preventDefault();
    e.target.reset();
    setFiltro({
      documento: null,
      cnpj: null,
      nome: null,
      dias: null,
      datainicio: null,
    });
  };
  // const primeiro = entregaLista[0];
  // console.log(primeiro.documento);

  const [classAnimation, setClassAnimation] = useState('col-md-4');

  const novaRenderizacao = (values) => {
    setRenderOverBreadCrumb(values);
    if (classAnimation === 'col-md-4') {
      setClassAnimation('col-md-4 render-Bread');
    }
  };

  const restartRenderizacao = () => {
    setClassAnimation('col-md-4');
  };

  const leituraFiltroNotaFiscal = filtro.documento;
  const [typeDate, setTypeDate] = useState(true);

  const typeDateInput = () => {
    let typeDateMonthOrDay = '';
    typeDate ? (typeDateMonthOrDay = 'month') : (typeDateMonthOrDay = 'date');
    return typeDateMonthOrDay;
  };

  const changeExpedition = (item) => {
    if (item.expedido === 0) {
      setEntregaPriority({ expedido: 1 });
      setUsuarioSetor({
        userlog:
          localStorage.getItem('email') + ' | ' + new Date().toLocaleString(),
      });
      console.log(item + 'expedido 0 PARA 1');
    }
    if (item.expedido === 1) {
      setEntregaPriority({ expedido: 0 });
      setUsuarioSetor({
        userlog:
          localStorage.getItem('email') + ' | ' + new Date().toLocaleString(),
      });
      console.log(item + 'expedido 1 PARA 0');
    }
  };

  const handleChangeExpedicao = async (item) => {
    changeExpedition(item);
    console.log(item);
    try {
      await apiFabrica.put(`/Entregas/${item.id}`, {
        ...entregaPriority,
        ...usuarioSetor,
      });
      handleFetch();
    } catch (err) {
      alert('Dado expedido não alterado');
    } finally {
      alert('Dado expidido alterado');
    }
  };

  return (
    <LayoutNovo>
      <div className="mb-1">
        <form onSubmit={handleClear} className="position-relative">
          <h2>Entregas nas regiões</h2>
          {sectionFilterBoxReveal === 'filter-box-hidden' && (
            <div className="input-fiscal-principal">
              <label>Nota Fiscal</label>
              <input
                type="number"
                placeholder="Nota Fiscal"
                name="notafiscal"
                onChange={(e) =>
                  debounce(() => {
                    setFiltro({ ...filtro, documento: e.target.value });
                  })
                }
              />
              <button className="btn btn-css" type="submit">
                <i className="fas fa-trash me-2"></i>
              </button>
            </div>
          )}

          <div className="d-flex justify-content-end btn-reveal-filter">
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  <strong>Esconder Filtros</strong>
                </Tooltip>
              }
            >
              <button
                className="btn"
                onClick={(e) => {
                  setSectionFilterBoxReveal('filter-box-hidden');
                }}
              >
                <AiOutlineMinus size={16} />
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  <strong>Revelar Filtros</strong>
                </Tooltip>
              }
            >
              <button
                className="btn"
                onClick={(e) => {
                  setSectionFilterBoxReveal('row');
                }}
              >
                <FiSquare size={16} />
              </button>
            </OverlayTrigger>
          </div>
          <div className={sectionFilterBoxReveal}>
            <div className="col-md-2">
              <label>Nota Fiscal</label>
              <input
                type="number"
                placeholder="Nota Fiscal"
                name="notafiscal"
                className="form-control"
                onChange={(e) =>
                  debounce(() => {
                    setFiltro({ ...filtro, documento: e.target.value });
                  })
                }
              />
            </div>
            <div className="col-md-3">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                className="form-control"
                onChange={(e) =>
                  debounce(() => {
                    setFiltro({ ...filtro, nome: e.target.value });
                  })
                }
              />
            </div>
            <div className="col-md-2">
              <label>Cnpj</label>
              <input
                type="text"
                placeholder="Cnpj"
                name="cnpj"
                className="form-control"
                onChange={(e) =>
                  debounce(() => {
                    setFiltro({ ...filtro, cnpj: e.target.value });
                  })
                }
              />
            </div>

            {/* INPUT RADIUS */}
            <div className="d-flex gap-4 flex-wrap my-2">
              <div className="d-flex flex-row gap-2 align-items-center">
                <input
                  type="radio"
                  id="mes"
                  name="dateOrMonth"
                  value="month"
                  onClick={(e) => {
                    setTypeDate(true);
                  }}
                  checked={typeDate}
                />
                <label htmlFor="mes" className="text-black-50">
                  Mês
                </label>
              </div>
              <div className="d-flex flex-row gap-2 align-items-center">
                <input
                  type="radio"
                  id="dia"
                  name="dateOrMonth"
                  value="date"
                  onClick={(e) => {
                    setTypeDate(false);
                  }}
                />
                <label htmlFor="dia" className="text-black-50">
                  Dia
                </label>
              </div>
              <p className="text-dark">|</p>
              <div className="d-flex flex-row gap-2 align-items-center">
                <input
                  type="radio"
                  id="dia"
                  name="date"
                  value="dia"
                  onClick={(e) => {
                    setInputEmissao(true);
                    setInputPrevisao(false);
                    setInputSaida(false);
                  }}
                  checked={inputEmissao}
                />
                <label htmlFor="dia" className="text-black-50">
                  Emissão
                </label>
              </div>
              <div className="d-flex flex-row gap-2 align-items-center">
                <input
                  type="radio"
                  id="mensal"
                  name="date"
                  value="mensal"
                  onClick={(e) => {
                    setInputEmissao(false);
                    setInputPrevisao(true);
                    setInputSaida(false);
                  }}
                />
                <label htmlFor="mensal" className="text-black-50">
                  Previsão
                </label>
              </div>
              <div className="d-flex flex-row gap-2 align-items-center">
                <input
                  type="radio"
                  id="mensal"
                  name="date"
                  value="mensal"
                  onClick={(e) => {
                    setInputEmissao(false);
                    setInputPrevisao(false);
                    setInputSaida(true);
                  }}
                />
                <label htmlFor="mensal" className="text-black-50">
                  Saída
                </label>
              </div>
            </div>

            {/* INPUT DATES */}
            {inputEmissao && (
              <>
                {' '}
                <div className="col-md-6 col-lg-2">
                  <label>Mês Início de Emissão </label>
                  <input
                    type={typeDateInput()}
                    placeholder="Data"
                    name="datainicio"
                    className="form-control"
                    onChange={(e) =>
                      debounce(() => {
                        setFiltro({ ...filtro, datainicio: e.target.value });
                      })
                    }
                  />
                </div>
                <div className="col-md-6 col-lg-2">
                  <label>Mês Fim de Emissão</label>
                  <input
                    type={typeDateInput()}
                    placeholder="Data"
                    name="datainicio"
                    className="form-control"
                    onChange={(e) =>
                      debounce(() => {
                        setFiltro({ ...filtro, datainicio: e.target.value });
                      })
                    }
                  />
                </div>
              </>
            )}
            {inputSaida && (
              <>
                {' '}
                <div className="col-md-6 col-lg-2">
                  <label>Mês Início de Saída </label>
                  <input
                    type={typeDateInput()}
                    placeholder="Data"
                    name="datainicio"
                    className="form-control"
                    onChange={(e) =>
                      debounce(() => {
                        setFiltro({ ...filtro, saidainicio: e.target.value });
                      })
                    }
                  />
                </div>
                <div className="col-md-6 col-lg-2">
                  <label>Mês Fim de Saída</label>
                  <input
                    type={typeDateInput()}
                    placeholder="Data"
                    name="datainicio"
                    className="form-control"
                    onChange={(e) =>
                      debounce(() => {
                        setFiltro({ ...filtro, saidafim: e.target.value });
                      })
                    }
                  />
                </div>
              </>
            )}
            {inputPrevisao && (
              <>
                {' '}
                <div className="col-md-6 col-lg-2">
                  <label>Mês Início de Previsão </label>
                  <input
                    type={typeDateInput()}
                    placeholder="Data"
                    name="datainicio"
                    className="form-control"
                    onChange={(e) =>
                      debounce(() => {
                        setFiltro({
                          ...filtro,
                          previsaoinicio: e.target.value,
                        });
                      })
                    }
                  />
                </div>
                <div className="col-md-6 col-lg-2">
                  <label>Mês Fim de Previsão</label>
                  <input
                    type={typeDateInput()}
                    placeholder="Data"
                    name="datainicio"
                    className="form-control"
                    onChange={(e) =>
                      debounce(() => {
                        setFiltro({ ...filtro, previsaofim: e.target.value });
                      })
                    }
                  />
                </div>
              </>
            )}

            <div className="col-md-2 my-4">
              <button
                className="btn btn-sm btn-outline-danger me-2"
                type="submit"
              >
                <i className="fas fa-trash me-2"></i>
                Clear
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center section-numberBox">
            <div className="d-flex d-lg-none justify-content-end gap-1">
              <button
                className="btn btn-outline-secondary"
                onClick={(e) => {
                  e.preventDefault(), setSectionNumberBoxReveal(false);
                }}
              >
                <AiOutlineMinus size={20} />
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={(e) => {
                  e.preventDefault(), setSectionNumberBoxReveal(true);
                }}
              >
                <FiSquare size={20} />
              </button>
            </div>

            {sectionNumberBoxReveal ? (
              <div className="row p-0 m-0">
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="Entregues"
                    backcolor="#008000"
                    amount={Number(totalEntrega.Entregue)}
                    icon="estoque"
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="Media em dias"
                    backcolor="#0000FF"
                    amount={Number(totalEntrega.Media)}
                    icon="estoque"
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="A sair"
                    backcolor="#800000"
                    amount={Number(totalEntrega.Asair)}
                    icon="industria"
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="A entregar"
                    backcolor="#DC143C"
                    amount={Number(totalEntrega.Aentregar)}
                    icon="estoque"
                  />
                </div>
              </div>
            ) : (
              <div className="row d-none">
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="Entregues"
                    backcolor="#008000"
                    amount={Number(totalEntrega.Entregue)}
                    icon="estoque"
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="Media em dias"
                    backcolor="#0000FF"
                    amount={Number(totalEntrega.Media)}
                    icon="estoque"
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="A sair"
                    backcolor="#800000"
                    amount={Number(totalEntrega.Asair)}
                    icon="industria"
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <NumberBox
                    title="A entregar"
                    backcolor="#DC143C"
                    amount={Number(totalEntrega.Aentregar)}
                    icon="estoque"
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="row d-flex flex-column-reverse flex-md-row gap-2 gap-md-0">
        <div className="col-md-8">
          <div style={{ height: 600, width: '100%', overflow: 'scroll' }}>
            <EntregasTabela
              entregas={entregaLista}
              // telamodal={handleShow}
              statusLogistica={handleChangeExpedicao}
              novaRenderizacao={novaRenderizacao}
              restartRenderizacao={restartRenderizacao}
            />
            <div className="col-md-12">{!removeLoading && <Loader />}</div>
          </div>
        </div>
        <div className={classAnimation}>
          {renderOverBreadCrumb.notaFiscal === null ? (
            <>
              <h2 className="text-center">
                Nota Fiscal {leituraFiltroNotaFiscal}
              </h2>
              <BreadCrump
                receiveNewRender={renderOverBreadCrumb}
                name1={'Produção'}
                idImage1={1}
                date1={dataProducao}
                name2={'Carregamento'}
                idImage2={2}
                date2={dataCarregamento}
                name3={'Transporte'}
                idImage3={3}
                date3={dataTransporte}
                name4={'Entregue'}
                idImage4={4}
                date4={dataEntregue}
              />
            </>
          ) : (
            <>
              <h2 className="text-center">
                Nota Fiscal {renderOverBreadCrumb.notaFiscal}
              </h2>
              <BreadCrump
                receiveNewRender={renderOverBreadCrumb}
                name1={'Produção'}
                idImage1={1}
                date1={formatDateTotvs(
                  renderOverBreadCrumb.dataProducaoNewRender,
                  '/'
                )}
                name2={'Carregamento'}
                idImage2={2}
                date2={formatDateTotvs(
                  renderOverBreadCrumb.dataCarregamentoNewRender,
                  '/'
                )}
                name3={'Transporte'}
                idImage3={3}
                date3={formatDateTotvs(
                  renderOverBreadCrumb.dataTransporteNewRender,
                  '/'
                )}
                name4={'Entregue'}
                idImage4={4}
                date4={formatDateTotvs(
                  renderOverBreadCrumb.dataEntregueNewRender,
                  '/'
                )}
              />
            </>
          )}
        </div>
      </div>
    </LayoutNovo>
  );
}
