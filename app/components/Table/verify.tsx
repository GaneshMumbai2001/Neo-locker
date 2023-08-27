'use client'
import React, { useState } from 'react';
import { Container, Typography, Button, Paper, TextField } from '@mui/material';

const Verify = () => {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  const handleVerify = () => {
    // Add logic to send the reference number to the backend for verification
    console.log('Verifying reference number:', referenceNumber);
    // Simulate verification result
    setVerificationStatus('verified');
  };

  return (
    <div
    className="text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16"
    style={{
      background: 'linear-gradient(to bottom, #8C17EB, #390080)',
      padding: '30px',
      borderRadius: '8px',
    }}
  >
    
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Verify Document
        </Typography>
        <TextField
          label="Enter Reference Number"
          variant="outlined"
          fullWidth
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleVerify}>
          Verify
        </Button>
        {verificationStatus && (
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Verification Status: {verificationStatus}
          </Typography>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Verify;
