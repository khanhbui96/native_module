import React, {useEffect, useState} from 'react';
import {Box, Radio, Text, Center, Input, Pressable, Button} from 'native-base';

interface PayItemProps {
  plan: any;
}
const PayItem = (props: PayItemProps) => {
  const {plan} = props;
  const [value, setValue] = useState('Một tháng');
  const [data, setData] = useState({
    month_price: '',
    quarter_price: '',
    half_year_price: '',
    capacity_limit: -1,
    name: '',
    timeSelect: 'Một tháng',
    price: 0,
  });
  useEffect(() => {
    const {name, month_price, quarter_price, half_year_price, capacity_limit} =
      plan;
    let timeSelect;
    let price;
    if (value === '1') {
      timeSelect = 'Một tháng';
      price = month_price;
    }
    setData({
      ...data,
      month_price,
      quarter_price,
      half_year_price,
      capacity_limit,
      name,
    });
  }, [plan]);
  return (
    <Box
      w="96%"
      shadow="3"
      mx="2"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      bg="gray.50">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        mx="3"
        my="3"
        alignItems={'center'}>
        <Text color="coolGray.800" fontWeight="600" fontSize="16">
          Chu kỳ thanh toán
        </Text>
        <Text color="coolGray.800" fontWeight="400" fontSize="16"></Text>
      </Box>

      <Box mx="3">
        <Radio.Group
          onChange={value => {
            console.log(value);
            setValue(value);
          }}
          defaultValue="Một tháng"
          name="exampleGroup"
          accessibilityLabel="select prize">
          <Radio value="Một tháng" my={1}>
            <Box flexDirection="row" w="90%" justifyContent="space-between">
              <Text fontSize="16">Một tháng</Text>
              <Text fontSize="16">đ{data.month_price}</Text>
            </Box>
          </Radio>
          <Radio value="Ba tháng" my={1}>
            <Box flexDirection="row" w="90%" justifyContent="space-between">
              <Text fontSize="16">Ba tháng</Text>
              <Text fontSize="16">đ{data.quarter_price}</Text>
            </Box>
          </Radio>
          <Radio value="Sáu tháng" my={1}>
            <Box flexDirection="row" w="90%" justifyContent="space-between">
              <Text fontSize="16">Sáu tháng</Text>
              <Text fontSize="16">đ{data.half_year_price}</Text>
            </Box>
          </Radio>
        </Radio.Group>
      </Box>
      <Box
        p="2"
        bg="muted.700"
        borderBottomWidth="1"
        borderColor="coolGray.500"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={'center'}>
        <Input
          variant="unstyled"
          placeholder="Mã giảm giá"
          w="50%"
          fontSize="16"
          color="light.200"
        />
        <Button
          isLoading={false}
          isLoadingText="Đang xác minh"
          onPress={() => console.log('hello world')}>
          Xác minh
        </Button>
      </Box>
      <Box
        pt="2"
        px="4"
        bg="muted.700"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={'center'}>
        <Text color="light.200" fontWeight="400" fontSize="16">
          Tổng tiền đơn hàng
        </Text>
        <Text color="coolGray.800" fontWeight="400" fontSize="16"></Text>
      </Box>
      <Box
        p="4"
        bg="muted.700"
        borderBottomWidth="1"
        borderColor="coolGray.500"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={'center'}>
        <Text color="light.200" fontWeight="400" fontSize="14">
          {data.name} x {value}
        </Text>
              <Text color="light.200" fontWeight="400" fontSize="14">
                  
        </Text>
      </Box>
      <Box
        pt="2"
        px="4"
        bg="muted.700"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={'center'}>
        <Text color="light.200" fontWeight="400" fontSize="16">
          Tổng
        </Text>
        <Text color="coolGray.800" fontWeight="400" fontSize="16"></Text>
      </Box>
      <Box
        p="4"
        bg="muted.700"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={'center'}>
        <Text color="light.200" fontWeight="400" fontSize="20">
          {value === 'Một tháng' && `${data.month_price}VND`}
          {value === 'Ba tháng' && `${data.quarter_price}VND`}
          {value === 'Sáu tháng' && `${data.half_year_price}VND`}
        </Text>
      </Box>
      <Box bg="muted.700">
        <Button m="2">
          {data.capacity_limit !== -1 ? 'Đặt hàng' : 'Không khả dụng'}
        </Button>
      </Box>
    </Box>
  );
};

export default PayItem;
