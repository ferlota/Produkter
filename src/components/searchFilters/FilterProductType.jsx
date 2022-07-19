import React from 'react'

import { Checkbox } from '@mantine/core';

export const FilterProductType = () => {
  return (
    <>
        <h4>Filtrer på produkttype</h4>
        <div>
            <Checkbox
               label="Farlige produkter"
            />
        </div>
        <div>
            <Checkbox
               label="Mangelfulde produkte"
            />           
        </div>
    </>
  )
}
