'use client';
import React from 'react';
import {Form, Formik} from 'formik';
import Button from '@/app/components/button';
import InputField from '@/app/components/input-field';
import LogoUploader from "@/app/components/logo-uploader";

export type PromotionsFieldValues = {
    title: string;
    description: string;
    discount: string;
    image: any;

};

const initialValues: PromotionsFieldValues = {
    title: '',
    description: '',
    discount: '',
    image: '',
};

export interface PromotionsFormProps {
    onSubmitAction: (values: PromotionsFieldValues) => void | Promise<void>;
}

export default function PromotionsForm({onSubmitAction}: PromotionsFormProps) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitAction}>
            {({setFieldValue}) => (
                <Form className="flex flex-col gap-7">
                    <p className="text-xl font-semibold">Add Promotion</p>
                    <InputField label="Title" name="title" placeholder="Title"/>
                    <InputField
                        label="Description"
                        name="description"
                        placeholder="Description"
                    />
                    <InputField
                        label="Discount"
                        name="discount"
                        placeholder="-40%"
                    />
                    <LogoUploader
                        className=" w-[308px] h-[184px] gap-[8px] flex-col "
                        label="Image"
                        placeholder="Upload image"
                        onChange={(file) => setFieldValue('image', file)}
                    />
                    <Button type="submit">Add Promotion</Button>
                </Form>
            )}
        </Formik>
    );
}