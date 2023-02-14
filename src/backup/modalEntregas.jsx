<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Alteração de Status da Nota Fiscal</Modal.Title>
</Modal.Header>
<Modal.Body>
  Alterar o status da nota fiscal
  <div className="col-md-6">
    <label className="form-label">Nota Fiscal</label>
    <input
      name="notafiscal"
      value={modalItem?.documento}
      onChange="{inputTextHandler}"
      id="notafiscal"
      type="readonly"
      className="form-control"
      placeholder="titulo"
    />
  </div>
  <div className="col-md-6">
    <label className="form-label">Setor</label>
    <select
      name="setor"
      // value="Setor"
      onChange={(e) => {
        if (e.target.value === 'logistica') {
          setEntregaSetor({ setorlog: 'logistica' });
        } else if (e.target.value === 'comercial') {
          setEntregaSetor({ setorcom: 'comercial' });
        } else if (e.target.value === 'naodefinido') {
          setEntregaSetor({ setorcom: '', setorlog: '' });
        }
      }}
      id="setor"
      className="form-select"
    >
      <option value="naodefinido">Selecione...</option>
      <option value="logistica">Logistica</option>
      <option value="comercial">Comercial</option>
    </select>
  </div>
  <div className="col-md-6">
    <label className="form-label">Prioridade</label>
    <select
      name="prioridade"
      // value="Numero da Nota"
      onChange={(e) => {
        if (
          e.target.value === 'liberada' &&
          entregaSetor.setorcom === 'comercial'
        ) {
          setEntregaPriority({ comercial: 1 });
          setUsuarioSetor({
            usercom:
              localStorage.getItem('email') +
              ' | ' +
              new Date().toLocaleString(),
          });
        } else if (
          e.target.value === 'aguardando' &&
          entregaSetor.setorcom === 'comercial'
        ) {
          setEntregaPriority({ comercial: 0 });
          setUsuarioSetor({
            usercom:
              localStorage.getItem('email') +
              ' | ' +
              new Date().toLocaleString(),
          });
        } else if (
          e.target.value === 'naodefinido' &&
          entregaSetor.setorcom === 'comercial'
        ) {
          setEntregaPriority({ comercial: 0 });
          setUsuarioSetor({
            usercom:
              localStorage.getItem('email') +
              ' | ' +
              new Date().toLocaleString(),
          });
        } else if (
          e.target.value === 'liberada' &&
          entregaSetor.setorlog === 'logistica'
        ) {
          setEntregaPriority({ expedido: 1 });
          setUsuarioSetor({
            userlog:
              localStorage.getItem('email') +
              ' | ' +
              new Date().toLocaleString(),
          });
        } else if (
          e.target.value === 'aguardando' &&
          entregaSetor.setorlog === 'logistica'
        ) {
          setEntregaPriority({ expedido: 0 });
          setUsuarioSetor({
            userlog:
              localStorage.getItem('email') +
              ' | ' +
              new Date().toLocaleString(),
          });
        } else if (
          e.target.value === 'naodefinido' &&
          entregaSetor.setorlog === 'logistica'
        ) {
          setEntregaPriority({ expedido: 0 });
          setUsuarioSetor({
            userlog:
              localStorage.getItem('email') +
              ' | ' +
              new Date().toLocaleString(),
          });
        }
      }}
      id="prioridade"
      className="form-select"
    >
      <option value="naodefinido">Selecione...</option>
      <option value="aguardando">Aguardando</option>
      <option value="liberada">Liberada</option>
    </select>
  </div>
  <div className="col-md-12">
    <label className="form-label">Observação</label>
    <textarea
      name="descricao"
      value=""
      onChange="{inputTextHandler}"
      id="descricao"
      type="text"
      className="form-control"
      placeholder="descricao"
    />
    <hr />
  </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Fechar / Close
  </Button>
  <Button variant="primary" onClick={() => handleUpdate(modalItem)}>
    Salvar Alteraçoes / Save Changes
  </Button>
</Modal.Footer>
</Modal>
