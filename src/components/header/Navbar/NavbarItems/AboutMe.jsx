import { Box } from "@mui/system";

export default function About() {

    const richard = [
        {
            skillsTitle: 'Skills:'
        },
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
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-3xl font-bold my-8">{richard[2].bio}</h1>

                <div className="bg-gray-100 rounded-lg p-8">
                    <h2 className="text-lg font-bold mb-4">{richard[0].skillsTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">{richard[1].frontendTitle}</h3>
                            <p className="text-base">{richard[2].frontend}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{richard[1].backendTitle}</h3>
                            <p className="text-base">{richard[2].backend}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};