// ./app/components/pages/suubmit.tsx
'use client'
// ./app/components/pages/submit.tsx

// ./app/components/pages/submit.tsx

// ./app/components/pages/submit.tsx

import React, { useState } from 'react';
import { Container, Typography, Button, Paper, Input } from '@mui/material';

const Submit = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Add logic to send the file to the backend for processing
    console.log('File submitted:', file);
  };

  return (
    <div
      className="text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16"
      style={{
        background: 'linear-gradient(to bottom, #9513FF, #200344)',
        padding: '20px',
        borderRadius: '8px',
        width: '60%',
        height: '400px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '30px', marginTop: '30px' }}>
          <Typography variant="h4" gutterBottom>
            Submit Document
          </Typography>
          <Input type="file" onChange={handleFileChange} style={{ marginBottom: '8px' }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              size="large" // Increased button size
              onClick={handleSubmit}
              style={{ marginRight: '10px' }} // Move the button slightly to the right
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Submit;
 