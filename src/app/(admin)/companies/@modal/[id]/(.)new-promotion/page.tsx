'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/company-promotions-modal';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: companyId } = use(params); // <- тут unwrap через React.use()
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={companyId}
      show={true}
      onCloseAction={() => router.back()}
    />
  );
}

