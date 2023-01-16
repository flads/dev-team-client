import { Developer } from '../../interfaces/developers.interface';
import { handleChange as _handleChange } from '../../services/form-handlers';
import { useState } from 'react';
import * as DevelopersAPI from '../../services/developers/api';
import FormGroup from '../../components/forms/FormGroup';
import Input from '../../components/forms/Input';
import Label from '../../components/forms/Label';
import Modal from '../../components/Modal';
import { CreateDeveloper as CreateDeveloperInterface } from '../../interfaces/components/modal.interface';

function CreateDeveloper({ closeModal }: CreateDeveloperInterface) {
  const [developerForm, setDeveloperForm] = useState<Developer>({});
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const formUpdated = _handleChange(developerForm, event);

    if (formUpdated) {
      setDeveloperForm(formUpdated);
    }
  };

  const handleSubmit = async (event: any) => {
    setLoadingButton(true);

    event.preventDefault();

    await DevelopersAPI.create(developerForm);

    await closeModal(event);
  };

  const disableSubmitButton = () => {
    return !developerForm.name || !developerForm.level_id;
  };

  return (
    <Modal
      content={{ title: 'Adicionar Desenvolvedor', cancel: 'Cancelar' }}
      width={'1/4'}
      loadingButton={loadingButton}
      disableConfirmButton={disableSubmitButton()}
      onConfirm={handleSubmit}
      onCancel={closeModal}
    >
      <div className="space-y-6 px-4 py-5 sm:p-6">
        <FormGroup>
          <div>
            <Label required={true} htmlFor="name">
              Nome do Desenvolvedor
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={developerForm.name}
              onChange={(event) => handleChange(event)}
              placeholder="Ex: John doe"
              isEditing={true}
            />
          </div>
        </FormGroup>
      </div>
    </Modal>
  );
}

export default CreateDeveloper;
