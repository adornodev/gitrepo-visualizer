import React from 'react';
import { View } from 'react-native';
import '../../config/ReactotronConfig';
import { Container } from './styles';

export default function Main() {
  return <Container />;
}

Main.navigationOptions = {
  title: 'Usuários',
};
