import React, { Fragment } from "react";
import expect from "jest-matchers";
import { ObjectInspector } from "react-inspector";
import Collapsible from "react-collapsible";
import { CopyToClipboard } from "react-copy-to-clipboard";

// <span>{status}</span>
// { "-".repeat(30 - name.length) } { name } { " " }
// { "-".repeat(30 - name.length) } { status }
export default ({ input, output, name }) => {
  let status = "✅";
  let pass = true;
  try {
    expect(input).toEqual(output);
  } catch (AssertionError) {
    // console.log(AssertionError);
    status = "❌";
    pass = false;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "4px"
        }}
      >
        <span>{status}</span>
        <span>{name}</span>
        <span>{status}</span>
      </div>

      {!pass && (
        <div>
          <Collapsible
            triggerStyle={{
              width: "75%",
              textAlign: "center",
              align: "center",
              marginBottom: "4px",
              color: "lightGray",
              cursor: "pointer"
            }}
            trigger="View"
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                fontSize: ".8rem"
              }}
            >
              <div>
                <CopyToClipboard text={JSON.stringify(input)}>
                  <a style={{ cursor: "pointer" }} title="Copy To Clipboard">
                    Expected
                  </a>
                </CopyToClipboard>
                <ObjectInspector expandLevel={2} data={input} />
              </div>
              <div>
                <CopyToClipboard text={JSON.stringify(output)}>
                  <span style={{ cursor: "pointer" }} title="Copy To Clipboard">
                    Recieved
                  </span>
                </CopyToClipboard>
                <ObjectInspector data={output} expandLevel={2} />
              </div>
            </div>
          </Collapsible>
        </div>
      )}
    </div>
  );
};
