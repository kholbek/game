import { useEffect, useState } from 'react';
import Board from './components/Board';
import Chat from './components/Chat';
import Ranking from './components/Ranking';
import Sidebar from './components/Sidebar'
import { useAppState } from './context/AppContext';

function App() {
  const { gameState } = useAppState()
  const [boardKey, setKey] = useState(0)

  useEffect(() => {
    if(gameState === 'STARTED') {
      setKey(v => v+1)
    }
  }, [gameState])

  return (
    <div className="fixed top-0 left-0 right-0 overflow-auto py-4 bottom-0 box-border bg-[#161A21] grid place-items-center gap-4">
      <div className="grid gap-4">
        <div className="grid grid-cols-main gap-4">
          <Sidebar />
          <Board key={boardKey}/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Ranking />
          <Chat />
        </div>
      </div>
    </div>
  );
}
 
export default App;
