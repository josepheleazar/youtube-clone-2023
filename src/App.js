import './main.scss'
import { PageHeader, PageRouting } from './components/Page';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <PageHeader />
      <div style={{ display: 'flex' }}> 
        <Sidebar />
        <PageRouting />
      </div>
    </>
  );
}

export default App;
