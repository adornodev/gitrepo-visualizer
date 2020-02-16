import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        // No android, além de aparecer a seta para voltar, aparece um texto do componente junto. Para evitar isso,
        // setar como false
        headerBackTitleVisible: false,
      },
    }
  )
);

export default Routes;
