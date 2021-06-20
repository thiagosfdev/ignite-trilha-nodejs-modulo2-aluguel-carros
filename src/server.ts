import express from 'express';

const APP = express();
const PORT = 3333;

APP.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
