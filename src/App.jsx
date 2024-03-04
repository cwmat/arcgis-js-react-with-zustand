import './App.css';
import Map from './components/Map';
import useMapStore from './stores/mapStore';
import '@arcgis/core/assets/esri/themes/dark/main.css';

function App() {
  const toggleLayer = useMapStore((state) => state.toggleLayer);
  const showLayer = useMapStore((state) => state.showLayer);

  return (
    <>
      <h1>Map Example with Zustand</h1>
      <Map></Map>
      <div className="card">
        <button onClick={() => toggleLayer()}>
          Layer is {showLayer ? 'On' : 'Off'}
        </button>
        <p>Click to Toggle the Earthquake Layer</p>
        <p>
          See <code>README.md</code> for Details, be patient on first StackBlitz
          load 🙏
        </p>
      </div>
    </>
  );
}

export default App;
