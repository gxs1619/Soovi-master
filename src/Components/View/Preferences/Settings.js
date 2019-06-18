export const PROFILE_SETTINGS = {
    fav_color: {
        key: 'fav_color',
        name: 'Favorite Color',
        default: 'red',
        options: [
            { option: 'red', val: 'Red' },
            { option: 'blue', val: 'Blue' },
            { option: 'green', val: 'Green' },
            { option: 'purple', val: 'Purple' },
            { option: 'orange', val: 'Orange' }
        ]
    },
    shirt_size: {
        key: 'shirt_size',
        name: 'Shirt Size',
        default: 'l',
        options: [
            { option: 's', val: 'S' },
            { option: 'm', val: 'M' },
            { option: 'l', val: 'L' },
            { option: 'xl', val: 'XL' }
        ]
    },
    hat_size: {
        key: 'hat_size',
        name: 'Hat Size',
        default: 'm',
        options: [
            { option: 's', val: 'S' },
            { option: 'm', val: 'M' },
            { option: 'l', val: 'L' },
            { option: 'a', val: 'A' }
        ]
    }
};

export default PROFILE_SETTINGS;