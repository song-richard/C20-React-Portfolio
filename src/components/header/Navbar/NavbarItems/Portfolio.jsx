import Box from '@mui/material/Box';

export default function portfolio() {

    const projects = [
        {
            _id: 'Project 1',
            title: 'appTrackr',
            description: 'appTrackr is a All-In-One application for all your job search needs!',
            deployedLink: 'https://apptrackr-web-app-d2869d2ab77f.herokuapp.com/',
        },
        {
            _id: 'Project 2',
            title: 'weatherDash',
            description: 'weatherDash convienently lets you check the weather!',
            deployedLink: '',
        },
        {
            _id: 'Project 3',
            title: 'Travelr',
            description: 'Travelr is a All-In-One application for all your traveling search needs!',
            deployedLink: '',
        },
        {
            _id: 'Project 4',
            title: '',
            description: '',
            deployedLink: '',
        },
        {
            _id: 'Project 5',
            title: '',
            description: '',
            deployedLink: '',
        },
        {
            _id: 'Project 6',
            title: '',
            description: '',
            deployedLink: '',
        },
    ]

    return (
        <>
            <h1>Projects:</h1>
            <Box sx={
                {
                    p: 2,
                    border: '3px dashed grey',
                }}>

                {/* Project 1 */}

                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    {/* Project Name */}
                    {projects[0]._id}

                    <Box>
                    {/* Project Title */}
                    {projects[0].title}
                    </Box>

                    <Box>
                    {/* Description */}
                        <p>{projects[0].description}</p>
                    </Box>

                    Desployed Link
                    <Box>
                        <a href={projects[0].deployedLink}>Deployed Link</a>
                    </Box>
                </Box>

                {/* Project 2 */}
                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    {/* Project Name */}
                    {projects[1]._id}

                    <Box>
                    {/* Project Title */}7
                    {projects[1].title}                    </Box>

                    <Box>
                    <p>{projects[1].description}</p>
                    </Box>

                    <Box>
                        <a href={projects[1].deployedLink}>Deployed Link</a>
                    </Box>
                </Box>

                {/* Project 3 */}
                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    {/* Project Name */}
                    {projects[2]._id}

                    <Box>
                    Project Title
                    {projects[2].title}
                    </Box>

                    <Box>
                    <p>{projects[2].description}</p>
                    </Box>

                    

                    <Box>
                        <a href={projects[2].deployedLink}>Deployed Link</a>
                    </Box>
                </Box>

                {/* Project 4 */}
                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    {/* Project Name */}
                    {projects[3]._id}

                    <Box>
                    Project Title
                    {projects[3].title}
                    </Box>

                    <Box>
                    <p>{projects[3].description}</p>
                    </Box>

                    <Box>
                        <a href={projects[3].deployedLink}>Deployed Link</a>
                    </Box>
                </Box>

                {/* Project 5 */}
                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    {/* Project Name */}
                    {projects[4]._id}

                    <Box>
                    Project Title
                    {projects[4].title}
                    </Box>

                    <Box>
                    <p>{projects[4].description}</p>
                    </Box>

                    <Box>
                        <a href={projects[4].deployedLink}>Deployed Link</a>
                    </Box>
                </Box>
                
                {/* Project 6 */}
                <Box sx={
                    {
                        p: 2,
                        border: '1px dashed grey'
                    }}>
                    {/* Project Name */}
                    {projects[5]._id}

                    <Box>
                    Project Title
                    {projects[5].title}
                    </Box>

                    <Box>
                    <p>{projects[5].description}</p>
                    </Box>


                    <Box>
                        <a href={projects[5].deployedLink}>Deployed Link</a>
                    </Box>
                </Box>

            </Box>
        </>
    );
};