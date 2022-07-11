import './App.css';
import Controller from './Controller/Controller';
import Features from './providers/featuresProvider';
import MagicItems from './providers/magicItemProvider';
import Monsters from './providers/monsterProvider';
import Spells from './providers/spellProvider';

function App() {
  return (
    <>
    <Spells>
      <Monsters>
        <MagicItems>
          <Features>
            <Controller/>
          </Features>
        </MagicItems>
      </Monsters>
    </Spells>
    </>
  );
}

export default App;
