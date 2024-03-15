import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const MiComponente = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    axios.get('ts-api-utils')
      .then(response => {
        setDatos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  }, []);

};
