import { DeleteButtonProps } from '../../interfaces/components/forms.interface';
import { useState } from 'react';
import Modal from '../Modal';
import Trash from '../icons/Trash';

function DeleteButton({
  modalContent,
  loadingButton,
  onConfirm,
}: DeleteButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className="p-1 rounded bg-red-500 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <Trash />
      </div>
      {showModal ? (
        <Modal
          content={modalContent}
          width={'1/4'}
          confirmButtonColor="red"
          loadingButton={loadingButton}
          onConfirm={onConfirm}
          onCancel={() => setShowModal(false)}
        />
      ) : null}
    </div>
  );
}

export default DeleteButton;
