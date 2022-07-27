import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { DataGrid } from "@mui/x-data-grid";
const Summery = ({ data, setShowSummery }) => {
  const columns = [
    {
      field: "index",
      headerName: "ID",
      width: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "radio1",
      headerName: "Have you been diagnosed with this problem",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "radio2",
      headerName: " Did the problem start after a physical truma",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "radio3",
      headerName: "Did the problem start after a mental truma",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "radio4",
      headerName: "How Often do you experience the problem",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "radio5",
      headerName: " When do you experience the problem",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "radio6",
      headerName: "Scale",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          color: "blue",
          fontWeight: "bold",
          margin: "1rem",
        }}
      >
        Report
      </div>
      <div
        style={{
          height: 350,
          width: "85%",
          // display: "flex",
          // alignItems: "center",
          margin: "0rem 7rem 0rem 7rem",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row.index}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <div style={{ margin: "1rem 7rem" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          style={{
            marginRight: "1rem",
            width: "160px",
            // backgroundColor: "blue",
          }}
          onClick={() => {
            setShowSummery(false);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Summery;
