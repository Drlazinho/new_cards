import React, { useState, useEffect, useRef } from 'react';

import { apiCotacao } from '../../services/apis';
import { BsMegaphone } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsTelegram } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import NavbarNovo from './NavbarNovo';
import SidebarNovo from './SidebarNovo';
import LinearBuffer from '../LinearProgress';
// import RadioButton from '../RadioButton'

import './style.css';
import { useCotacao } from '../../hooks/cotacao';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Popover, Typography } from '@mui/material';
import { CustomButton } from './CustomButton';

const LayoutNovo = (props) => {
  const { dollar } = useCotacao();
  const email = localStorage.getItem('email');
  const { children } = props;
  const [showModalContacts = false, setShowModalContacts = !showModalContacts] =
    useState();

  const closeModal = () => {
    setShowModalContacts(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const dollarValor = dollar?.bid;

  const [teste, setTeste] = useState(email);
  useEffect(() => {

    const mudar = () => {
      if (teste === email) {
        setTeste('dollarValor');
      }
      if (teste === 'dollarValor') {
        setTeste(email);
      }
      console.log(teste)
      return teste
    };
    const interval = setInterval(mudar(), 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Modal
        size="sm"
        centered
        show={showModalContacts}
        onHide={setShowModalContacts}
      >
        <Modal.Body>
          <button className="buttonClose-contacts-modal" onClick={closeModal}>
            X
          </button>
          <div className="icons-contacts-modal">
            <IoLogoWhatsapp size={32} color="#c3c3c3" />
            <BsTelegram size={32} color="#c3c3c3" />
            <Link to="/contato">
              <MdOutlineMail size={32} color="#000000" />
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <div className="d-flex layout">
        <div id="container" className="d-flex flex-column w-100 h-100">
          <div id="nav" className="">
            {/* <NavbarNovo dolar={dollar?.bid} /> */}
          </div>
          <div className="circle-dollar">
            <CustomButton aria-describedby={id} onClick={handleClick}>
             U$  {dollarValor}
            </CustomButton>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }} className={'text-dollar-popover'}>
                U$ {dollar?.bid}
              </Typography>
            </Popover>
          </div>
          <div className="d-flex w-100">
            <div className="sidebar">
              <SidebarNovo />
            </div>
            <div className="d-flex flex-column justify-content-between h-100 w-100 main">
              <div
                id="child"
                className="card-child align-self-center mt-2 h-100"
              >
                <div className='mb-3'>
                <LinearBuffer></LinearBuffer>
                </div>
                {children}
              </div>
              <OverlayTrigger
                placement={'top'}
                overlay={
                  <Tooltip>
                    <strong>
                      Chamada
                      <br />
                      [indisponível]
                    </strong>
                  </Tooltip>
                }
              >
                <button
                  className="chamada-app-button"
                  title="Chamada"
                  onClick={setShowModalContacts}
                >
                  <div className="icon-chamada-app-button">
                    <BsMegaphone size={24} />
                  </div>
                </button>
              </OverlayTrigger>
              <footer className="text-center text-info">
                Power By: Gilberto Artur | 16.08.22.01
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutNovo;
