import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import './index.css'

function App() {
  return (
    <div className="bg-[url('./GoodEvening.jpg')] bg-fixed bg-cover bg-center min-h-screen" >
      <TodoWrapperLocalStorage  />
    </div>
  );
}

export default App;