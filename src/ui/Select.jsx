import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

//a trick to receive all the props from the component
function Select({options, value, onChange, ...props}){
  return (
    //you can spread them and the styledSelect receives all the props; good for passing down all the props from a parent component to a child component.
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map(option => 
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
      )}
    </StyledSelect>
  )
}


export default Select;


