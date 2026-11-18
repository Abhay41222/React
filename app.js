  const element = React.createElement(
    "h1",
    {
      id: "first",
      className: "tahir",
      style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
    },
    "Hello Coder Army",
  );
  const element1 = React.createElement(
    "h1",
    {
    id: "second",
    className: "modi",
        style: { backgroundColor: "aqua", fontSize: "30px", color: "yellow" },
    },
    "kaise ho bhai",
    );

// ReactDOM.render(element,document.getElementById('root'));
// element : 50 card pade hue hai

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
Reactroot.render([element, element1]);

