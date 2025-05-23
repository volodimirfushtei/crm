// components/CompanyForm.tsx

'use client';

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '@/app/components/button';
import InputField from '@/app/components/input-field';
import LogoUploader from '@/app/components/logo-uploader';
import { createCompany } from '@/app/lib/api';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';


export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  joinedDate: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  joinedDate: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmitAction?: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmitAction }: CompanyFormProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = async (values: CompanyFieldValues) => {
    try {
      setUploading(true);
      await createCompany({
        title: values.name,
        status: values.status,
        countryTitle: values.country,
        categoryTitle: values.category,
        joinedDate: values.joinedDate,
        description: values.description,
        avatar: avatarUrl || '',
        hasPromotions: false,
        categoryId: '',
        countryId: '',
      });

      // ⬇️ Оновлення списку компаній
      await queryClient.invalidateQueries({ queryKey: ['companies'] });

      toast.success('Company was created successfully!');

      if (onSubmitAction) {
        onSubmitAction(values);
      }
    } catch (error) {
      console.error('Failed to create company', error);
      toast.error('Failed to create company');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10  ">
        <h2 className="text-xl font-bold ">Add new company</h2>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-6">
            <LogoUploader label="Logo" placeholder="Upload photo"
                          onUploadAction={(url) => {
                            setAvatarUrl(url);
                          }} />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField label="Category" placeholder="Category" name="category" />
            <InputField label="Joined date" type="date" name="joinedDate" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"

            />
          </div>
        </div>
        <Button type="submit" disabled={uploading}>
          {uploading ? 'Creating...' : 'Add company'}
        </Button>
      </Form>
    </Formik>
  );
}