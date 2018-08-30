import React, { Component, Fragment }  from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';
import Button from '@material-ui/core/Button';


// make array of the scripts involved in the test case and use those to create the Steps
function generateSteps() {
    const arr = [];
    const titles = ["Login to Epic", "Build a vendor", "Double check your work", "Logout of Epic"];
    for (let i = 0; i < titles.length; i++) {
      arr.push({
        title: `${titles[i]}`,
      });
    }
    return arr;
  }
  const steps = generateSteps();
  
  class ScriptSteps extends React.Component {
    state = {
      currentStep: 0,
    };
  
    
    nextStep = () => {
      let s = this.state.currentStep + 1;
      if (s === steps.length) {
        s = 0;
      }
      this.setState({
        currentStep: s,
      });
    }
  
    render() {
      const cs = this.state.currentStep;
      this.stepsRefs = [];
      return (
        <div>
          <form className="my-step-form" >
            <h2>Script Steps</h2><br/>
            
            <div className="my-step-container">
              <Steps current={cs} size="small">
                {
                  steps.map((s, i) => {
                    return (
                      <Step ref={c => this.stepsRefs[i] = c}
                        key={i}
                        title={s.title}
                        
                      />
                    );
                  })
                }
              </Steps>
            </div>
  
            <br/>
            <Button variant="contained" color="primary"  onClick={this.nextStep}>Pass</Button>
          </form><br/>
   
  
          
        </div>
        
      );
  
      
    }
  }
  
  export default ScriptSteps;
  
  
  