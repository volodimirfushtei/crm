'use client';

import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <motion.div initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}>
      <Button className="drop-shadow-xl" onClick={() => router.push('/companies/new')}>Add
        company</Button>
    </motion.div>
  );
}