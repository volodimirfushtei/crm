'use client';

import React from 'react';
import Modal, { ModalProps } from '@/app/components/modal';
import SignInForm from '@/app/components/sign-in-form';

export interface GetStartedModalProps extends ModalProps {
  onCloseAction: () => void;
}

export default function GetStartedModal({ show, onCloseAction, ...rest }: GetStartedModalProps) {
  return (
    <Modal show={show} onCloseAction={onCloseAction}  {...rest} size="sm">
      <SignInForm onSubmit={onCloseAction} onClose={onCloseAction} />
    </Modal>
  );
}


