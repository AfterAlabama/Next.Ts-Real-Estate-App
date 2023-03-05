export const filterData = [
	{
		items: [
			{ name: 'Покупка', value: 'for-sale' },
			{ name: 'Съем', value: 'for-rent' },
		],
		placeholder: 'Цель',
		queryName: 'purpose',
	},
	{
		items: [
			{ name: 'Ежедневно', value: 'daily' },
			{ name: 'Еженедельно', value: 'weekly' },
			{ name: 'Ежемесячно', value: 'monthly' },
			{ name: 'Ежегодно', value: 'yearly' },
		],
		placeholder: 'Частота Оплаты',
		queryName: 'rentFrequency',
	},
	{
		items: [
			{ name: '10,000', value: '10000' },
			{ name: '20,000', value: '20000' },
			{ name: '30,000', value: '30000' },
			{ name: '40,000', value: '40000' },
			{ name: '50,000', value: '50000' },
			{ name: '60,000', value: '60000' },
			{ name: '85,000', value: '85000' },
		],
		placeholder: 'Минимальная Цена ($)',
		queryName: 'minPrice',
	},
	{
		items: [
			{ name: '50,000', value: '50000' },
			{ name: '60,000', value: '60000' },
			{ name: '85,000', value: '85000' },
			{ name: '110,000', value: '110000' },
			{ name: '135,000', value: '135000' },
			{ name: '160,000', value: '160000' },
			{ name: '185,000', value: '185000' },
			{ name: '200,000', value: '200000' },
			{ name: '300,000', value: '300000' },
			{ name: '400,000', value: '400000' },
			{ name: '500,000', value: '500000' },
			{ name: '600,000', value: '600000' },
			{ name: '700,000', value: '700000' },
			{ name: '800,000', value: '800000' },
			{ name: '900,000', value: '900000' },
			{ name: '1000,000', value: '1000000' },
		],
		placeholder: 'Максимальная Цена ($)',
		queryName: 'maxPrice',
	},
	{
		items: [
			{ name: '93', value: '1000' },
			{ name: '186', value: '2000' },
			{ name: '279', value: '3000' },
			{ name: '372', value: '4000' },
			{ name: '465', value: '5000' },
			{ name: '930', value: '10000' },
			{ name: '1860', value: '20000' },
		],
		placeholder: 'Максимальная Площадь (кв.м.)',
		queryName: 'areaMax',
	},
	{
		items: [
			{ name: '1', value: '1' },
			{ name: '2', value: '2' },
			{ name: '3', value: '3' },
			{ name: '4', value: '4' },
			{ name: '5', value: '5' },
			{ name: '6', value: '6' },
			{ name: '7', value: '7' },
			{ name: '8', value: '8' },
			{ name: '9', value: '9' },
			{ name: '10', value: '10' },
		],
		placeholder: 'Количество Комнат',
		queryName: 'roomsMin',
	},
	{
		items: [
			{ name: '1', value: '1' },
			{ name: '2', value: '2' },
			{ name: '3', value: '3' },
			{ name: '4', value: '4' },
			{ name: '5', value: '5' },
			{ name: '6', value: '6' },
			{ name: '7', value: '7' },
			{ name: '8', value: '8' },
			{ name: '9', value: '9' },
			{ name: '10', value: '10' },
		],
		placeholder: 'Количество Ванных Комнат',
		queryName: 'bathsMin',
	},
	{
		items: [
			{ name: 'С Мебелью', value: 'furnished' },
			{ name: 'Без Мебели', value: 'unfurnished' },
		],
		placeholder: 'Мебель',
		queryName: 'furnishingStatus',
	},
	{
		items: [
			{ name: 'Квартира', value: '4' },
			{ name: 'Малоэтажный Жилой Дом', value: '16' },
			{ name: 'Вилла', value: '3' },
			{ name: 'Пентхаус', value: '18' },
			{ name: 'Апартамент-отель', value: '21' },
			{ name: 'Комплекс Вилл', value: '19' },
			{ name: 'Жилой Участок', value: '14' },
			{ name: 'Жилой Дом', value: '12' },
			{ name: 'Жилое Здание', value: '17' },
		],
		placeholder: 'Вид Недвижимости',
		queryName: 'categoryExternalID',
	},
];

export const getFilterValues = (filterValues: { [key: string]: string }) => {
	const {
		purpose,
		rentFrequency,
		categoryExternalID,
		minPrice,
		maxPrice,
		areaMax,
		roomsMin,
		bathsMin,
		locationExternalIDs,
	} = filterValues;

	const values = [
		{
			name: 'purpose',
			value: purpose,
		},
		{
			name: 'rentFrequency',
			value: rentFrequency,
		},
		{
			name: 'minPrice',
			value: minPrice,
		},
		{
			name: 'maxPrice',
			value: maxPrice,
		},
		{
			name: 'areaMax',
			value: areaMax,
		},
		{
			name: 'roomsMin',
			value: roomsMin,
		},
		{
			name: 'bathsMin',
			value: bathsMin,
		},
		{
			name: 'locationExternalIDs',
			value: locationExternalIDs,
		},
		{
			name: 'categoryExternalID',
			value: categoryExternalID,
		},
	];

	return values;
};
