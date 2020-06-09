const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
	development: {
		base_url: 'https://www.wowhead.com/',
	},
	production: {
		base_url: 'https://www.wowhead.com/',
	},
};

export default config[environment];
