import React, {useState} from 'react';
import {PageSecondary} from '../../../components/widget';
import {InputPrimary} from '../../../components/ui';
import {mb15} from '../../../styles/commonStyle';

const StepOne = ({navigation}) => {
  const [otp, setOtp] = useState('');

  return (
    <PageSecondary
      step="SCREEN.STEP_ONE.STEP"
      title="SCREEN.STEP_ONE.TITLE"
      onPress={() => navigation.navigate('StepTwo')}>
      <InputPrimary
        placeholder="PLACEHOLDER.OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        style={mb15}
      />
      <InputPrimary
        placeholder="PLACEHOLDER.OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        style={mb15}
      />
      <InputPrimary
        placeholder="PLACEHOLDER.OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        style={mb15}
      />
    </PageSecondary>
  );
};

export default StepOne;
