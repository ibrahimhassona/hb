"use client"
import React, { useState, useEffect } from 'react';
import { APIProvider, Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import { useLocale, useTranslations } from 'next-intl';
import LocationPopUp from './LocationPopUp';


function LocationMaps({ positions, selectedValue, clickedItemHandler }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  // ============= Hooks ================
  const locale = useLocale();
  const [clickedPosition, setClickedPosition] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [apiProviderKey, setApiProviderKey] = useState(0);
  // ============= Translation ================
  const t = useTranslations("Locations")
  // ============= Main Location Center ================
  const mainCenter = { lat: 24.6079709, lng: 46.7724469 }
  // ============= Clicked Item Handler ( To Pass the value to parent ) ==============
  const handleClicked = (item) => {
    clickedItemHandler(item); 
  };
  // ============= Get Data to show it on the map =======
  useEffect(() => {
    const selectedBranch = positions?.find(item => item.title === selectedValue);
    if (selectedBranch) {
      setSelectedPosition({ lat: parseFloat(selectedBranch.lat), lng: parseFloat(selectedBranch.lng) });
    }
    setApiProviderKey(prevKey => prevKey + 1);
  }, [selectedValue]);

  return (
    <div className='w-full flex h-[500px] border  max-sm:h-[350px] shadow-md  rounded-md'>
      <APIProvider apiKey={apiKey} language={locale} key={apiProviderKey}>
        {positions && (
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={
              selectedPosition && selectedValue != t("all") ? selectedPosition : mainCenter
            }
            defaultZoom={selectedPosition && selectedValue != t("all") ? 6 : 5}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            {

              selectedPosition && selectedValue != t("all") ? positions?.filter(item => item.title === selectedValue).map((position, index) => (
                <Marker
                  key={index}
                  position={{ lat: parseFloat(position.lat), lng: parseFloat(position.lng) }}
                  onClick={() => {setClickedPosition(position),handleClicked(position)}}
                />
              )) : positions.map((position, index) => (
                <Marker
                  key={index}
                  position={{ lat: parseFloat(position.lat), lng: parseFloat(position.lng) }}
                  onClick={() => {setClickedPosition(position),handleClicked(position)}}
                />
              ))
            }

            {clickedPosition && (
              <InfoWindow
                position={{ lat: parseFloat(clickedPosition.lat), lng: parseFloat(clickedPosition.lng) }}
                onCloseClick={() => setClickedPosition(null)}
              >
                <div className='font-sans'>
                  <LocationPopUp item={clickedPosition} /> {/* ===== Popup For Every selected Location ===== */}
                </div>
              </InfoWindow>
            )}
          </Map>
        )}
      </APIProvider>
    </div>
  );
}

export default LocationMaps;
