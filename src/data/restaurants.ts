export interface Restaurant {
	id: string;
	name: string;
	// nameJP: string;
	description: string;
	// descriptionJP: string;
	images: string[];
	imageDescriptions: {
		ko: string[];
		// jp: string[];
	};
	location: string;
	// locationJP: string;
	link: string;
	daumLink: string;
	// city: "seoul" | "busan" | "suwon" | "incheon";
}

export const restaurants: Restaurant[] = [
	{
		id: "1",
		name: "민들레식당",
		description: "민들레식당은 부산 전포동에 있는 한식당.",
		images: [
			"/busan/민들레식당.jpeg",
			"/busan/누군가의밥상.jpeg",
			"/busan/누군가의밥상2.jpeg",
		],
		imageDescriptions: {
			ko: ["민들레식당", "누군가의 밥상", "누군가의 밥상"],
		},
		location: "부산 부산진구 동성로87번길 28 2층",
		link: "https://map.naver.com/p/entry/place/1411216101?lng=129.0666175&lat=35.1582802&placePath=%2Fphoto&entry=plt&searchType=place&c=15.00,0,0,0,dh",
		daumLink: "https://place.map.kakao.com/265159788?referrer=daumsearch_local",
	},
	{
		id: "2",
		name: "무구희",
		description: "무구희는 부산 전포동에 있는 샤브샤브집.",
		images: ["/busan/무구희.jpeg", "/busan/무구희2.jpeg"],
		imageDescriptions: {
			ko: ["무구희", "무구희2"],
		},
		location: "부산 부산진구 전포대로224번길 11",
		link: "https://map.naver.com/p/entry/place/1921019110?lng=129.0661663&lat=35.1566397&placePath=%2Fhome&searchType=place&c=15.00,0,0,0,dh",
		daumLink: "https://place.map.kakao.com/560784355?referrer=daumsearch_local",
	},
	{
		id: "3",
		name: "샐러드마비에",
		description: "샐러드마비에는 부산 전포동에 있는 샐러드집.",
		images: ["/busan/샐러드마비에.jpeg", "/busan/샐러드마비에2.jpeg"],
		imageDescriptions: {
			ko: ["샐러드마비에", "샐러드마비에2"],
		},
		location: "부산광역시 부산진구 서전로46번길 85 1층",
		link: "https://map.naver.com/p/search/%EC%83%90%EB%9F%AC%EB%93%9C%EB%A7%88%EB%B9%84%EC%97%90/place/1753961418?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dpll",
		daumLink: "https://place.map.kakao.com/868906076?referrer=daumsearch_local",
	},
	{
		id: "4",
		name: "키요미즈 전포본점",
		description:
			"키요미즈 전포본점은 부산 전포동에 있는 이자카야. 일본식 요리주점",
		images: [
			"/busan/키요미즈.jpeg",
			"/busan/누군가의부타가쿠니.jpeg",
			"/busan/키요미즈2.jpeg",
		],
		imageDescriptions: {
			ko: ["키요미즈", "누군가의 부타가쿠니", "누군가의 안주"],
		},
		location: "부산 부산진구 전포대로210번길 7 1층",
		link: "https://map.naver.com/p/entry/place/1950219260?c=15.00,0,0,0,dh",
		daumLink:
			"https://place.map.kakao.com/2088495864?referrer=daumsearch_local",
	},
	{
		id: "5",
		name: "규카츠정 서면점",
		description: "규카츠정 서면점은 부산 서면에 있는 규카츠집.",
		images: ["/busan/규카츠정.jpeg", "/busan/규카츠정2.jpeg"],
		imageDescriptions: {
			ko: ["규카츠정 전경", "누군가의 규카츠"],
		},
		location: "부산 부산진구 서전로46번길 64 1-2층",
		link: "https://map.naver.com/p/entry/place/1407129113?lng=129.0644571&lat=35.1549023&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
		daumLink: "https://place.map.kakao.com/58068664?referrer=daumsearch_local",
	},
	{
		id: "6",
		name: "다소유",
		description: "다소유는 부산 서면에 있는 덮밥전문점.",
		images: ["/busan/누군가의동파육덮밥.jpeg", "/busan/누군가의항정덮밥.jpeg"],
		imageDescriptions: {
			ko: ["누군가의 동파육덮밥", "누군가의 항정덮밥"],
		},
		location: "부산 부산진구 동성로 4 1층 다소유",
		link: "https://map.naver.com/p/entry/place/1171864855?lng=129.0685232&lat=35.1507973&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
		daumLink:
			"https://place.map.kakao.com/2062204975?referrer=daumsearch_local",
	},
	{
		id: "7",
		name: "코지 서면점",
		description: "코지 서면점은 부산 서면에 있는 멕시코음식 전문점.",
		images: ["/busan/코지1.jpeg", "/busan/코지2.jpeg"],
		imageDescriptions: {
			ko: ["코지", "누군가의 타코"],
		},
		location: "부산 부산진구 서전로46번길 22 2F",
		link: "https://map.naver.com/p/search/%EC%BD%94%EC%A7%80%20%EC%84%9C%EB%A9%B4%EC%A0%90/place/1607134613?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dpll",
		daumLink: "https://place.map.kakao.com/847437705",
	},
	{
		id: "8",
		name: "홍콩가든",
		description: "홍콩가든은 부산 서면에 있는 딤섬 전문점.",
		images: ["/busan/홍콩가든.jpeg", "/busan/홍콩가든2.jpeg"],
		imageDescriptions: {
			ko: ["홍콩가든", "누군가의 홍콩음식"],
		},
		location: "부산 부산진구 전포대로 206-1 홍콩가든",
		link: "https://map.naver.com/p/search/%ED%99%8D%EC%BD%A9%EA%B0%80%EB%93%A0/place/1196417466?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh",
		daumLink:
			"https://place.map.kakao.com/1695067130?referrer=daumsearch_local",
	},
	{
		id: "9",
		name: "전포 온담",
		description: "전포 온담은 부산 서면에 있는 고기집.",
		images: ["/busan/전포온담.jpeg", "/busan/전포온담2.jpeg"],
		imageDescriptions: {
			ko: ["전포 온담의 고기", "누군가의 고기"],
		},
		location: "부산 부산진구 전포대로 225 1층 온담",
		link: "https://map.naver.com/p/entry/place/1033912535?c=15.00,0,0,0,dh&placePath=/home",
		daumLink:
			"https://place.map.kakao.com/1806080981?referrer=daumsearch_local",
	},
	{
		id: "10",
		name: "마코토 전포직영점",
		description:
			"마코토 전포직영점은 부산 전포에 있는 일본식 라멘집. 별로 인가봐.. ",
		images: [
			"/busan/마코토.jpeg",
			"/busan/마코토2.jpeg",
			"/busan/누군가의마코토.jpeg",
		],
		imageDescriptions: {
			ko: ["마코토", "츠케멘", "누군가의 마코토"],
		},
		location: "부산 부산진구 전포대로 225 1층 마코토",
		link: "https://map.naver.com/p/entry/place/1953814361?lng=129.0671158&lat=35.1542808&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
		daumLink: "https://place.map.kakao.com/1763958710",
	},
	{
		id: "11",
		name: "전포 에너지카페",
		description:
			"전포 에너지카페는 부산 전포에 있는 성격테스트 할수 있는 이색 카페.",
		images: ["/busan/전포에너지카페.jpeg", "/busan/전포에너지카페2.jpeg"],
		imageDescriptions: {
			ko: ["전포 에너지카페", "누군가의 성격검사"],
		},
		location: "부산 부산진구 전포대로162번가길 14 4층 에너지카페",
		link: "https://map.naver.com/p/entry/place/35326840?c=15.00,0,0,0,dh&placePath=/home",
		daumLink: "http://place.map.kakao.com/1769422118?referrer=daumsearch_local",
	},
];
