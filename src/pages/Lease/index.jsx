import React from 'react';
import { useParams } from 'react-router';

import { ExpandCollapse, Owner, Rating, Slider, Tags } from '../../components';
import leases from '../../libs/locations.json';
import {
  Body,
  Container,
  Equipment,
  Equipments,
  ExtraData,
  Header,
  Location,
  MainData,
  Title,
} from './style';

const Lease = () => {
  const { leaseId } = useParams();
  const lease = leases.find(item => item.id === leaseId);

  return (
    <Container>
      <Slider item={lease} />
      <Header>
        <MainData>
          <Title>{lease.title}</Title>
          <Location>{lease.location}</Location>
          <Tags list={lease.tags} />
        </MainData>
        <ExtraData>
          <Owner details={lease.host} />
          <Rating value={lease.rating} />
        </ExtraData>
      </Header>
      <Body>
        <ExpandCollapse title="Description">{lease.description}</ExpandCollapse>
        <ExpandCollapse title="Équipements">
          <Equipments>
            {lease.equipments.map((equipment, index) => (
              <Equipment key={`equipment_${index}`}>{equipment}</Equipment>
            ))}
          </Equipments>
        </ExpandCollapse>
      </Body>
    </Container>
  );
};

export default Lease;
