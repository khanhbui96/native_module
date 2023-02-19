import {
  Box,
  Heading,
  Text,
  Center,
  Stack,
  Button,
  Input,
  FormControl,
  ScrollView,
  Switch,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import InviteItem from '../components/InviteItem';

const AccountScreen = () => {
  return (
    <ScrollView>
      <Box alignItems="center">
        <Box
          w="96%"
          maxW="96"
          shadow="3"
          mx="2"
          mt="2"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          bg="gray.50">
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Text fontSize="14">Ví tiền của tôi</Text>
            </Stack>
            <Stack space={2}>
              <Heading>0 VND</Heading>
            </Stack>

            <Stack space={2}>
              <Text fontSize="14">Số dư tài khoản</Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          w="96%"
          maxW="96"
          shadow="3"
          mx="2"
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
          <Box flexDirection="row" justifyContent="space-between" mx="3" mt="3">
            <Text color="coolGray.800" fontWeight="600" fontSize="18">
              Đổi mật khẩu
            </Text>
            <Text color="coolGray.800" fontWeight="400" fontSize="16"></Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-between" mx="3" mt="3">
            <FormControl>
              <FormControl.Label>Mật khẩu cũ</FormControl.Label>
              <Input />
            </FormControl>
          </Box>
          <Box flexDirection="row" justifyContent="space-between" mx="3" mt="3">
            <FormControl>
              <FormControl.Label>Mật khẩu mới</FormControl.Label>
              <Input />
            </FormControl>
          </Box>
          <Box flexDirection="row" justifyContent="space-between" mx="3" my="3">
            <FormControl>
              <FormControl.Label>Xác nhận mật khẩu mới</FormControl.Label>
              <Input />
            </FormControl>
          </Box>
          <Box flexDirection="row" justifyContent="space-between" mx="3" my="3">
            <Button px="8">Lưu</Button>
          </Box>
        </Box>
        <Box
          w="96%"
          maxW="96"
          shadow="3"
          mx="2"
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
          <Box flexDirection="row" justifyContent="space-between" mx="3" mt="3">
            <Text color="coolGray.800" fontWeight="600" fontSize="18">
              Thông báo
            </Text>
            <Text color="coolGray.800" fontWeight="400" fontSize="16"></Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-between" mx="3" mt="3">
            <FormControl.Label>Mail nhắc đến hạn</FormControl.Label>
            <Switch
              defaultIsChecked
              colorScheme="primary"
              size="lg"
              onValueChange={value => console.log(value)}
            />
          </Box>
          <Box flexDirection="row" justifyContent="space-between" mx="3" mt="3">
            <FormControl.Label>Mail nhắc dung lượng</FormControl.Label>
            <Switch
              defaultIsChecked
              colorScheme="primary"
              size="lg"
              onValueChange={value => console.log(value)}
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default AccountScreen;
