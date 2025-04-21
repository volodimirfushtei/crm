import React from 'react';
import {getSummarySales} from '@/app/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export default async function Page() {
    await delay(4000);
    const data = await getSummarySales();

    return (
        <DashboardCard label="Sales details">
            <SummaryTable
                headers={
                    <>
                        <SummaryTableHeader>Company</SummaryTableHeader>
                        <SummaryTableHeader align="center">Sold</SummaryTableHeader>
                        <SummaryTableHeader align="center">Income</SummaryTableHeader>
                    </>
                }
            >
                {data.map(({companyId, companyTitle, sold, income}) => (
                    <tr key={companyId}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell align="center">{sold}</SummaryTableCell>
                        <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    );
}
