import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header =  ({
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
  setGastos,
}) => {
  return (
    <header>
      <h1>Planificador de gatos</h1>
      {
        isValidPresupuesto ? 
        (
          <ControlPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
          />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )
      }
    </header>
  );
}

export default Header;