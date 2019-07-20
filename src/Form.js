import React, { Component } from 'react';

class Form extends Component {
  
  constructor () {
    super()
      this.state = {
          formControls: {
              email: {
                value: ''
              },
              name: {
                value: ''
              },
              status: {
                value: ''
              }
          }
      }
    
  }
  
  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
  }
  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
        formData[formElementId] = this.state.formControls[formElementId].value;
    }
        console.dir(formData);
  }

  
   render() {
      return (
          <div>
              <label htmlFor="email" className="form-label">email:</label>
              <input type="email" 
                     name="email" 
                     value={this.state.formControls.email.value} 
                     onChange={this.changeHandler} 
              />
              <label htmlFor="name" className="form-label">name:</label>
              <input type="text" 
                     name="name" 
                     value={this.state.formControls.name.value} 
                     onChange={this.changeHandler} 
              />
              <label htmlFor="status" className="form-label">status:</label>
              <input type="text" 
                     name="status" 
                     value={this.state.formControls.status.value} 
                     onChange={this.changeHandler} 
              />
              <button onClick={this.formSubmitHandler}>Submit</button>
          </div>      
      );
  }

}


export default Form;