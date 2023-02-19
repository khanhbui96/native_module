import React, {useEffect, useState, useRef} from 'react';
import {Box, Text, Input, AlertDialog, Button} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {orderDetailApi} from '../api/serverApi';

interface OrderDetailScreenProps {}
const OrderDetailScreen = (props: OrderDetailScreenProps) => {
  const route = useRoute();
  const data: any = route.params;
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const [name, setName] = useState('');
  const [period, setPeriod] = useState('');
  const [transfer, setTransfer] = useState(0);
  const [tradeNo, setTradeNo] = useState('');
  const [time, setTime] = useState('');
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const handleOrder = async () => {};
  useEffect(() => {
    orderDetailApi({trade_no: data.trade_no})
      .then(res => {
        const {data} = res;
        let valuePeriod;
        switch (data.period) {
          case 'month_price':
            valuePeriod = 'Một tháng';
            break;
          case 'quarter_price':
            valuePeriod = 'Ba tháng';
            break;
          case 'half_year_price':
            valuePeriod = 'Sáu tháng';
            break;
          default:
            valuePeriod = 'Dài hạn';
            break;
        }

        const createTime = new Date(data.created_at * 1000);
        setName(data.plan.name);
        setPeriod(valuePeriod);
        setTransfer(data.plan.transfer_enable);
        setTradeNo(data.trade_no);
        setTime(createTime.toLocaleString('en-GB'));
        setTotal(data.total_amount);
        setPrice(data.plan[data.period]);
      })
      .catch(error => console.log(error));
  }, [data]);
  return (
    <Box>
      <Box
        pb="2"
        mt="2"
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
          <Text color="coolGray.800" fontWeight="600" fontSize="20">
            Thông tin
          </Text>
        </Box>
        <Box
          px="3"
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}>
          <Text fontWeight="400" fontSize="16">
            Tên sản phẩm： {name}
          </Text>
        </Box>
        <Box
          px="3"
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}>
          <Text fontWeight="400" fontSize="16">
            Loại/Chu kỳ： {period}
          </Text>
        </Box>
        <Box
          px="3"
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}>
          <Text fontWeight="400" fontSize="16">
            Dung lượng： {transfer}GB
          </Text>
        </Box>
      </Box>
      <Box
        pb="2"
        mt="2"
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
          <Text color="coolGray.800" fontWeight="600" fontSize="20">
            Thông tin đơn hàng
          </Text>
          <Button isLoading={false} rounded="full" bg="warning.700">
            Đóng đơn hàng
          </Button>
        </Box>

        <Box
          px="3"
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}>
          <Text fontWeight="400" fontSize="16">
            Mã đơn hàng： {tradeNo}
          </Text>
        </Box>
        <Box
          px="3"
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}>
          <Text fontWeight="400" fontSize="16">
            Thời gian tạo： {time}
          </Text>
        </Box>
      </Box>
      <Box
        pb="2"
        mt="2"
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
          <Text color="coolGray.800" fontWeight="600" fontSize="20">
            Phuơng thức thanh toán
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
            {name} x {period}
          </Text>
          <Text color="light.200" fontWeight="400" fontSize="14">
            {price}
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
            {total}
          </Text>
        </Box>
        <Box bg="muted.700">
          <Button m="2" onPress={() => setIsOpen(!isOpen)}>
            Kết toán
          </Button>
        </Box>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Chú Ý </AlertDialog.Header>
            <AlertDialog.Body>
              Việc thay đổi gói dịch vụ sẽ thay thế gói hiện tại bằng gói mới,
              xin lưu ý.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}>
                  Huỷ
                </Button>
                <Button onPress={handleOrder}>Đồng ý</Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Box>
    </Box>
  );
};

export default OrderDetailScreen;
