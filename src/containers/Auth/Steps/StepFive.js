import React, {useState} from 'react';
import {PageSecondary} from '../../../components/widget';
import {InputPrimary} from '../../../components/ui';
import {mb15} from '../../../styles/commonStyle';

const StepFive = ({navigation}) => {
  const [otp, setOtp] = useState('');

  return (
    <PageSecondary
      step="SCREEN.STEP_FIVE.STEP"
      title="SCREEN.STEP_FIVE.TITLE"
      onPress={() => navigation.navigate('Success')}>
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

export default StepFive;
