'use client';
import React from 'react';
import CompanyForm, {CompanyFormProps} from '@/app/components/company-form';
import Modal, {ModalProps} from '@/app/components/modal';

export interface CompanyFormModalProps extends ModalProps {

    onSubmitAction: CompanyFormProps['onSubmitAction'];
}

export default function CompanyFormModal({
                                             onSubmitAction,
                                             ...rest
                                         }: CompanyFormModalProps) {
    return (
        <>
            <Modal {...rest} >
                <CompanyForm onSubmitAction={onSubmitAction}/>
            </Modal>
        </>
    );
}