import React from 'react';
import { Accordion } from '@mantine/core';

export const OldInformation = () => {
  return (
    <Accordion>
    <Accordion.Item label="Leder du efter farlige produkter fra før 10. juli 2021?" iconPosition="right">
    Hvis du har brug for at finde oplysninger om farlige produkter fra før 10. juli 2021, kan du se dem på Sikkerhedsstyrelsens arkiv for farlige produkter.
    
    <br/>
    <h4>Om produkterne på produkter.dk</h4>

    På denne side kan du se de farlige og mangelfulde produkter fra Sikkerhedsstyrelsen. Hvis du vil se farlige og mangelfulde produkter fra andre myndigheder, kan du få et overblik over myndigheder, der laver markedsovervågning her.

    <br/>
    <h4>Myndigheder tester ikke alt – og godkender intet</h4>

    De danske myndigheder godkender ikke produkter, og vi tester heller ikke alle produkter.

    <br/>
    <br/>
    Vi laver stikprøvekontroller og undersøger de produkter, som borgerne anmelder, fordi de virker farlige. Derfor betyder det ikke nødvendigvis, at et produkt er sikkert, hvis du ikke kan finde det på siden.
    </Accordion.Item>
</Accordion>
  )
}
