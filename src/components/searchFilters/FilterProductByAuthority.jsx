import React from 'react';

import { Checkbox } from '@mantine/core';

export const FilterProductByAuthority = () => {
  return (
    <>
    <h4>Filtrer på myndighed</h4>
    <div>
      <Checkbox
               label="Sikkerhedsstyrelsen"
      />
    </div>
</>
  )
}
