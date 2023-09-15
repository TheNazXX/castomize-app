import { CanvasModel } from "./canvas";
import { Castomizer, Home } from "./pages";

export const App = () => {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel /> 
      <Castomizer />
    </main>
  )
}
