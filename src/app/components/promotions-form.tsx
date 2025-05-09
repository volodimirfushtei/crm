// components/PromotionForm.tsx

'use client';

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPromotion, getCompany } from '@/app/lib/api';
import Button from '@/app/components/button';
import InputField from '@/app/components/input-field';
import LogoUploader from '@/app/components/logo-uploader';

export interface PromotionFieldValues {
  title: string;
  description: string;
  discount: number;
  avatar: string;
}

const initialValues: PromotionFieldValues = {
  title: '',
  description: '',
  discount: 0,
  avatar: '',
};

export interface PromotionFormProps {
  companyId: string;
  onSubmit?: (values: PromotionFieldValues) => void | Promise<void>;
}

export default function PromotionForm({ companyId, onSubmit }: PromotionFormProps) {
  const queryClient = useQueryClient();
  const [avatarUrl, setAvatarUrl] = useState<string>();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
    enabled: Boolean(companyId),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPromotion,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['promotions', companyId] });
      await queryClient.invalidateQueries({ queryKey: ['promotions'], exact: true });
    },
  });

  const handleSubmit = async (values: PromotionFieldValues) => {
    try {
      if (!company) throw new Error('Company not found');

      await mutateAsync({
        ...values,
        discount: Number(values.discount) || 0,
        avatar: avatarUrl,
        companyId: company.id,
        companyTitle: company.title,
      });

      if (onSubmit) {
        onSubmit(values);
      }
    } catch (error: any) {
      console.error('Помилка при створенні акції:', error);
      if (error.message.includes('Max number of elements')) {
        alert('Максимальна кількість акцій досягнута.');
      } else {
        alert('Сталася помилка при створенні акції.');
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new promotion</p>
        <div className="flex flex-col gap-5 ">
          <InputField required label="Title" placeholder="Title" name="title" />
          <InputField required label="Description" placeholder="Description" name="description" />
          <InputField required type="number" label="Discount (%)" placeholder="Discount" name="discount" />
          <LogoUploader
            label="Image"
            placeholder="Upload photo"
            id="avatar"
            onUploadAction={(url) => {

              setAvatarUrl(url || undefined);
            }}
          />
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Add promotion'}
        </Button>
      </Form>
    </Formik>
  );
}

