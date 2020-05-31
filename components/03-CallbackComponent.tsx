import React, { useState, Component }  from 'react';

export default function CallbackComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Callback received { count } times</div>
      <div><br/>
        <ClickerComponent onReceive={ () => setCount(count+1) } button="Click me" />
        <ClickerComponent onReceive={ () => setCount(count-1) } button="Dont click me" />
      </div>
    </div>
  );
}

type ClickerProps = {
  button: string;
  onReceive: (() => void)
}

function ClickerComponent({button, onReceive} : ClickerProps) {
  return (
    <button onClick={onReceive}>{ button }</button>
  )
}

type CallbackComponentState = {
  count: number;
}

class CallbackComponentClass extends Component<CallbackComponentState> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc() {
    this.setState({
      count: this.props.count + 1
    });
  }

  handleDec() {
    this.setState({
      count: this.props.count -1
    });
  }

  render() {
    return (
        <div>
          <div>Callback received { this.props.count } times</div>
          <div><br/>
          <ClickerComponent onReceive={ this.handleInc } button="Inc" />
          <ClickerComponent onReceive={ this.handleDec } button="Dec" />
          </div>
        </div>
      );
  }
}
