'use client';

import Button from "@/app/components/button";
import PromotionsFormModal from "@/app/components/company-promotions-modal";
import {motion} from 'framer-motion'
import React, {useState} from 'react';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-promotions-modal'), {

    ssr: false,
});
export default function AddPromotionsButton() {
    const [show, setShow] = useState(false)
    return (
        <motion.div initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0, transition: {duration: 1}}}>
            <>
                <Button onClick={() => setShow(true)}>Add promotions</Button>
                <PromotionsFormModal
                    onSubmitAction={console.log}
                    show={show}
                    onCloseAction={() => setShow(false)}
                />
            </>
        </motion.div>
    );
}