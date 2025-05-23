'use client';

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from '@/app/components/input-field';
import toast from 'react-hot-toast';
import { signIn } from '@/app/lib/api';

export interface SignInFieldValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: SignInFieldValues = {
  name: '',
  email: '',
  password: '',
};

export interface SignInFormProps {

  onSubmit?: (values: SignInFieldValues) => void | Promise<void>;
  onClose?: () => void;
}

export default function SignInForm({ onClose, onSubmit }: SignInFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    values: SignInFieldValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    setIsSubmitting(true);
    try {
      const result = await signIn(values.email, values.password);
      localStorage.setItem('token', result.token);
      toast.success('Signed in successfully!');
      if (onSubmit) {
        await onSubmit(values);
      }

      resetForm(); // ← очищає форму після сабміту
      if (onClose) onClose();
    } catch (err) {
      console.error('Sign-in failed:', err);
      toast.error('Failed to sign in');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values, actions) => handleSubmit(values, actions)}>
      {({ resetForm }) => (
        <Form className=" space-y-1  relative ">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 ">Get Started with TruScape</h3>
            {onClose && (
              <button onClick={onClose} className="text-gray-400 hover:text-gray-700 absolute top-0 right-0  ">
                <i className="ri-close-line text-2xl"></i>
              </button>
            )}
          </div>
          <InputField
            type="text"
            name="name"
            placeholder="Full name"
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-button focus:outline-none focus:border-primary"
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-button focus:outline-none focus:border-primary"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-button focus:outline-none focus:border-primary"
          />
          <button className="w-full bg-secondary text-white py-3 rounded-button hover:bg-primary/90 transition-colors"
                  type="button"
                  onClick={() => resetForm()}
          >
            Reset form
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-button hover:bg-primary/90 transition-colors"
          >
            {isSubmitting ? 'Signing in...' : 'Create Account'}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <a href="#" className="text-primary hover:text-primary/80">Sign in</a>
          </p>
        </Form>
      )}
    </Formik>
  );
}
