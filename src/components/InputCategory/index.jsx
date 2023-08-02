import { Container } from './styles.js';

const options = [
  { id: 1, label: "Refeições" },
  { id: 2, label: "Sobremesas" },
  { id: 3, label: "Bebidas" },
];

export function InputCategory({ selectedValue, onSelectionChange, icon: Icon, ...rest }) {
  const handleSelectionChange = (event) => {
    const selectedOption = event.target.value;
    onSelectionChange(selectedOption);
  };

  return (
    <Container>
      <select value={selectedValue} onChange={handleSelectionChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}

