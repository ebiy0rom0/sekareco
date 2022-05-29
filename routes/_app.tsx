import { Header } from '../components/header.tsx'
import { Navigation } from '../components/navigation.tsx'

const App: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Navigation test="w-1/6 justify-items-center" />
        <div className="w-5/6 grid grid-cols-3">
          <div className="col-start-2 col-span-1">
            { children }
          </div>
        </div>
      </div>
    </>
  );
}

export default App