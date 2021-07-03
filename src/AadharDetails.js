import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Aadhar Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            required
            id="cardName"
            label="Name on Aadhar card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            required
            id="cardNumber"
            label="Aadhar number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Upload Aadhar Card
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <img src ='https://media.wazirx.com/media/kyc/sample_aadhaar_card_front.jpeg' width = "480" height = "270"  alt="Aadhar" />
        </Grid>
        <Grid item xs={12} md={8}>
          <input type="file" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
