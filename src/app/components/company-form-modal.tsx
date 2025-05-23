'use client';
import React from 'react';
import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';


export interface CompanyFormModalProps extends ModalProps {

  onSubmitAction: CompanyFormProps['onSubmitAction'];
  onCloseAction: () => void;
}

export default function CompanyFormModal({
                                           onSubmitAction,
                                           onCloseAction,
                                           ...rest
                                         }: CompanyFormModalProps) {
  return (
    <div>
      <Modal {...rest} onCloseAction={onCloseAction} size="2xl">
        <CompanyForm onSubmitAction={() => onCloseAction()} />
      </Modal>
    </div>
  );
}