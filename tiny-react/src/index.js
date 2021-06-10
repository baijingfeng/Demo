import TinyReact from "./TinyReact";

const root = document.getElementById("root");
const virtualDOM = (
  <div className="container">
    <h1>你好</h1>
    <h3 data-text="fdsf">(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2等于1渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button
      onClick={() => {
        alert("你好");
      }}
    >
      点击按钮
    </button>

    <button
      onClick={() => {
        alert("你好11!!!222");
      }}
    >
      点击按钮2
    </button>
    <input type="text" value="hah" />
    <p>将被删除</p>
  </div>
);

const modifyDOM = (
  <div className="container">
    <h1>你好</h1>
    <h1 data-text="fdsf123">(观察: fdsfs这个将会被改变)</h1>
    {2 == 1 && <div>如果2等于1渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button
      onClick={() => {
        alert("你好!!!");
      }}
    >
      点击按钮
    </button>
    <button>点击按钮2</button>

    <input type="text" value="hah" />
  </div>
);

// TinyReact.render(virtualDOM, root);

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root);
// }, 2000);

// console.log(virtualDOM);

function Child() {
  return <div>Child组件, &hearts;</div>;
}

function Header(props) {
  return (
    <div>
      Header,
      {props.text}
      <Child />
    </div>
  );
}

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "default Title",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      title: "Modify title",
    });
  }

  render() {
    return (
      <div>
        {this.props.name} : {this.props.age}
        Alert 类组件 <Header text="HEllo" />
        <div>{this.state.title}</div>
        <button onClick={this.handleClick}>改变Title</button>
      </div>
    );
  }
}

TinyReact.render(<Alert text="HEllo" name="张三" age={20} />, root);

// console.log(<Header />);
