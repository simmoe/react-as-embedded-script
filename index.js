'use strict'

const e = React.createElement

class MinDOMContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {liked:false}
  }

  render(){
    if(this.state.liked) {
      return "you liked this"
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    )
  }  
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(MinDOMContainer), domContainer);