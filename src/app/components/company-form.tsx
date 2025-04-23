'use client';
import React from 'react';
import {Form, Formik} from 'formik';
import Button from '@/app/components/button';
import InputField from '@/app/components/input-field';
import LogoUploader from '@/app/components/logo-uploader';

export type CompanyFieldValues = {
    name: string;
    status: string;
    country: string;
    category: string;
    date: string;
    description: string;
};

const initialValues: CompanyFieldValues = {
    name: '',
    status: '',
    country: '',
    category: '',
    date: '',
    description: '',
};

export interface CompanyFormProps {
    onSubmitAction: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({onSubmitAction}: CompanyFormProps) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitAction}>
            <Form className="flex flex-col gap-10 ">
                <p className=" text-xl font-bold">Add new company</p>
                <div className="flex gap-6">
                    <div className="flex flex-col flex-1 gap-6">
                        <LogoUploader label="Logo" placeholder="Upload photo"
                                      className="w-44 h-44 rounded-full flex  gap-5"/>
                        <InputField label="Status" placeholder="Status" name="status"/>
                        <InputField label="Country" placeholder="Country" name="country"/>
                    </div>
                    <div className="flex flex-col flex-1 gap-6">
                        <InputField label="Name" placeholder="Name" name="name"/>
                        <InputField
                            label="Category"
                            placeholder="Category"
                            name="category"
                        />
                        <InputField label="Joined date" type="date" name="date"/>
                        <InputField
                            label="Description"
                            placeholder="Description"
                            name="description"
                        />
                    </div>
                </div>
                <Button type="submit">Add company</Button>
            </Form>
        </Formik>
    );
}