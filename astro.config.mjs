import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://engineer-meetup.com/',
	base: '/',
	integrations: [
		starlight({
			title: 'エンジニア集会',
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
  					const: 'https://engineer-meetup.com/ogp.jpeg',
					},
				},
			],
			social: {
				discord: 'https://discord.gg/zaTjFtDRP7',
				'x.com': 'https://twitter.com/VRENGAssoc',
				youtube: 'https://www.youtube.com/channel/UC_6lKeNBPKkTBPXtlV5n7Cg',
			},
			sidebar: [
				{
					label: '初めての方へ',
					items: [
						{ label: 'エンジニア集会とは？', link: '/community/what_is_engineer-meetup/' },
						{ label: 'Code of Conduct', link: '/community/code_of_conduct/' },
						{ label: '開催しているイベント', link: '/community/events/' },
						{ label: 'エンジニア集会に関する記事', link: '/community/public_print/' },
					],
				},
			],
		}),
	],
});
