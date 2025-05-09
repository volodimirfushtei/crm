// components/LogoUploader.tsx
'use client';

import React, {useEffect, useState} from 'react';

interface LogoUploaderProps {
    label?: string;
    placeholder?: string;
    id?: string;
    name?: string;
    className?: string;
    onUploadAction: (url: string | null) => void;
}

export default function LogoUploader({label, placeholder, id, onUploadAction}: LogoUploaderProps) {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (!file) {
            setPreview(null);
            onUploadAction(null);
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);

        if (!selectedFile) {
            onUploadAction(null);
            return;
        }

        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '');

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.error?.message || 'Помилка завантаження зображення');
            }

            onUploadAction(data.secure_url);
        } catch (error) {
            console.error('Помилка при завантаженні зображення:', error);
            alert('Сталася помилка при завантаженні зображення.');
            onUploadAction(null);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {label && <p className="text-base font-medium text-gray-900">{label}</p>}
            <label
                htmlFor={id}
                className="flex flex-col items-center justify-center border border-dashed border-slate-900 rounded cursor-pointer p-4 hover:bg-gray-50 transition"
            >
                {preview ? (
                    <img src={preview} alt="Preview" className="mb-2 w-24 h-24 object-cover rounded-full"/>
                ) : (
                    <>
                        <img src="/icons/upload.svg" alt="Upload" className="mb-2 w-12 h-12"/>
                        {placeholder && <p className="text-sm text-gray-500">{placeholder}</p>}
                    </>
                )}
                <input
                    id={id}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
            {uploading && <p className="text-sm text-gray-500">Завантаження...</p>}
        </div>
    );
}


