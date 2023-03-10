import {
	Banknotes,
	BookOpen,
	ChartBar,
	CheckCircle,
	Home,
	InformationCircle,
	PaintBrush,
	Pencil,
	ViewColumns
} from 'svelte-heros-v2';

export interface NavLink {
	href: string;
	label: string;
	description?: string;
	keywords?: string;
	roles?: string[];
}

export interface NavGroup {
	id: string;
	title: string;
	parent?: string;
	list: NavLink[];
	categories?: string[];
	roles?: string[];
}

type NavCategory = {
	label: string;
	id: string;
	icon?: any;
};

export const menuCategories: NavCategory[] = [
	{
		id: 'home',
		label: 'Home',
		icon: Home
	},
	{
		id: 'courses',
		label: 'Courses',
		icon: BookOpen
	},
];

export const menuNavLinks: NavGroup[] = [
	{
		id: 'Introduction',
		title: 'Introduction',
		parent: 'courses',
		list: [
			{
				href: '/Introduction',
				label: 'Introduction',
				description: 'Learn about the course and how to get the most out of it.'
			},
			{
				href: '/Introduction/overview-of-microblading-and-microshading',
				label: 'Overview of Microblading and Microshading',
				description:
					'What is microblading and microshading? Learn about the history, the tools, and the techniques.'
			}
		]
	},
	{
		id: 'microblading',
		title: 'Microblading',
		parent: 'courses',
		list: [
			{
				href: '/microblading',
				label: 'Introduction to Microblading',
				description: 'Learn the basics of microblading and how to create realistic hair strokes.'
			},
			{
				href: '/microblading/skin-anatomy-and-physiology',
				label: 'Skin Anatomy and Physiology',
				description:
					'Understand the structure and function of the skin to ensure safe and effective treatments.'
			},
			{
				href: '/microblading/eyebrow-shaping-and-mapping',
				label: 'Eyebrow Shaping and Mapping',
				description:
					'Learn how to shape and map eyebrows to create the perfect shape for your clients.'
			},
			{
				href: '/microblading/aftercare-instructions-and-touch-up-sessions',
				label: 'Aftercare Instructions and Touch-Up Sessions',
				description:
					'Understand how to care for the eyebrows after the treatment and schedule touch-up sessions.'
			}
		]
	},
	{
		id: 'microshading',
		title: 'Microshading',
		parent: 'courses',
		list: [
			{
				href: '/microshading',
				label: 'Introduction to Microshading',
				description: 'Learn the basics of microshading and how to create a soft, powdered effect.'
			},
			{
				href: '/microshading/gradient-shading-and-ombre-techniques',
				label: 'Gradient Shading and Ombre Techniques',
				description:
					'Understand how to create gradient shading and ombre effects for a natural look.'
			},
			{
				href: '/microshading/aftercare-instructions-and-touch-up-sessions',
				label: 'Aftercare Instructions and Touch-Up Sessions',
				description:
					'Understand how to care for the eyebrows after the treatment and schedule touch-up sessions.'
			}
		]
	},
	{
		id: 'combination-brows',
		title: 'Combination Brows',
		parent: 'courses',
		list: [
			{
				href: '/combination-brows',
				label: 'Introduction to Combination Brows',
				description:
					'Learn how to combine microblading and microshading techniques for the perfect brow look.'
			},
			{
				href: '/combination-brows/color-theory-and-pigment-selection',
				label: 'Color Theory and Pigment Selection',
				description: 'Understand how to choose the right color and pigment for your clients.'
			},
			{
				href: '/combination-brows/aftercare-instructions-and-touch-up-sessions',
				label: 'Aftercare Instructions and Touch-Up Sessions',
				description:
					'Understand how to care for the eyebrows after the treatment and schedule touch-up sessions.'
			}
		]
	},
	{
		id: 'marketing-and-business',
		title: 'Marketing and Business',
		parent: 'courses',
		list: [
			{
				href: '/marketing-and-business',
				label: 'Introduction to Marketing and Business',
				description: 'Learn about the business side of microblading and microshading.'
			},
			{
				href: '/marketing-and-business/identifying-and-reaching-target-clients',
				label: 'Identifying and Reaching Target Clients',
				description:
					'Learn how to identify your target market and reach them through various marketing channels.'
			},
			{
				href: '/marketing-and-business/building-a-strong-brand-and-online-presence',
				label: 'Building a Strong Brand and Online Presence',
				description:
					'Understand how to create a strong brand and online presence to attract clients and build your reputation.'
			},
			{
				href: '/marketing-and-business/social-media-and-digital-marketing-strategies',
				label: 'Social Media and Digital Marketing Strategies',
				description:
					'Learn how to use social media and other digital marketing strategies to promote your business and services.'
			},
			{
				href: '/marketing-and-business/client-communication-and-consultation-techniques',
				label: 'Client Communication and Consultation Techniques',
				description:
					'Understand how to communicate effectively with clients and provide excellent consultation to meet their needs.'
			},
			{
				href: '/marketing-and-business/business-operations-and-management',
				label: 'Business Operations and Management',
				description:
					'Learn about the day-to-day operations of a microblading and microshading business and how to manage it successfully.'
			}
		]
	},
	{
		id: 'conclusion',
		title: 'Conclusion',
		parent: 'courses',
		list: [
			{
				href: '/conclusion',
				label: 'Wrapping Up',
				description: 'Recap of the course and final thoughts.'
			}
		]
	}
];
