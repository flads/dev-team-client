export interface ModalContentProps {
  title: string;
  message?: string;
  cancel?: string;
  confirm?: string;
  confirming?: string;
}

export interface ModalProps {
  content: ModalContentProps;
  width?: string;
  confirmButtonColor?: string;
  loadingButton?: boolean;
  disableConfirmButton?: boolean;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export interface CreateDeveloper {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
}
