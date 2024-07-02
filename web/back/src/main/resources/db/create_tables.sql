create table member ( # 사용자
  id bigint auto_increment primary key,
  email varchar(255) unique not null,
  name varchar(255)
);
create table authority ( # 권한
  id bigint auto_increment primary key,
  state varchar(30) unique not null
);
create table member_authority ( # 사용자권한
  id bigint auto_increment primary key,
  member_id bigint not null, # foreign key 제약은 제외함
  authority_id bigint not null
);
create table member_authority_history ( # 사용자권한이력
  id bigint auto_increment primary key,
  member_authority_id bigint not null,
  update_datetime datetime not null default now(),
  state varchar(30) not null
);
create table candidate_recipe ( # 후보레시피
  id bigint auto_increment primary key,
  member_id bigint not null,
  recipe_id bigint not null,
  inference_datetime datetime not null,
  inference_result float not null # 여기를 부동소수점으로 해야하나 고정소수점으로 해야하나 고민
);
create table member_recommendation_recipe ( # 사용자추천레시피
  id bigint auto_increment primary key,
  member_id bigint not null,
  recipe_id bigint not null,
  recommendation_datetime datetime not null,
  preference varchar(30) not null
);
create table member_recommendation_recipe_preference_history ( # 사용자추천레시피선호이력
  id bigint auto_increment primary key,
  member_recommendation_recipe_id bigint not null,
  update_datetime datetime not null,
  preference varchar(30) not null
);
create table recipe ( # 레시피
  id bigint auto_increment primary key,
  recipe_no varchar(15) unique not null,
  name varchar(100) not null,
  description varchar(100),
  recipe_url varchar(255) not null,
  image_url varchar(255) not null,
  # category varchar(20) not null,
  portion int unsigned not null default 1,
  cooking_minute int unsigned,
  difficulty varchar(10)
);
create table recommendation_recipe ( # 추천레시피
  id bigint auto_increment primary key,
  basket_id bigint not null,
  recipe_id bigint not null,
  recommendation_datetime datetime not null
);
create table basket ( # 장바구니
  id bigint auto_increment primary key,
  member_id bigint not null,
  basket_datetime datetime not null default now(),
  budget int unsigned not null,
  total_amount int unsigned not null,
  recipe_count int unsigned not null default 0,
  ingredient_count int unsigned not null default 0
);
create table ingredient ( # 재료
  id bigint auto_increment primary key,
  name varchar(30) not null,
  image_url varchar(255) not null
);
create table require_volume ( # 필요용량
  id bigint auto_increment primary key,
  recipe_id bigint not null,
  ingredient_id bigint not null,
  volume_unit_id bigint not null,
  volume int unsigned not null default 0
);
create table volume_unit ( # 용량단위
  id bigint auto_increment primary key,
  name varchar(30) not null unique
);
create table product ( # 상품
  id bigint auto_increment primary key,
  ingredient_id bigint not null,
  name varchar(50) not null,
  image_url varchar(255) not null,
  purchase_url varchar(255) not null
);
create table product_price ( # 상품가격
  id bigint auto_increment primary key,
  product_id bigint not null,
  gather_datetime datetime not null default now(),
  price int unsigned not null default 0,
  volume int unsigned not null default 0,
  volume_unit_id bigint not null
);
create table purchase_count ( # 구매개수
  id bigint auto_increment primary key,
  basket_id bigint not null,
  product_price_id bigint not null,
  count int unsigned not null default 0
);