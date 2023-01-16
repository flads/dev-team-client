import { CreateDeveloper as CreateDeveloperInterface } from '../../interfaces/components/modal.interface';
import { Developer } from '../../interfaces/developers.interface';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as DevelopersAPI from '../../services/developers/api';
import FormGroup from '../../components/forms/FormGroup';
import Input from '../../components/forms/Input';
import Label from '../../components/forms/Label';
import Modal from '../../components/Modal';
import {
  handleChange as _handleChange,
  removeEmptyValues,
} from '../../services/form';

function CreateDeveloper({
  onSuccess,
  onError,
  closeModal,
}: CreateDeveloperInterface) {
  const { t } = useTranslation('common');

  const [developerForm, setDeveloperForm] = useState<Developer>({
    name: '',
    gender: '',
    birthdate: '',
    hobby: '',
    level_id: 1,
  });
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const formUpdated = _handleChange(developerForm, event);

    if (formUpdated) {
      setDeveloperForm(formUpdated as Developer);
    }
  };

  const handleSubmit = async (event: any) => {
    setLoadingButton(true);

    event.preventDefault();

    try {
      const data = removeEmptyValues(developerForm);

      await DevelopersAPI.create(data as Developer);

      onSuccess(t('developers.successfully_created'));
    } catch (error) {
      console.log(error);

      onError(t('there_was_an_error'));
    }

    closeModal(event);
  };

  const disableSubmitButton = () => {
    return !developerForm.name || !developerForm.level_id;
  };

  return (
    <Modal
      content={{ title: t('developers.add'), cancel: t('cancelar') as string }}
      width={'2/4'}
      loadingButton={loadingButton}
      disableConfirmButton={disableSubmitButton()}
      onConfirm={handleSubmit}
      onCancel={closeModal}
    >
      <div className="space-y-6 px-4 py-5 sm:p-6">
        <FormGroup gridColsClass={'grid-cols-2'}>
          <div>
            <Label required={true} htmlFor="name">
              {t('name')}
            </Label>
            <Input
              type="text"
              maxLength={30}
              name="name"
              id="name"
              value={developerForm.name}
              onChange={(event) => handleChange(event)}
              placeholder={t('developers.placeholders.name') as string}
              isEditing={true}
            />
          </div>
          <div>
            <Label htmlFor="gender">{t('gender')}</Label>
            <Input
              type="text"
              maxLength={30}
              name="gender"
              id="gender"
              value={developerForm.gender}
              onChange={(event) => handleChange(event)}
              placeholder={t('developers.placeholders.gender') as string}
              isEditing={true}
            />
          </div>
        </FormGroup>
        <FormGroup gridColsClass={'grid-cols-2'}>
          <div>
            <Label htmlFor="birthdate">{t('birthdate')}</Label>
            <Input
              type="text"
              maxLength={30}
              name="birthdate"
              id="birthdate"
              value={developerForm.birthdate}
              onChange={(event) => handleChange(event)}
              placeholder={t('developers.placeholders.birthdate') as string}
              isEditing={true}
            />
          </div>
          <div>
            <Label htmlFor="hobby">{t('hobby')}</Label>
            <Input
              type="text"
              maxLength={30}
              name="hobby"
              id="hobby"
              value={developerForm.hobby}
              onChange={(event) => handleChange(event)}
              placeholder={t('developers.placeholders.hobby') as string}
              isEditing={true}
            />
          </div>
        </FormGroup>
        <FormGroup gridColsClass={'grid-cols-4'}>
          <div>
            <Label required={true} htmlFor="level_id">
              {t('level')}
            </Label>
            <Input
              type="text"
              maxLength={2}
              name="level_id"
              id="level_id"
              value={developerForm.level_id}
              onChange={(event) => handleChange(event)}
              placeholder={t('developers.placeholders.level') as string}
              isEditing={true}
            />
          </div>
        </FormGroup>
      </div>
    </Modal>
  );
}

export default CreateDeveloper;
