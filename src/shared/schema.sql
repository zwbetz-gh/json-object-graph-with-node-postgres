drop table if exists author cascade;

create table author (
  id serial primary key,
  first_name text not null,
  last_name text not null
);

drop table if exists quote cascade;

create table quote (
  id serial primary key,
  quote text not null,
  author_id bigint not null references author (id)
);

insert into author (first_name, last_name) values ('Carl', 'Jung');
insert into author (first_name, last_name) values ('Thomas', 'Jefferson');

insert into quote (quote, author_id) values ('There is no coming to consciousness without pain.', 1);
insert into quote (quote, author_id) values ('The most terrifying thing is to accept oneself completely.', 1);
insert into quote (quote, author_id) values ('Do you want to know who you are? Don''t ask. Act! Action will delineate and define you.', 2);
insert into quote (quote, author_id) values ('The man who reads nothing at all is better educated than the man who reads nothing but newspapers.', 2);

commit;
