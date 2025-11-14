import React from 'react'
import { useState } from 'react';
import axios from 'axios'; 
import apiconfig from '../apiconfig';

const historicalData = async () =>  {
      try {
      const response = await axios.get(`${apiconfig.BASE_URL}/historical_data`,{
        params: {
          stock_name: 'NSDL',
          period: '5yr',
          filter: 'price'
        },
        headers: {
          'Authorization': `Bearer ${apiconfig.API_KEY}`,
          'x-api-key': `${apiconfig.API_KEY}`
        }
      });
      return response;
      }
      catch (err) {
        return err;
      }
    //   finally {
    //     setLoading(false);
    //   }
}

export default historicalData