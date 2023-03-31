import React from "react";

function PizzaForm(props) {
    const { change, submit, errors } = props;
    const { name, t1, t2, t3, t4, special  } = props.values;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }
     
    return (
    <>
      <form id="pizza-form" onSubmit={onSubmit}>
        <p>{errors.name}</p>
        <label htmlFor="name-input">Name:&nbsp;
         <input 
            type="text" 
            id="name-input" 
            name="name" 
            value={name}
            onChange={onChange}
         />
        </label>
       
  
        <label htmlFor="size-dropdown">Size:&nbsp;</label>
        <select id="size-dropdown" name="size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
  
        <fieldset>
          <legend>Toppings:</legend>
          <label htmlFor="topping1">Pepperoni:
            <input 
                type="checkbox" 
                id="topping1" 
                name="topping1" 
                value={t1}
                onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="topping2">Mushrooms:
            <input 
                type="checkbox" 
                id="topping2" 
                name="topping2" 
                value={t2}
                onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="topping3">Onions:
            <input 
                type="checkbox" 
                id="topping3" 
                name="topping3" 
                value={t3}
                onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="topping4">Sausage:
            <input 
                type="checkbox" 
                id="topping4" 
                name="topping4" 
                value={t4}
                onChange={onChange}
            />
          </label>
        </fieldset>
  
        <label htmlFor="special-text">Special Instructions:</label>
        <textarea id="special-text" name="special" value={special} onChange={onChange}></textarea>
  
        <button type="submit" id="order-button">Add to Order</button>
      </form>
    </>
    );
  }
  
  export default PizzaForm;