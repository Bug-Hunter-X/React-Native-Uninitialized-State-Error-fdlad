# React Native Uninitialized State Error

This repository demonstrates a common error in React Native: accessing a state variable before it has been initialized. The error occurs because state variables are not immediately available upon component rendering. 

## Bug Description

The `UninitializedStateBug.js` file contains a simple component that attempts to access and display a state variable before it's been properly initialized by React. This leads to undefined behavior and a potential crash.

## Solution

The `UninitializedStateSolution.js` file demonstrates a corrected version of the component. It uses the `useEffect` hook to access and set the state after the component has mounted, ensuring the state is defined before being used in the render method.