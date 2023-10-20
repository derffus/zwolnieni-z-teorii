import React from "react";
function MaterialyRightNav(props) {
  return (
    <div id="materialy-right-nav">
      <div id="klasa-picker">
        <div className="klasa">
          <div
            id="klasa1"
            className="klasa-name"
            onMouseOver={() => {
              props.updateState("selectedKlasa1", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa1", false);
            }}
          >
            Klasa I
          </div>
          {props.selectedKlasa1 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa1", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa1", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa1"
                onClick={() => {
                  props.updateState("clicked", "podstawa1");
                }}
              >
                Podstawa
              </div>

              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie1"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie1");
                }}
              >
                Rozszerzenie
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="klasa">
          <div
            id="klasa2"
            className="klasa-name"
            onMouseOver={() => {
              props.updateState("selectedKlasa2", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa2", false);
            }}
          >
            Klasa II
          </div>
          {props.selectedKlasa2 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa2", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa2", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa2"
                onClick={() => {
                  props.updateState("clicked", "podstawa2");
                }}
              >
                Podstawa
              </div>
              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie2"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie2");
                }}
              >
                Rozszerzenie
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="klasa">
          <div
            id="klasa3"
            className="klasa-name"
            onMouseOver={() => {
              props.updateState("selectedKlasa3", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa3", false);
            }}
          >
            Klasa III
          </div>
          {props.selectedKlasa3 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa3", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa3", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa3"
                onClick={() => {
                  props.updateState("clicked", "podstawa3");
                }}
              >
                Podstawa
              </div>
              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie3"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie3");
                }}
              >
                Rozszerzenie
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="klasa">
          <div
            id="klasa4"
            className="klasa-name"
            onMouseOver={() => {
              props.updateState("selectedKlasa4", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa4", false);
            }}
          >
            Klasa IV
          </div>
          {props.selectedKlasa4 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa4", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa4", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa4"
                onClick={() => {
                  props.updateState("clicked", "podstawa4");
                }}
              >
                Podstawa
              </div>
              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie4"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie4");
                }}
              >
                Rozszerzenie
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default MaterialyRightNav;
