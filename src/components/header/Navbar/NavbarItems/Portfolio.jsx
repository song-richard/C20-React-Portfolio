import Box from '@mui/material/Box';

export default function portfolio() {
    return (
        <>
            <h1>Portfolio Page</h1>
            <h2>Projects:</h2>
            <Box sx={
                {
                    p: 2,
                    border: '3px dashed grey',
                }}>
                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    Project 1
                    <Box>
                        appTrackr
                    </Box>
                    <Box>
                        <p>appTrackr is a All-In-One application for all your job search needs!</p>
                    </Box>
                </Box>

                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    Project 2
                    <Box>
                        Travelr
                    </Box>
                    <Box>
                        <p>Travelr is a All-In-One application for all your traveling search needs!</p>
                    </Box>
                </Box>

            </Box>
        </>
    );
};