import { FC } from 'react';
import FilterCheck from 'components/filtercheck';
import Select from 'components/forms/select';
import type { SideBarAction } from '../types';
import { useAppSelector } from 'store/hooks';

interface DividerProps {
  label?: string;
}
const Divider: FC<DividerProps> = ({ label }) => (
  <div className="flex items-center">
    <div className="bg-softerblue h-[1px] flex-1" />
    {label && <div className="text-tiny text-mainblue font-bolder ml-2">{label}</div>}
  </div>
);

interface SideBarLegendViewProps {
  onChange?: (params: SideBarAction) => void;
}

const SidebarLegendView: FC<SideBarLegendViewProps> = () => {
  const layerGroups = useAppSelector(state => state.layerGroups.data);
  const activeLayers = layerGroups.map(layerGroup => layerGroup.layers.map(layer => {
    if (!layer.checked) return null;
    if (layer.type === 'grouped-dropdown') return layer.layers.find(groupedLayer => groupedLayer.checked) || null;
    return layer;
  }).filter(Boolean)).flat();

  const renderLayerLegend = (layer) => {
    const renderLegend = () => layer.type === 'checkbox' ?
      <>
        <FilterCheck bullet="orange" label="Sentinel-2" labelColor="mainblue" />
        <FilterCheck bullet="purple" label="Radarsat-2" labelColor="mainblue" />
        <FilterCheck bullet="green" label="Cosmos SkyMed" labelColor="mainblue" />
      </> :
      'legend';

    return (
      <>
        <Divider label={layer.label} />
        {renderLegend()}
      </>
    );
  };

  return (
    <div className="space-y-1 border border-b-0 border-mainblue p-3">
      {activeLayers.map(renderLayerLegend)}

      {/* <div className="flex justify-between items-center p-2">
        <div className="flex-1 text-tiny text-mainblue font-bolder">INTERVAL</div>
        <div className="flex-1">
          <Select
            id="time"
            initialSelected="1"
            options={[
              { label: 'LAST 24H.', value: '1' },
              { label: 'LAST 72H.', value: '2' },
              { label: 'LAST 7 DAYS.', value: '3' },
              { label: 'LAST 30 DAYS.', value: '4' },
            ]}
          />
        </div>
      </div>

      <Divider label="SEA ICE CONCENTRATION" />
      <FilterCheck bullet="gray" label="ASMR2 Sea ice edge (15%)" labelColor="mainblue" /> */}
    </div>
  );
}

export default SidebarLegendView;
