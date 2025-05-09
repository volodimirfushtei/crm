'use client';
import React, {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';

export interface ModalProps {
    children?: React.ReactNode;
    show: boolean;
    onCloseAction: () => void;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'; // ← новий проп
}

export default function Modal({show, children, onCloseAction, size}: ModalProps) {
    const sizeMap = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
        '4xl': 'sm:max-w-4xl',
    };
    const modalSize = sizeMap[size || '2xl'];
    const handleClose = () => {
        onCloseAction();

    };
    return (
        <Transition as={Fragment} appear show={show}>
            <Dialog
                as="div"
                className="fixed inset-0 z-50 flex items-center"
                onClose={handleClose}
            >
                <Transition
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={show}
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition>
                <div role="dialog" aria-modal="true"
                     className={`relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full ${modalSize}`}>
                    {children}
                </div>
            </Dialog>
        </Transition>
    );
}