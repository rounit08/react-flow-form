## React Multistep Form Package

### This package provides a simple and customizable multistep form flow for React applications. It allows you to create multistep forms with ease, enabling users to navigate through different sections of the form smoothly.

## Features

- Flexible Navigation: Navigate between different steps of the form seamlessly.
- Customizable: Easily customize the steps and their content according to your requirements.
- State Management: Handles state management internally, allowing you to focus on building your form logic.

## Installation

### To install the package, run the following command in your terminal:

```
npm install react-flow-form
```

## Usage

### Import the MultistepForm in your React component:

```
import React from "react";
import MultistepForm from "react-flow-form";
```

## Define your form steps as an array of objects, where each object represents a step:

```
const steps = [
  { label: "Step 1", content: <Step1Component /> },
  { label: "Step 2", content: <Step2Component /> },
  { label: "Step 3", content: <Step3Component /> },
];

```

### Use the MultistepForm hook in your component and pass the array of steps:

```
function MyForm() {
  const multistepForm = MultistepForm(steps);

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <div>
        <p>Current Step: {multistepForm.currentStepIndex + 1}</p>
        <p>Step Content: {multistepForm.currentStep.content}</p>
      </div>
      <div>
        <button onClick={multistepForm.previousStep} disabled={multistepForm.isFirstStep}>
          Back
        </button>
        <button onClick={multistepForm.nextStep} disabled={multistepForm.isLastStep}>
          Next
        </button>
      </div>
    </div>
  );
}
```

### Customize and style your form components according to your application's design.

#### Example

Here's a simple example demonstrating how to use the react-multistep-form package:

```
import React from "react";
import MultistepForm from "react-multistep-form";

const steps = [
  { label: "Step 1", content: <Step1Component /> },
  { label: "Step 2", content: <Step2Component /> },
  { label: "Step 3", content: <Step3Component /> },
];

function MyForm() {
  const multistepForm = MultistepForm(steps);

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <div>
        <p>Current Step: {multistepForm.currentStepIndex + 1}</p>
        <p>Step Content: {multistepForm.currentStep.content}</p>
      </div>
      <div>
        <button onClick={multistepForm.previousStep} disabled={multistepForm.isFirstStep}>
          Back
        </button>
        <button onClick={multistepForm.nextStep} disabled={multistepForm.isLastStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MyForm;
```

### License

This package is licensed under the [ISC License](https://en.wikipedia.org/wiki/ISC_license).

For more information and detailed documentation, please visit the [GitHub repository](https://github.com/rounit08/react-flow-form).
