import { TextField, Button, Grid } from "@mui/material";

export const LoginForm = (props) => {
    const { email, setEmail, password, setPassword, handleSubmit } = props;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
return <form onSubmit={handleSubmit}>
<Grid container spacing={2}>
  <Grid item xs={12}>
    <TextField
      variant="outlined"
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      value={email}
      onChange={handleEmailChange}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      variant="outlined"
      fullWidth
      id="password"
      label="Password"
      name="password"
      type="password"
      autoComplete="current-password"
      value={password}
      onChange={handlePasswordChange}
    />
  </Grid>
  <Grid item xs={12}>
    <Button type="submit" fullWidth variant="contained" color="primary">
      Sign In
    </Button>
  </Grid>
</Grid>
</form>
}