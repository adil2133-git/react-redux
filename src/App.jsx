import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './Component/CakeContainer'
import store from './Redux/Store'
import HooksCakeContainer from './Component/HooksCakeContainer'
import IceCreamContainer from './Component/iceCreamContainer'
import NewCakeContainer from './Component/NewCakeContainer'
import ItemContainer from './Component/ItemContainer'
import UserContainer from './Component/UserContainer'

function App() {

  return (
    <Provider store={store}>
      <UserContainer />
      {/* <ItemContainer cake/>
      <ItemContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> */}
    </Provider>
  )
}

export default App
