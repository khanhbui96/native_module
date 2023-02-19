import React, {useEffect, useState} from 'react';
import {Box, Text, Center, Heading, Pressable} from 'native-base';
import ServerItem from '../components/ServerItem';
import OrderItem from '../components/OrderItem';

interface OrderScreenProps {}
const OrderScreen = (props: OrderScreenProps) => {
  return (
    <Box alignItems="center" flex={1}>
      <Box
        flex={1}
        p="2"
        w="96%"
        maxW="96"
        shadow="3"
        mt="2"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Box>
    </Box>
  );
};

export default OrderScreen;
