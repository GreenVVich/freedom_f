import React, { useState } from 'react';
import Layout from 'antd/es/layout/layout';
import Album from './components/Album';
import AddPoem from './components/AddPoem';

function App() {
	const [poemList, setPoemList] = useState([
		{
			id: 2,
			name: 'Улыбка',
			content: `С улыбкой проснусь рано утром
Её пронесу целый день
Вечером с ней так уютно
А ночью снимать уже лень

Каждый день как предыдущий 
Веселит это только меня
Дорогу осилит идущий
А мне и путь подскажет луна
			
Солнце тоже в моих подружках
Вместе с ней смотрим на мир
Часами лежим на подушках
Своей жизни я сам командир

И не остановишь никак
Человека с любовью в груди
Свети ему словно маяк
К сердцу открой пути

И зимой когда будет холод
Просто помни как ты далеко
С улыбкой прошёл через голод
И как дальше будет легко aboba`,
		},
	]);
	return (
		<Layout
			style={{
				width: '99%',
				justifyContent: 'center',
				backgroundColor: 'ghostwhite',
			}}
		>
			<AddPoem value={[poemList, setPoemList]} />
			<Album value={poemList} />
		</Layout>
	);
}

export default App;
