import { useParams } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

export const Details = () => {
  const { id } = useParams();
  console.log('DATA', id);
  return (
    <div>
      <Heading>Details</Heading>
    </div>
  );
};
