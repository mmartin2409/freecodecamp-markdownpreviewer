import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from "marked";

const starterText = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`,~~strikethrough~~ .

Shopping list:
* apples
* oranges
* pears

Numbered list:
1. apples
2. oranges
3. pears

*[Matthew Martin](https://www.freecodecamp.com/mmartin2409)*`;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: starterText,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "500px",
      height: "80vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "5px",
      borderRadius: 5,
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    };
    var outputStyle = {
      width: "500px",
      height: "80vh",
      backgroundColor: "skyblue",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "5px",
      border: "1px solid black",
      borderRadius: 5,
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" bg="dark">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" bg="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" bg="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
