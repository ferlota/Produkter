import React from 'react';

import { Container, Grid, Button }  from '@mantine/core';
import { TextAndImages }            from './textAndResults/TextAndImages';
import { SearchInput }              from './searchFilters/SearchInput';
import { FilterProductType }        from './searchFilters/FilterProductType';
import { FilterProductCategory }    from './searchFilters/FilterProductCategory';
import { FilterProductByAuthority } from './searchFilters/FilterProductByAuthority';
import { MoreInformation }          from './searchFilters/MoreInformation';


export const MainGrid = () => {
  return (
    <Container>
      <br/>
         <Grid justify="space-around">
            <Grid.Col xs={4} sm={6} md={4} lg={4}>
               <SearchInput/>
               <br/>
               <FilterProductType/>
               <hr/>
               <FilterProductCategory/>
               <hr/>
               <FilterProductByAuthority/>
               <br/>
               <hr/>
               <Button variant="outline"
                       radius="lg"
                       size="md"
                       onClick={() => null }>  {/*Reset Filters*/ }
                Ryd filtre 
                </Button>
                <br/>
                <MoreInformation />
            </Grid.Col>
            <Grid.Col xs={4} sm={6} md={8} lg={8}>
                <TextAndImages />
            </Grid.Col>
        </Grid>
    </Container>
  )
}
