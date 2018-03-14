label => 'Пользователи',

columns => {

	uuid               => 'uuid=SYS_GUID()',

	id_role            => '(roles)=2',           # Роль
	login              => 'string',              # login
	mail               => 'string',              # E-mail
	password           => 'raw [32]',            # Пароль
	salt               => 'raw [32]',            # "Соль" пароля
	is_read_only       => 'checkbox',            # Без права редактирования
	
},

keys => {
	uuid               => 'uuid',                
},

data => [
	{id => -2, fake => 0, id_role => 1, label => 'Системный процесс'},
	{id => -1, fake => 0, id_role => 1},
]