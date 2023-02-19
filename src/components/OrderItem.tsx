import React, {useEffect, useState} from 'react';
import {Box, Text, Pressable, Icon, Center} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface OrderItemProps {}
const OrderItem = (props: OrderItemProps) => {
  return (
    <Box alignItems="center">
      <Pressable maxW="100%" flexDirection="row">
        {({isHovered, isPressed}) => {
          return (
            <Box
              p="2"
              flexDirection="row"
              justifyContent="space-between"
              px="2"
              flex="1"
              bg={false ? 'gray.300' : 'coolGray.100'}
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.99 : 1,
                  },
                ],
              }}
              borderBottomWidth="1"
              borderColor="coolGray.200">
              <Box flex="2">
                <Text color="coolGray.800" fontWeight="600" fontSize="16">
                  VN VIP LQ
                </Text>
                <Text color="coolGray.400" fontSize="14">
                  2023-02-17 19:50:31
                </Text>
              </Box>
              <Center flex="1">
                <Text color="coolGray.800" fontWeight="600" fontSize="16">
                  300000
                </Text>
                <Center flexDirection={'row'}>
                  <Icon
                    mr="2"
                    color={'coolGray.400'}
                    size="2"
                    as={<MaterialCommunityIcons name="circle" />}
                  />
                  <Text color="coolGray.400" fontSize="14">
                    Đã huỷ
                  </Text>
                </Center>
              </Center>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};

export default OrderItem;
