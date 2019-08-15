import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import ModalButton from "../ModalButton/modalButton";
import Container from "@material-ui/core/Container"; //To fix the Submit button style!

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));
const categories = [
  {
    value: "IOS",
    label: "Swift"
  },
  {
    value: "ANDROID",
    label: "Android"
  },
  {
    value: "WEB",
    label: "Front-End"
  },
  {
    value: "Web",
    label: "Back-End"
  },
  {
    value: "ROBOTIC",
    label: "Robotic"
  },
  {
    value: "",
    label: "None"
  }
];

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    companyName: "",

    emailAddress: "",

    city: "",

    category: "",

    description: "",

    companyLink: "",

    quota: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    console.log(values);
    console.log("We will add successfully submitted form message here");
    //We will add successfully submitted form message here !
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      {/*Company Name Section !*/}
      <TextField
        required
        id="standard-with-placeholder"
        label="Company Name"
        placeholder="Your company name here..."
        className={classes.textField}
        value={values.companyName}
        onChange={handleChange("companyName")}
        margin="normal"
      />
      {/*Email Section !*/}
      <TextField
        required
        type="email"
        id="standard-with-placeholder"
        label="E-mail"
        placeholder="xxx@xxxmail.com"
        className={classes.textField}
        value={values.emailAddress}
        onChange={handleChange("emailAddress")}
        margin="normal"
      />
      {/*Category Section !*/}
      <TextField
        required
        id="standard-select-category"
        select
        label="Category"
        className={classes.textField}
        value={values.category}
        onChange={handleChange("category")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your category"
        margin="normal"
      >
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {/*Description Section !*/}
      <TextField
        required
        multiline
        id="standard-with-placeholder"
        label="Description of Bootcamp"
        placeholder="Explain the course here..."
        className={classes.textField}
        value={values.description}
        onChange={handleChange("description")}
        margin="normal"
      />
      {/*Company Link Section !*/}
      <TextField
        required
        multiline
        id="standard-with-placeholder"
        label="Company Link"
        placeholder="https://www.xxx.com"
        className={classes.textField}
        value={values.companyLink}
        onChange={handleChange("companyLink")}
        margin="normal"
      />
      {/*QUOTA Section !*/}
      <TextField
        id="standard-number"
        label="Quotation"
        value={values.numberOfStudents}
        onChange={handleChange("quota")}
        type="number"
        placeholder="How many students ?"
        className={classes.textField}
        margin="normal"
      />
      <br />
      <Container style={{ paddingLeft: 165, paddingTop: 20 }}>
        <ModalButton onClick={handleSubmit} />{" "}
        {/*ModalButton added here to send form infos*/}
      </Container>
      {/*Form buraya kadar !*/}
    </form>
  );
}
