create table member(
    id bigint auto_increment primary key,
    email varchar(255) not null,
    name varchar(255) not null
);
CREATE INDEX idx_email ON member(email);

create table recipe(
    id bigint auto_increment primary key, 
    recipe_no varchar(15) not null, 
    name varchar(255) not null, 
    category varchar(20) not null, 
    recipe_uri varchar(255) not null, 
    image_uri varchar(255) not null, 
    volume varchar(255), 
    cooking_time int, 
    difficulty varchar(10)
);
