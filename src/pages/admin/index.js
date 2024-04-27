import { LoanListTable } from '@/components/admin/LoanListTable';
import { Layout } from '@/components/layout/layout';
import { ProtectedAdminRouteWrapper } from '@/security/ProtectedAdminRoute';
import React from 'react'

const Admin = () => {
  return (
    <ProtectedAdminRouteWrapper>
        <Layout>
        <div>
            <LoanListTable/>
        </div>
        </Layout>
    </ProtectedAdminRouteWrapper>
  )
}

export default Admin;
