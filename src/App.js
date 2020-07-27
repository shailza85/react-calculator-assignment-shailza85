import React from 'react';

class App extends React.Component
{
  constructor (props)
  {
    super(props);
    this.state = {  //this.state here used for reading values not writing.
      input1: "", //Keep track of our new value.
      input2: ""//Keep track of our new value.

    };

  }
 
  inputValue1=(event)=> 
  {
     const inputVal1 = {
      value:this.state.input1
    };

   console.log(inputVal1);
   
   this.setState ({  
    input1: ""
  });
   
  };   
  
   inputValue2=(event)=> 
  {
  

    const inputVal2 = {
      value:this.state.input2
    };
   console.log(inputVal2);

   this.setState ({  
    input2: ""
  });
  }; 
  
  render()
  {
    return(

      <>
      <h1>React To-Do App</h1>
      <form>
        <label htmlFor="input1">
          Input 1:
          <input type="text" name ="input1" 
          id="newToDo" value={this.state.input1}
          onChange={ event =>this.inputValue1('input1', event.target.value)}
           />
        </label>
        <label htmlFor="select1">
          Operation:
          <select type="text" name ="select1" 
          id="select1">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>

        <label htmlFor="input2">
          Input 2:
          <input type="text" name ="input2" 
          id="newToDo"
          value={this.state.input2}  onChange={ event =>this.inputValue1('input2', event.target.value)} />
        </label>
        <input type="submit" value="Calculate"/>
      </form>
      
     
      </>
    );

  }
}
export default App;

