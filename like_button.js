//'use strict';


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
// <div>(12/26) *홍* : - <br> (12/26) **상 : - <br> (12/27) *우* : -\n</div>
  render() {
    if (this.state.liked) {
      return ('김홍홍 : 가즈아 희생 : 형 벤모 돼요? *우* : 놀러감');
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '투자자 리스트'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
