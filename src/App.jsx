import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import './index.css'

function App() {
  return (
    <div 
    className="bg-fixed bg-cover bg-center min-h-screen"
    style={{
    backgroundImage: "url('/GoodEvening.jpg')"
  }} >
      <TodoWrapperLocalStorage  />
    </div>
  );
}

export default App;