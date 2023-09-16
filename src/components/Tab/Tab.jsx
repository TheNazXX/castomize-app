import { useSnapshot } from "valtio";
import state from "../../store";

export const Tab = ({tab, isFilterdTab, isActiveTab, handleClick}) => {
  const snap = useSnapshot(state);
  const activeStyles = isFilterdTab && isActiveTab ? 
  {backgroundColor: snap.color, opacity: 0.5} : {backgroundColor: "transparent", opacity: 1};

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterdTab ? 'rounded-full glassmorhism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img src={tab.icon} alt={tab.name} className={`${isFilterdTab ? 'w-2/3 h-2/3': 'w-11/12 h-11/12 object-contain'}`}/>
    </div>
  );
};
