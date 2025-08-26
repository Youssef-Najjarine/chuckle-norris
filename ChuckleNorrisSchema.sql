CREATE  table user_login
(
user_id		serial		not null,
first_name	varchar(50) not null,
last_name	varchar(50) not null,
user_name	varchar(50)	not null,
password	varchar(20)	not null,
CONSTRAINT pk_user_id PRIMARY KEY (user_id)

)
;

Create table favorites
(
favorite_id serial		 not null,
value		varchar(500) not null,
rank		integer	,
is_favorite	boolean		 not null,
user_id		integer		 not null,
CONSTRAINT pk_favorite_id PRIMARY KEY (favorite_id),
CONSTRAINT fk_user_id FOREIGN KEY(user_id)
REFERENCES user_login(user_id)
)
;



