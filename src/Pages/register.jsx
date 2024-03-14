import React, { useState } from "react";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
} from "@mui/material";

function Register() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress handling
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // Construct form data
          const formData = new FormData();
          formData.append("name", name);
          formData.append("phoneNumber", phoneNumber);
          formData.append("email", email);
          formData.append("fileUrl", downloadURL);

          // Now you can send the form data to the Firebase Realtime Database
          fetch("https://mafia-b94f0-default-rtdb.firebaseio.com/formData.json", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData.entries())),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to store form data.");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Form data stored successfully:", data);
              setSuccessMessage("Form data uploaded successfully!");
              // Reset form fields
              setName("");
              setPhoneNumber("");
              setEmail("");
              setFile(null);
            })
            .catch((error) => {
              console.error("Error storing form data:", error);
            });
        });
      }
    );
  }

  return (
    <Container maxWidth="sm" style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} className="form" style={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography style={{textAlign:'center',fontWeight:'bold'}} variant="h5">Upload Your Information</Typography>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Upload
            </Button>
          </Grid>
          {successMessage && (
            <Grid item xs={12}>
              <Typography style={{ color: "green" }}>{successMessage}</Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
  );
}

export default Register;
