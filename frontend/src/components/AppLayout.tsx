import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Content>{children}</Content>
    </Layout>
  );
};

export default AppLayout;