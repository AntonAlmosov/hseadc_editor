import React from "react";
import Modal from "react-modal";
import CreateBlockModal from "./CreateBlockModal";

export default ({
  modalOpened,
  currentModal,
  handleModal,
  handleCreateBlock,
}) => {
  return (
    <Modal
      isOpen={modalOpened}
      onRequestClose={handleModal}
      ariaHideApp={false}
      className={"modal_wrapper_portal " + currentModal}
      overlayClassName="modal_wrapper_overlay"
    >
      {currentModal == "create_block_modal" && (
        <CreateBlockModal close={handleModal} createBlock={handleCreateBlock} />
      )}
    </Modal>
  );
};
