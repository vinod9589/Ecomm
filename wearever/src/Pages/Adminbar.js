import React from "react";
import Sidebar from "./Sidebar";
import Adminheader from "./Adminheader";

function Adminbar() {
  return (
    <div>
      <div
        style={{
          height: "745px",
          width: "100%",
          backgroundColor: "red",
          display: "flex",
        }}
      >
        <div
          style={{ height: "745px", width: "20%", backgroundColor: "yellow",border:"2px solid blue" }}
        >
          {/* <Sidebar /> */}
        </div>
        <div
          style={{ height: "745px", width: "80%", backgroundColor: "#c1d2d1" }}
        >
          <Adminheader />
          <br />
          <div
            style={{
              height: "300px",
              width: "100%",
              backgroundColor: "#c1d2d1",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                height: "120px",
                width: "30%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="admindivicon">
                <i
                  style={{ fontSize: "25px", color: "#ffdaa9" }}
                  class="fa fa-users"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                style={{
                  height: "80px",
                  width: "50%",
                  backgroundColor: "white",
                }}
              >
                <label style={{ color: "#b9b8b0" }}>TOTAL PRODUCT</label>
                <br></br>
                <label style={{ fontSize: "25px", fontWeight: "bold" }}>
                  25
                </label>
              </div>
            </div>
            <div
              style={{
                height: "120px",
                width: "30%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="admindivicon">
                <i
                  style={{ fontSize: "25px", color: "#ffdaa9" }}
                  class="fa fa-user"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                style={{
                  height: "80px",
                  width: "50%",
                  backgroundColor: "white",
                }}
              >
                <label style={{ color: "#b9b8b0" }}>TOTAL SALES</label>
                <br></br>
                <label>0</label>
              </div>
            </div>
            <div
              style={{
                height: "120px",
                width: "30%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="admindivicon">
                <i
                  style={{ fontSize: "25px", color: "#ffdaa9" }}
                  class="fa fa-users"
                ></i>
              </div>
              <div
                style={{
                  height: "80px",
                  width: "50%",
                  backgroundColor: "white",
                }}
              >
                <label style={{ color: "#b9b8b0" }}>TOTAL ORDERS</label>
                <br></br>
                <label>0</label>
              </div>
            </div>
            <div
              style={{
                height: "120px",
                width: "30%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="admindivicon">
                <i
                  style={{ fontSize: "25px", color: "#ffdaa9" }}
                  class="fa fa-user"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                style={{
                  height: "80px",
                  width: "50%",
                  backgroundColor: "white",
                }}
              >
                <label style={{ color: "#b9b8b0" }}>PENDING ORDERS</label>
                <br></br>
                <label>0</label>
              </div>
            </div>
            <div
              style={{
                height: "120px",
                width: "30%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="admindivicon">
                <i
                  style={{ fontSize: "25px", color: "#ffdaa9" }}
                  class="fa fa-line-chart"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                style={{
                  height: "80px",
                  width: "50%",
                  backgroundColor: "white",
                }}
              >
                <label style={{ color: "#b9b8b0" }}>TOTAL REVENUE</label>
                <br></br>
                <label>0</label>
              </div>
            </div>
            <div
              style={{
                height: "120px",
                width: "30%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="admindivicon">
                <i
                  style={{ fontSize: "25px", color: "#ffdaa9" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                style={{
                  height: "80px",
                  width: "50%",
                  backgroundColor: "white",
                }}
              >
                <label style={{ color: "#b9b8b0" }}>TOTAL CLIENTS</label>
                <br></br>
                <label>0</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminbar;
