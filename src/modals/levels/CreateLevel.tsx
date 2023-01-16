import { CreateModal } from '../../interfaces/components/modal.interface';
import { Level } from '../../interfaces/levels.interface';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as LevelsAPI from '../../services/levels/api';
import FormGroup from '../../components/forms/FormGroup';
import Input from '../../components/forms/Input';
import Label from '../../components/forms/Label';
import Modal from '../../components/Modal';
import { handleChange as _handleChange } from '../../services/form';

function CreateLevel({ onSuccess, onError, closeModal }: CreateModal) {
  const { t } = useTranslation('common');

  const [levelForm, setLevelForm] = useState<Level>({ name: '' });
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const formUpdated = _handleChange(levelForm, event);

    if (formUpdated) {
      setLevelForm(formUpdated as Level);
    }
  };

  const handleSubmit = async (event: any) => {
    setLoadingButton(true);

    event.preventDefault();

    try {
      await LevelsAPI.create(levelForm);

      onSuccess(t('levels.successfully_created'));
    } catch (error) {
      console.log(error);

      onError(t('there_was_an_error'));
    }

    closeModal(event);
  };

  const disableSubmitButton = () => {
    return !levelForm.name;
  };

  return (
    <Modal
      content={{ title: t('levels.add'), cancel: t('cancel') as string }}
      width={'1/4'}
      loadingButton={loadingButton}
      disableConfirmButton={disableSubmitButton()}
      onConfirm={handleSubmit}
      onCancel={closeModal}
    >
      <div className="space-y-6 px-4 py-5 sm:p-6">
        <FormGroup gridColsClass={'grid-cols-1'}>
          <div>
            <Label required={true} htmlFor="name">
              {t('name')}
            </Label>
            <Input
              type="text"
              maxLength={30}
              name="name"
              id="name"
              value={levelForm.name}
              onChange={(event) => handleChange(event)}
              placeholder={t('levels.placeholders.name') as string}
              isEditing={true}
            />
          </div>
        </FormGroup>
      </div>
    </Modal>
  );
}

export default CreateLevel;
