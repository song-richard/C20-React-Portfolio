import Box from '@mui/material/Box';

export default function portfolio() {

    const projects = [
        {
            _id: 'Project 1',
            title: 'appTrackr',
            description: 'Elevate your job search experience with AppTrackr, a dynamic full-stack job application tracker that seamlessly blends the power of authentication and RESTful principles',
            deployedLink: 'https://apptrackr-web-app-d2869d2ab77f.herokuapp.com/',
        },
        {
            _id: 'Project 2',
            title: 'weatherDash',
            description: 'Experience real-time weather information with the Weather Forecast App.',
            deployedLink: 'https://song-richard.github.io/weatherDash/',
        },
        {
            _id: 'Project 3',
            title: 'Travelr',
            description: 'Presenting a comprehensive Travel Preparation app that seamlessly retrieves real-time information on weather updates, upcoming events, top-notch restaurants, and available hotels',
            deployedLink: 'https://song-richard.github.io/travelr/',
        },
        {
            _id: 'Project 4',
            title: 'LunchRoulette',
            description: 'Introducing the Lunch Generator, an intuitive application crafted to elevate your lunchtime experience.',
            deployedLink: 'https://siennaxstarr.github.io/LunchRoulette/',
        },
        {
            _id: 'Project 5',
            title: 'README Generator',
            description: 'The README Generator is a command-line application built with JavaScript and Node.js that simplifies the process of creating a professional and comprehensive README file for your projects',
            deployedLink: 'https://github.com/song-richard/readmeGen/blob/main/Assets/README%20GIF.gif',
        },
        {
            _id: 'Project 6',
            title: 'Work Day Scheduler',
            description: 'Welcome to my Work Day Scheduler, a modern and efficient tool designed to enhance your daily productivity',
            deployedLink: 'https://song-richard.github.io/workDayScheduler/',
        },
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-300 rounded p-4">
                        <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-700">{project.description}</p>
                        <a href={project.deployedLink} className="text-blue-500 hover:underline mt-2 inline-block">Deployed Link</a>
                    </div>
                ))}
            </div>
        </div>
    );
};