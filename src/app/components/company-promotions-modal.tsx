'use client';
import React from 'react';
import PromotionsForm, {PromotionsFormProps} from '@/app/components/promotions-form';
import Modal, {ModalProps} from '@/app/components/modal';


export interface PromotionsFormModalProps extends ModalProps {

    onSubmitAction: PromotionsFormProps['onSubmitAction'];
}

export default function PromotionsFormModal({
                                                onSubmitAction,
                                                ...rest
                                            }: PromotionsFormModalProps) {
    return (
        <div>
            <Modal {...rest} size="sm">
                <PromotionsForm onSubmitAction={onSubmitAction}/>
            </Modal>
        </div>
    );
}