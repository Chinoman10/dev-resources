const { assets, programming, toolsAndUtilities, jobs } = require('../constants/categories')
const { website } = require('../constants/links')

module.exports = [
    {
        name: '1001 Fonts',
        categories: [assets.fonts],
        description:
            '24,262 free fonts in 13,112 families · Free licenses for commercial use · Direct font downloads · Mac · Windows · Linux.',
        links: {
            [website]: 'https://www.1001fonts.com/',
        },
        icon: 'https://themes.static.1001fonts.net/netefx/img/1001fonts-avatar-32x32.png',
    },
    {
        name: '10FastFingers',
        description:
            '10FastFingers is a website which offers users a way to test and improve their typing speed. Improve your Typing Speed with our Typing Games.',
        categories: [toolsAndUtilities.typing],
        links: {
            [website]: 'https://10fastfingers.com/',
        },
        icon: 'https://10fastfingers.com/favicon.ico',
        keywords: ['typing', 'typing test', 'typing game', 'touch typing', 'fastest fingers', '10 fast fingers', 'typing competition'],
    },
    {
        name: '18F Accessibility Guide',
        categories: [toolsAndUtilities.accessibility],
        description: 'A simple checklist for determining if your site is accessible.',
        links: {
            [website]: 'https://accessibility.18f.gov/checklist/',
        },
        icon: 'https://accessibility.18f.gov/checklist/favicon.ico',
    },
    {
        name: '30 seconds of code',
        categories: [programming.codeSnippets],
        description: 'Browse 1078 short code snippets for all your development needs on 30 seconds of code.',
        links: {
            [website]: 'https://www.30secondsofcode.org/',
        },
        icon: 'https://www.30secondsofcode.org/icons/icon-96x96.png?v=bd273ecf29b2666f8d7669cf855707df',
    },
    {
        name: '99designs',
        categories: [jobs.freelancing],
        description:
            'The global creative platform for custom graphic design: logos, websites and more. Hire a talented designer or start a design contest. 500k+ happy customers have used 99designs to grow their business.',
        keywords: ['crowdsource', 'graphic design', 'design'],
        links: {
            [website]: 'https://99designs.com/',
        },
        icon: 'https://99designs.com/touch-icon-ipad.png',
    },
]
