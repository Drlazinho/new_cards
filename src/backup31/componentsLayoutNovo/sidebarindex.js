import { useMemo, useState } from 'react';
import { BiGridAlt, BiWallet } from 'react-icons/bi';
import { FcSalesPerformance } from 'react-icons/fc';
import { HiUserGroup } from 'react-icons/hi';
import { ImEyePlus } from 'react-icons/im';
import { IoMdArrowDropright } from 'react-icons/io';
import {
  // FaAddressBook,
  FaHome,
  FaTruck,
  FaTruckLoading,
  FaFileInvoiceDollar,
  FaAddressCard,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { GrProductHunt, GrUserAdmin, GrUserSettings } from 'react-icons/gr';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
// import { AiOutlineQrcode } from 'react-icons/ai';
import { GoGlobe } from 'react-icons/go';
import { TbListCheck } from 'react-icons/tb';
import { RiAdminLine } from 'react-icons/ri';
import { MdEmail, MdNetworkCheck, MdPointOfSale } from 'react-icons/md';
import {
  // GiNotebook,
  GiTakeMyMoney,
  GiForklift,
  GiFactory,
  GiBrazil,
  GiStabbedNote,
} from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
import './style.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Menu = (item, index) => {
  const linkAtivo = useMemo(() => {
    return item.to === item.active ? true : false;
  }, [item]);

  return (
    <div className={`menu-item ${linkAtivo && 'menu-item-ativo'}`} key={index}>
      <NavLink to={`/${item.to}`}>
        {({ isActive }) => (
          <button
            type="button"
            className={isActive ? 'link-btn-active' : 'link-btn-inactive'}
          >
            <div className="data">
              <div className="img">{item.img}</div>
              <p>{item.label}</p>
            </div>
          </button>
        )}
      </NavLink>
      {/* <NavLink
        to={`/${item.to}`}
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}
      >
        <button type="button" className="link-btn-active">
          <div className="data">
            <div className="img">{item.img}</div>
            <p>{item.label}</p>
          </div>
        </button>
      </NavLink> */}
    </div>
  );
};

const MenuWithoutText = (item, index) => {
  const linkAtivo = useMemo(() => {
    return item.to === item.active ? true : false;
  }, [item]);

  return (
    <OverlayTrigger
      key={index}
      placement={'right'}
      overlay={
        <Tooltip id={`tooltip-${index}`}>
          <strong>{item.label}</strong>
        </Tooltip>
      }
    >
      <div
        className={`menu-item ${linkAtivo && 'menu-item-ativo'}`}
        key={index}
      >
        <NavLink to={`/${item.to}`}>
          {({ isActive }) => (
            <button
              type="button"
              className={isActive ? 'link-btn-active' : 'link-btn-inactive'}
            >
              <div className="data">
                {/* <div className="img">{item.img}</div> */}
              </div>
            </button>
          )}
        </NavLink>
      </div>
    </OverlayTrigger>
  );
};

