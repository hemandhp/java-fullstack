import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import { Store } from './app/Store'
import './App.css'

function App() {
  
  return(
    <div>
       <Provider store={Store}>
        <Counter />
       </Provider>
    </div>
  )
}

export default App
