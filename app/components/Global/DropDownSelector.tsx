import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface DropDownSelectorProps {
  items: string[] | { label: string; value: string }[];
  onSelectionChange: (selectedItem: { label: string; value: string }) => void;
}

/**
 * En el componente padre debemos setear un estado para almacenar la selección
 * escuchada de este componente, y pasarle como prop a este componente
 * el set de dicho estado.
 * const [selectedItem, setSelectedItem] = useState<{ label: string; value: string } | null>(null);
 */

const DropDownSelector: React.FC<DropDownSelectorProps> = ({ items, onSelectionChange }) => {
  const [selectedItem, setSelectedItem] = useState<{ label: string; value: string } | null>(null);

  const mappedItems = (Array.isArray(items) && typeof items[0] === 'string')
    ? (items as string[]).map(item => ({ label: item, value: item }))
    : (items as { label: string; value: string }[]);

  const handleSelect = (item: { label: string; value: string }) => {
    setSelectedItem(item);
    onSelectionChange(item); 
  };

  return (
    <View style={{ padding: 20 }}>
      <Dropdown
        data={mappedItems}
        labelField="label"
        valueField="value"
        placeholder="Select an option"
        value={selectedItem ? selectedItem.value : null}
        onChange={handleSelect}  
      />
    </View>
  );
};

export default DropDownSelector;
