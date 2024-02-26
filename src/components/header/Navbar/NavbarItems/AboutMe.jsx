import { Box } from "@mui/system";

export default function About() {

    const richard = [
        {
            frontendTitle: 'Front-End Technologies:',
            backendTitle: 'Back-End Technologies:'
        },
        {
            bio: 'Hi! Im Richard Song, a Full-Stack Software Developer!',
            frontend:'React.js, Material UI, Tailwind CSS, Bulma, Bootstrap',
            backend:'Express.js, Node.js, MongoDB, mySQL, Firebase, AuthO, Bcrypt, Axios, GraphQL',
        }
    ]

    return (
        <>
            <h1>{richard.bio}</h1>

            <Box>
                <Box>Skills: 
                    <Box>
                        <h3>{richard[0].frontendTitle}:</h3>
                        <h4>{richard[1].frontend}</h4>
                    </Box>
                    <br></br>
                    <Box>
                        <h3>{richard[0].backendTitle}</h3>
                        <h4>{richard[1].backend}</h4>
                    </Box>

                </Box>
            </Box>
        </>
    );
};