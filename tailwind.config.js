module.exports = {
    theme: {
        extend: {
            transitionProperty: {
                'spacing': 'margin, padding',
            },
            transitionDuration: {
                '0': '0ms'
            },
            colors: {
                primary: {
                    dark: '#11203f',
                    DEFAULT: '#3B3A61',
                    light: '#414C6F'
                },
                secondary: '#73fde3'
            },
            fontFamily: {
                roboto: ['Roboto']
            },
            width: {
                '60-compliment': 'calc(100vw - 15rem)'
            }
        }
    }
};
