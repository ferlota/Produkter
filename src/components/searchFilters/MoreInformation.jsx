import React from 'react';
import { List } from '@mantine/core';

export const MoreInformation = () => {
  return (
    <>
        <h4>Få mere viden om produkter</h4>

        <List listStyleType="disc" spacing="10px">
            <List.Item>Hvis du vil have et tip om nye farlige produkter løbende, kan du følge Sikkerhedsstyrelsen på Facebook eller Twitter.</List.Item>
            <List.Item>Vi har et API til registeret over farlige og mangelfulde produkter. Kontakt os, hvis du vil hente data til din virksomhed.</List.Item>
            <List.Item>Hent resultaterne af din søgning som CSV-fil (kan åbnes i for eksempel Excel)</List.Item>
        </List>

    </>
  )
}
