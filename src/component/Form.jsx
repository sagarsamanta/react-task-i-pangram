import React, { useState } from "react";
import { useFormik } from "formik";
import { Checkbox, FormControlLabel, Paper } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Summery from "./Summery";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));
const Form = () => {
  const classes = useStyles();
  const temp = {
    radio1: "",
    radio2: "",
    radio3: "",
    radio4: "",
    index: "",
  };
  const [formData, setFormData] = useState([temp]);
  const [showSummery, setShowSummery] = useState(false);
  const handleRadioChange = (event, index) => {
    const updatedForm = formData.map((val, i) => {
      val.index = i;
      return index === i
        ? Object.assign(val, { [event.target.name]: event.target.value })
        : val;
    });

    setFormData(updatedForm);
  };

  const addForm = () => {
    setFormData([...formData, temp]);
  };
  return (
    <>
      <div>
        {!showSummery ? (
          <div>
            {formData.map((data, index) => (
              <div style={{ margin: "1rem 7rem 1rem 7rem" }}>
                <Paper key={index} style={{ padding: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ marginRight: "2rem" }}
                    >
                      Have you been diagnosed with this problem
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="quiz"
                      name="radio1"
                      value={formData[index].radio1}
                      onChange={(e) => handleRadioChange(e, index)}
                    >
                      <FormControlLabel
                        value="not relevent"
                        control={<Radio />}
                        label="Not relevent"
                        // value={formData[index].radio1}
                        // checked={value === "Not relevent"}
                      />
                      {console.log(formData)}
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ marginRight: "2rem" }}
                    >
                      Did the problem start after a physical truma
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="quiz"
                      name="radio2"
                      value={formData[index].radio2}
                      onChange={(e) => handleRadioChange(e, index)}
                    >
                      <FormControlLabel
                        value="Not relevent"
                        control={<Radio />}
                        label="Not relevent"
                      />
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ marginRight: "2rem" }}
                    >
                      Did the problem start after a mental truma
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="quiz"
                      name="radio3"
                      value={formData[index].radio3}
                      onChange={(e) => handleRadioChange(e, index)}
                    >
                      <FormControlLabel
                        value="Not relevent"
                        control={<Radio />}
                        label="Not relevent"
                      />
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div>
                    <FormLabel
                      component="legend"
                      style={{ marginRight: "2rem" }}
                    >
                      How Often do you experience the problem
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="quiz"
                      name="radio4"
                      value={formData[index].radio4}
                      onChange={(e) => handleRadioChange(e, index)}
                    >
                      <FormControlLabel
                        value="Not relevent"
                        control={<Radio />}
                        label="Not relevent"
                      />
                      <FormControlLabel
                        value="Daily"
                        control={<Radio />}
                        label="Daily"
                      />
                      <FormControlLabel
                        value="Several times/week"
                        control={<Radio />}
                        label="Several times/week"
                      />
                      <FormControlLabel
                        value="A few times/month"
                        control={<Radio />}
                        label="A few times/month"
                      />
                      <FormControlLabel
                        value="A few times/year"
                        control={<Radio />}
                        label="A few times/year"
                      />
                    </RadioGroup>
                  </div>
                  <div>
                    <FormLabel
                      component="legend"
                      style={{ marginRight: "2rem" }}
                    >
                      When do you experience the problem
                    </FormLabel>
                    <RadioGroup
                      aria-label="quiz"
                      name="radio5"
                      value={formData[index].radio5}
                      onChange={(e) => handleRadioChange(e, index)}
                    >
                      <FormControlLabel
                        value="Not relevent"
                        control={<Radio />}
                        label="Not relevent"
                      />
                      <FormControlLabel
                        value="When lying down"
                        control={<Radio />}
                        label="When lying down"
                      />
                      <FormControlLabel
                        value="When sitting"
                        control={<Radio />}
                        label="When sitting"
                      />
                      <FormControlLabel
                        value="When standing"
                        control={<Radio />}
                        label="When standing"
                      />
                      <FormControlLabel
                        value="In walking"
                        control={<Radio />}
                        label="In walking"
                      />
                    </RadioGroup>
                  </div>
                  <div>
                    <FormLabel
                      component="legend"
                      style={{ marginRight: "2rem" }}
                    >
                      How intense is the experience of the problem on average on
                      a 0-10 scale?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="quiz"
                      name="radio6"
                      value={formData[index].radio6}
                      onChange={(e) => handleRadioChange(e, index)}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="1"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="2"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="5"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="6"
                        control={<Radio />}
                        label="6"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="7"
                        control={<Radio />}
                        label="7"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="8"
                        control={<Radio />}
                        label="8"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="9"
                        control={<Radio />}
                        label="9"
                        labelPlacement="top"
                      />
                      <br />
                      <FormControlLabel
                        value="10"
                        control={<Radio />}
                        label="10"
                        labelPlacement="top"
                      />
                    </RadioGroup>
                  </div>
                </Paper>
              </div>
            ))}
            <Divider variant="middle" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-1.5rem",
              }}
            >
              <IconButton
                onClick={addForm}
                color="primary"
                aria-label="add to shopping cart"
                size="medium"
              >
                <AddCircleIcon />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginRight: "1rem",
                  width: "160px",
                  // backgroundColor: "blue",
                }}
                onClick={() => {
                  // setShowSummery(false);
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  console.log(formData);
                  setShowSummery(true);
                }}
                color="primary"
                style={{ width: "160px" }}
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          <Summery data={formData} setShowSummery={setShowSummery} />
        )}
      </div>
    </>
  );
};

export default Form;
