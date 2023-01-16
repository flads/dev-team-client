import { ModalProps } from '../interfaces/components/modal.interface';
import { useEffect } from 'react';
import Button from './forms/Button';
import CloseIcon from './icons/Close';

function Modal({
  content,
  width = 'fit',
  confirmButtonColor,
  loadingButton,
  disableConfirmButton,
  onConfirm,
  onCancel,
  children,
}: ModalProps) {
  useEffect(() => {
    closeModalOnClickOutside();
    closeModalOnPressEscapeKey();
  }, []);

  const closeModalOnClickOutside = () => {
    const modalBackground = document.getElementById('modalBackground');
    const modalCard = document.getElementById('modalCard');

    if (modalBackground) {
      modalBackground.addEventListener(
        'click',
        (event: MouseEvent) => {
          if (
            event.target &&
            modalCard &&
            !modalCard.contains(event.target as any)
          ) {
            onCancel(event as any);
          }
        },
        false
      );
    }
  };

  const closeModalOnPressEscapeKey = () => {
    document.body.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel(event as any);
      }
    });
  };

  return (
    <div>
      <div
        id="modalBackground"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div id="modalCard" className={`relative w-${width} my-6`}>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-4 rounded">
              <h3 className={`font-medium ${children && 'text-lg'}`}>
                {content.title}
              </h3>
              <CloseIcon onClick={onCancel} />
            </div>
            {content?.message && (
              <div className="relative p-6 flex-auto">
                <p className="my-2 text-slate-500 leading-relaxed">
                  {content.message}
                </p>
              </div>
            )}
            {children && children}
            <div className="flex items-center justify-end p-2 rounded-b">
              {content?.cancel && (
                <Button
                  text={content.cancel}
                  color="transparent"
                  styleName="font-bold uppercase"
                  onClick={onCancel}
                />
              )}
              <Button
                text={content.confirm}
                loading={loadingButton}
                loadingText={content.confirming}
                disabled={disableConfirmButton}
                color={confirmButtonColor}
                styleName="uppercase"
                onClick={onConfirm}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <span className={`hidden ${loadWidths()}`}></span>
    </div>
  );
}

function loadWidths() {
  return `w-fit w-1/4 w-2/4 w-3/4 w-full`;
}

export default Modal;
