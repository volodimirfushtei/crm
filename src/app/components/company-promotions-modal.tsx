'use client';

import React from 'react';
import PromotionsForm from '@/app/components/promotions-form';
import Modal, {ModalProps} from '@/app/components/modal';

export interface PromotionFormModal extends ModalProps {
    companyId: string;
    onCloseAction: () => void;
}

export default function PromotionsFormModal({
                                                companyId,
                                                onCloseAction,
                                                ...rest
                                            }: PromotionFormModal) {
    return (
        <Modal {...rest} onCloseAction={onCloseAction}>
            <PromotionsForm companyId={companyId} onSubmit={() => onCloseAction()}/>
        </Modal>
    );
}

