import React from 'react';
import { Checkbox } from '@mantine/core';

export const FilterProductCategory = () => {
  return (
    <>
        <h4>Filtrer på produktkategori</h4>
        <div>           
            <Checkbox
               label="Byggevarer"
            />
        </div>
        <div>
            <Checkbox
               label="Diverse"
            />
        </div>
        <div>
            <Checkbox
               label="ECO-design og energimærkning"
            />
        </div>
        <div>
            <Checkbox
               label="Elevatorer og tovbaneanlæg"
            />
        </div>
        <div>
            <Checkbox
               label="Elprodukter"
            />
        </div>
        <div>
            <Checkbox
               label="Fyrværkeri og eksplosiver"
            />
        </div>
        <div>
            <Checkbox
               label="Gasprodukter"
            />          
        </div>
        <div>
            <Checkbox
               label="Generel produktsikkerhed"
            />       
        </div>
        <div>
            <Checkbox
                label="Legetøj"
            />
        </div>
        <div>
            <Checkbox
               label="Personlige værnemidler"
            />       
        </div>
        <div>
            <Checkbox
                label="Metrologi"
            />
        </div>
        <div>
            <Checkbox
                label="Personlige værnemidler"
            />           
        </div>
    </>
  )
}
