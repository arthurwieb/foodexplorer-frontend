import { Container } from './styles.js';

const options = [
  { id: 1, label: "Refeições" },
  { id: 2, label: "Sobremesas" },
  { id: 3, label: "Bebidas" },
];


export function InputCategory({ editValue, onChange, icon: Icon, ...rest }) {

  return (
    <Container>
      <select value={editValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}

