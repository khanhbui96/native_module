import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlanCard from '../components/PlanCard';
import {useRoute} from '@react-navigation/native';
import {Plan} from '../types';
import PayItem from '../components/PayItem';

const PayScreen = () => {
  const route = useRoute();
  const data: any = route.params;
  useEffect(() => {}, [data.plan]);
  return (
    <View>
      <PlanCard plan={data.plan} />
      <PayItem plan={data.plan} />
    </View>
  );
};

export default PayScreen;
