import { Clickable } from '../common.interface';
import { ModalContentProps } from './modal.interface';

export interface FormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onClickEdit?: Clickable;
  onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
  onClickReturn?: Clickable;
  deleteModalContent?: ModalContentProps;
  loadingSubmitButton?: boolean;
  loadingSubmitButtonText?: string;
  loadingDeleteButton?: boolean;
  disableSubmitButton?: boolean;
  children: React.ReactNode;
  isEditing?: boolean;
}

export interface FormGroupProps {
  gridColsClass?: string;
  children: React.ReactNode;
}

export interface LabelProps {
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
}

export interface InputProps {
  type: string;
  maxLength?: number;
  preSpan?: string;
  name: string;
  id: string;
  value?: string | number | null;
  placeholder?: string;
  copy?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isEditing?: boolean;
}

export interface ButtonProps {
  text?: string;
  loadingText?: string;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  styleName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DeleteButtonProps {
  modalContent: ModalContentProps;
  loadingButton?: boolean;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}
