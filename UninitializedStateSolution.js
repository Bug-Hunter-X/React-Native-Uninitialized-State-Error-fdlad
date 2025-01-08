import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform any side effects here, such as fetching data or setting a state variable after mount
    //This makes sure the state is defined before it is used in render
    console.log("component mounted");
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;