const SidebarNovo = () => {
  const [imgSize, setImgSize] = useState(32);
  const [isOpen, setIsOpen] = useState(false);

  const rotas = [
    {
      id: 1,
      img: <FaHome size={imgSize} />,
      label: 'Dashboard',
      to: 'dashboard',
    },
    {
      id: 2,
      img: <BiWallet size={imgSize} />,
      label: 'Clientes',
      to: 'clientes',
    },
    {
      id: 17,
      img: <HiUserGroup size={imgSize} />,
      label: 'Clientes com Vendedores',
      to: 'clientesjoin',
    },
    {
      id: 3,
      img: <GrProductHunt size={imgSize} />,
      label: 'Produtos ',
      to: 'produtos',
    },
    {
      id: 4,
      img: <GiForklift size={imgSize} />,
      label: 'Estoque ',
      to: 'produtos/estoque',
    },
    {
      id: 5,
      img: <FaFileInvoiceDollar size={imgSize} />,
      label: 'Pedidos',
      to: 'pedidos',
    },
    {
      id: 6,
      img: <GiFactory size={imgSize} />,
      label: 'Producoes',
      to: 'producoes',
    },
    {
      id: 15,
      img: <BsFillFileBarGraphFill size={imgSize} />,
      label: 'Grafico Producao ',
      to: 'dashproducao',
    },
    {
      id: 7,
      img: <MdNetworkCheck size={imgSize} />,
      label: 'Apontamentos',
      to: 'apontamentos',
    },
    // {
    // 	id: 6,
    // 	img: <AiOutlineQrcode size={imgSize} />,
    // 	label: 'QR Codes',
    // 	to: 'qrcode'
    // },
    {
      id: 8,
      img: <GiTakeMyMoney size={imgSize} />,
      label: 'Margens ',
      to: 'margens',
    },
    {
      id: 16,
      img: <FcSalesPerformance size={imgSize} />,
      label: 'Grafico Comercial ',
      to: 'dashcomercial',
    },
    // {
    // 	id: 8,
    // 	img: <GiNotebook size={imgSize} />,
    // 	label: 'Status N.F comercial',
    // 	to: 'cadastranfcomercial'
    // },
    {
      id: 9,
      img: <FaTruck size={imgSize} />,
      label: 'Entregas ',
      to: 'entregas',
    },
    {
      id: 22,
      img: <FaTruckLoading size={imgSize} />,
      label: 'Notas Fiscais Emitidas',
      to: 'notasfiscaisemitidas',
    },
    {
      id: 10,
      img: <TbListCheck size={imgSize} />,
      label: 'Check de Expedicao ',
      to: 'expedicaolog',
    },

    // {
    // 	id: 10,
    // 	img: <FaTruckLoading size={imgSize} />,
    // 	label: 'Status N.F logistica',
    // 	to: 'cadastranflogistica'
    // },

    // {
    // 	id: 13,
    // 	img: <BsFillPeopleFill size={imgSize} />,
    // 	label: 'Novo Usuario',
    // 	to: 'usuarios/novo'
    // },
    {
      id: 11,
      img: <MdPointOfSale size={imgSize} />,
      label: 'Promotoras ',
      to: 'promotoras',
    },
    {
      id: 12,
      img: <FaAddressCard size={imgSize} />,
      label: 'Consumidores Cadastro ',
      to: 'promotorascrud',
    },
    {
      id: 13,
      img: <MdEmail size={imgSize} />,
      label: 'Contato ',
      to: 'contato',
    },
    // {
    //   id: 18,
    //   img: <GoGlobe size={imgSize} />,
    //   label: 'Importação ',
    //   to: 'importacao',
    // },
    {
      id: 19,
      img: <GiBrazil size={imgSize} />,
      label: 'Envios Brasil ',
      to: 'enviosbrasil',
    },
    // {
    //   id: 20,
    //   img: <FaMapMarkerAlt size={imgSize} />,
    //   label: 'EnviosBahia',
    //   to: 'enviosbahia',
    // },
    {
      id: 21,
      img: <ImEyePlus size={imgSize} />,
      label: 'Inspeção',
      to: 'inspecao',
    },
    {
      id: 22,
      img: <ImEyePlus size={imgSize} />,
      label: 'Fornecedores',
      to: 'fornecedores',
    },
    {
      id: 23,
      img: <GiStabbedNote size={imgSize} />,
      label: 'Notas Saída',
      to: 'notassaida',
    },
    // {
    //   id: 21,
    //   img: <ImEyePlus size={imgSize} />,
    //   label: 'devTest',
    //   to: 'devtest',
    // },
    {
      id: 14,
      img: <RiAdminLine size={imgSize} />,

      label: 'Administrador ',
      to: 'admin',
    },
  ];

  const email = localStorage.getItem('email');

  return (
   
  );
};

export default SidebarNovo;
