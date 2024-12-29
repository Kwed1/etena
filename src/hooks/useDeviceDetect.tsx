import { useState, useEffect } from 'react';

export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop'
}

const useDeviceDetect = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    deviceType: ''
  });

  useEffect(() => {
    const detectDevice = () => {
      // Используем медиа-запросы для более точного определения
      const isMobileQuery = window.matchMedia('(max-width: 767px)');
      const isTabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
      
      const isMobile = isMobileQuery.matches;
      const isTablet = isTabletQuery.matches;
      const isDesktop = !isMobile && !isTablet;

      let deviceType = DeviceType.DESKTOP;
      if (isMobile) deviceType = DeviceType.MOBILE;
      if (isTablet) deviceType = DeviceType.TABLET;

      setDevice({
        isMobile,
        isTablet,
        isDesktop,
        deviceType
      });
    };

    // Начальное определение
    detectDevice();

    // Добавляем слушатели для медиа-запросов
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

    // Современный способ добавления слушателей
    const handleMobileChange = () => detectDevice();
    const handleTabletChange = () => detectDevice();

    mobileQuery.addEventListener('change', handleMobileChange);
    tabletQuery.addEventListener('change', handleTabletChange);

    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange);
      tabletQuery.removeEventListener('change', handleTabletChange);
    };
  }, []);

  return device;
};

export default useDeviceDetect