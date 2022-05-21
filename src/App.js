import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Inputs</h1>
      <div className="inputs-container">
        <Inputs 
          title="<Input />"
          helperText=""
          labelText="Label"
        />
        <Inputs 
          title="&hover"
          hover={true}
          helperText=""
          labelText="Label"
        />
        <Inputs 
          title="&focus"
          focus={true}
          helperText=""
          labelText="Label"
        />
      </div>
      <div className="inputs-container">
      <Inputs 
          title="<Input error/>"
          helperText=""
          labelText="Label"
          error={true}
        />
        <Inputs 
          title="&hover"
          hover={true}
          helperText=""
          labelText="Label"
          error={true}
        />
        <Inputs 
          title="&focus"
          focus={true}
          helperText=""
          labelText="Label"
          error={true}
        />
      </div>
      <div className="inputs-container">
        <Inputs 
          title="<Input disabled />"
          labelText="Label"
          disabled={true}
        />
      </div>
      <div className="inputs-container">
        <Inputs 
          title="<Input helperText />"
          helperText="Some interesting text"
        />
        <Inputs 
          title="<Input helperText focus />"
          helperText="Some interesting text"
          focus={true}
        />
        <Inputs 
          title="<Input helperText error />"
          helperText="Some interesting text"
          error={true}
        />
      </div>
      <div className="inputs-container">
        <Inputs 
          title="<Input startIcon />"
          startIcon="face"
        />
        <Inputs 
          title="<Input endIcon />"
          endIcon="face"
        />
        <Inputs 
          title="<Input startIcon error />"
          startIcon="face"
          error={true}
        />
      </div>
      <div className="inputs-container">
        <Inputs 
          title="<Input value />"
          value="Some value"
        />
      </div>
      <div className="inputs-container">
        <Inputs 
          title="<Input size=sm />"
          size="sm"
        />
        <Inputs 
          title="<Input size=md />"
          size="md"
        />
        <Inputs 
          title="<Input size=lg />"
          size="lg"
        />
      </div>
      <div className="inputs-container">
        <Inputs 
          title="<Input fullWidth />"
          fullWidth={true}
        />
      </div>
    </div>
  );
}

export default App;
