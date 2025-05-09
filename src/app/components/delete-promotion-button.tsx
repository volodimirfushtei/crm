// components/DeletePromotionButton.tsx

'use client';

import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePromotion } from '@/app/lib/api';

interface DeletePromotionButtonProps {
  promotionId: string;
  className?: string;
}

export default function DeletePromotionButton({ promotionId }: DeletePromotionButtonProps) {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => deletePromotion(promotionId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['promotions'] });

    },
  });

  return (
    <button
      type="button"
      onClick={async () => {
        if (confirm('Ви дійсно хочете видалити цю акцію?')) {
          try {
            await mutateAsync();
            alert('Акція видалена!');
          } catch (error: any) {
            alert(`Не вдалося видалити акцію: ${error.message}`);
          }
        }
      }}
      disabled={isPending}
      className="delete-button cursor-pointer text-gray-600 hover:text-red-600 transition-colors absolute bottom-0 right-0"
    >
      {isPending ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-50"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          Deleting...
        </span>
      ) : (
        '🗑️'
      )}
    </button>
  );
}