import React from 'react';
import styles from './magicpattern.module.css';
import Image from 'next/image';
export interface NotActiveLabelProps {
    children: React.ReactNode;

}

export default function MagicPattern({ children }: NotActiveLabelProps) {
    return <div className={styles.pattern}><div className={styles.item}></div>
        <div className={styles.title}>Total promotions</div><span className={styles.num}>432</span>
        <Image src="/images/magicpattern-mesh-gradient-1.png" alt="magicpattern" width={268} height={152}  />
        {children}
    </div>;
}