import {Box, Text, Pressable} from 'native-base';
import React from 'react';

const InviteItem = () => {
  return (
    <Pressable maxW="100%">
      {({isHovered, isPressed}) => {
        return (
          <Box
            py="2"
            borderBottomWidth="1"
            borderColor="coolGray.200"
            flexDirection="row"
            justifyContent="space-between"
            mx="3"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.98 : 1,
                },
              ],
            }}
            alignItems={'center'}>
            <Text color="coolGray.800" fontWeight="400" fontSize="16">
              fG18lXHa
            </Text>
            <Text color="coolGray.800" fontWeight="400" fontSize="16">
              2023/02/17 21:08
            </Text>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default InviteItem;
