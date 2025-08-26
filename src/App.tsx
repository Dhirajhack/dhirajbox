
import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { DetailPage } from './components/DetailPage';
import { AddressPage } from './components/AddressPage';
import { PaymentPage } from './components/PaymentPage';
import { SuccessPage } from './components/SuccessPage';
import { MYSTERY_BOXES } from './constants';
import { Page } from './types';
import type { MysteryBox, CustomerInfo } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedBox, setSelectedBox] = useState<MysteryBox | null>(MYSTERY_BOXES[0]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const handleGoHome = useCallback(() => {
    setCurrentPage(Page.Home);
    setSelectedBox(null);
    setCustomerInfo(null);
  }, []);

  const handleViewDetails = useCallback((box: MysteryBox) => {
    setSelectedBox(box);
    setCurrentPage(Page.Details);
  }, []);
  
  const handleGoBackToHome = useCallback(() => {
      setCurrentPage(Page.Home);
      setSelectedBox(null);
  }, []);
  
  const handleGoBackToDetails = useCallback(() => {
      setCurrentPage(Page.Details);
  }, []);

  const handleGoBackToAddress = useCallback(() => {
      setCurrentPage(Page.Address);
  }, []);

  const handleBuyNow = useCallback(() => {
    setCurrentPage(Page.Address);
  }, []);
  
  const handleAddressSubmit = useCallback((info: CustomerInfo) => {
    setCustomerInfo(info);
    setCurrentPage(Page.Payment);
  }, []);
  
  const handlePayment = useCallback(() => {
    setCurrentPage(Page.Success);
  }, []);
  

  const renderPage = () => {
    switch (currentPage) {
      case Page.Details:
        return selectedBox && <DetailPage box={selectedBox} onBuyNow={handleBuyNow} onGoBack={handleGoBackToHome} />;
      case Page.Address:
        return <AddressPage onSubmit={handleAddressSubmit} onGoBack={handleGoBackToDetails} />;
      case Page.Payment:
        return selectedBox && customerInfo && <PaymentPage box={selectedBox} customerInfo={customerInfo} onPay={handlePayment} onGoBack={handleGoBackToAddress} />;
      case Page.Success:
        return customerInfo && <SuccessPage customerName={customerInfo.name} onGoHome={handleGoHome} />;
      case Page.Home:
      default:
        return <HomePage onViewDetails={handleViewDetails} />;
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar onGoHome={handleGoHome} />
      <div className="transition-opacity duration-500 ease-in-out">
        {renderPage()}
      </div>
      {currentPage === Page.Home && <Footer />}
    </div>
  );
}

export default App;