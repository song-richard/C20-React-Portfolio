import { Box } from "@mui/system";

export default function About() {

    const bio = 'Hi! Im Richard Song, a Full-Stack Software Developer!';
    const frontEndTech = 'React.js, Material UI, Tailwind CSS, Bulma, Bootstrap';
    const backEndTech = 'Express.js, Node.js, MongoDB, mySQL, Firebase, AuthO, Bcrypt, Axios, GraphQL';

    return (
        <>
            <h1>{bio}</h1>

            <Box>
                <Box>Skills: 

                    <Box>
                        <h3>Front End Technologies:</h3>
                        <h4>{frontEndTech}</h4>
                    </Box>

                    <Box>
                        <h3>Back-End Technologies</h3>
                        <h4>{backEndTech}</h4>
                    </Box>

                </Box>
            </Box>
        </>
    );
};