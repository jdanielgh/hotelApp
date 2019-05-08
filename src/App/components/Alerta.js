import React from 'react'

export default function Alerta() {
  const modalRef = React.createRef();
  return (
    <div>
        <div ref={modalRef} id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    </div>
  )
}