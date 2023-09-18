import { CanvasModel } from "./canvas";
import { Castomizer, Home } from "./pages";

export const App = () => {
  console.log('test')
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel /> 
      <Castomizer />
    </main>
  )
}
