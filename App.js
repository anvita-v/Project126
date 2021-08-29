import React from 'react';
import PickImage from './camera';

export default class App extends React.Component{
  render(){
    return (  
      <PickImage/>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
