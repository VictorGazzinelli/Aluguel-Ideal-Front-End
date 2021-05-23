import React, { useState, useEffect } from 'react';
import {Spin} from 'antd';

import useDoRequest from '../../hooks/useDoRequest';
import { IAdvertismentDto } from '../../services/advertisements/advertisementsInterface';

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [advertisements, setAdvertisements] = useState<IAdvertismentDto[]>([]);
  const getAdvertismentRequest = useDoRequest((api) => api.advertisements.GetAdvertisements);

  const getAdvertisements = () => {
    setLoading(true);
    getAdvertismentRequest.doRequest({})
    .then((response) => {
      setAdvertisements(response.items)
    })
    .catch(err =>{
      console.error(err)
      alert("Ocorreu um erro ao obter anuncios") 
    })
    .finally(() => setLoading(false))
  };
  useEffect(getAdvertisements,[])

  return (
    <div>
    {
      !loading && !!advertisements ? (
          advertisements.map((advertisement:IAdvertismentDto) => (
            <h1>{advertisement.title}</h1>
          ))
      ) :
      (
        <div className="loading-wrapper">
            <Spin />
        </div>
      )
    }
    </div>
  )
}

export default HomeScreen