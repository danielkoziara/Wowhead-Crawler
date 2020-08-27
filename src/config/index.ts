const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
	development: {
		base_url: 'https://www.wowhead.com/',
		noreply_email: '#',
		info_email: '#',
		mail: {
			host: '#',
			port: 465,
			secure: true,
			auth: {
				user: '#',
				pass: '#',
			},
		},
	},
	production: {
		base_url: 'https://www.wowhead.com/',
		noreply_email: '#',
		info_email: '#',
		mail: {
			host: '#',
			port: 465,
			secure: true,
			auth: {
				user: '#',
				pass: '#',
			},
		},
	},
};

export default config[environment];
