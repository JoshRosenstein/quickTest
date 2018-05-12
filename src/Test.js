import React, { Fragment } from "react";
import expect from "jest-matchers";
import { ObjectInspector } from "react-inspector";
import Collapsible from "react-collapsible";

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
          width: "100%",
          textAlign: "center",
          align: "center",
          marginBottom: "4px"
        }}
      >
        {status} {"-".repeat(30 - name.length)} {name}{" "}
        {"-".repeat(30 - name.length)} {status}
      </div>
      {!pass && (
        <div>
          <Collapsible
            triggerStyle={{
              width: "100%",
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
                Input<ObjectInspector expandLevel={2} data={input} />
              </div>
              <div>
                Output<ObjectInspector data={output} expandLevel={2} />
              </div>
            </div>
          </Collapsible>
        </div>
      )}
    </div>
  );
};
