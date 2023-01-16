import { FormProps } from '../../interfaces/components/forms.interface';
import Button from './Button';
import DeleteButton from './DeleteButton';
import Edit from '../icons/Edit';
import Return from '../icons/Return';

function Form({
  onSubmit,
  onClickEdit,
  onClickDelete,
  onClickReturn,
  deleteModalContent,
  loadingSubmitButton,
  loadingSubmitButtonText,
  loadingDeleteButton,
  disableSubmitButton,
  children,
  isEditing,
}: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="w-full shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="mb-2 flex justify-end">
            <div className="absolute">
              {isEditing && onClickReturn && <Return onClick={onClickReturn} />}
              {!isEditing && onClickEdit && <Edit onClick={onClickEdit} />}
            </div>
          </div>
          {children}
        </div>

        {isEditing && (
          <div className="flex justify-end bg-gray-50 px-4 py-3 sm:px-6">
            <Button
              loading={loadingSubmitButton}
              loadingText={loadingSubmitButtonText}
              type="submit"
              disabled={disableSubmitButton}
            />
          </div>
        )}

        {!isEditing && onClickDelete && deleteModalContent && (
          <div className="flex justify-end bg-gray-50 px-4 py-3 sm:px-6">
            <DeleteButton
              modalContent={deleteModalContent}
              loadingButton={loadingDeleteButton}
              onConfirm={onClickDelete}
            />
          </div>
        )}
      </div>
    </form>
  );
}

export default Form;
