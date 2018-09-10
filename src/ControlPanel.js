import React, {PureComponent} from 'react';
import './ControlPanel.css';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        <h3>This is a Container Class called ControlPanel</h3>
        <p>You can use this for the legend.</p>
        <div className="source-link">
          Click this <a target="_new"
            href="https://github.com/uber/react-map-gl/tree/3.2-release/examples/controls"
          >link</a> For more information
        </div>
      </Container>
    );
  }
}
