import React from 'react';
import FooBar from '../FooBar/FooBar.js';

import './HelloWorld.scss';

class HelloWorld extends React.Component {
  render() {
    return <div className="hello-world">Hello {this.props.name}
    	<FooBar/>
    </div>;
  }
};

HelloWorld.defaultProps = { name: 'World' };

export default HelloWorld;