import icons from './icons';

const { LibraryMusic, Discover, Chart, Follow } = icons;
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <LibraryMusic />,
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icon: <Discover />,
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <Chart />,
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <Follow />,
    },
];
