Use WebAPI_FP_TournamentGames
Go
Create table GamesResolut
(
	ID int primary key identity,
	Game_Name nvarchar(50) not null,
	Player1 nvarchar(50) not null,
	Player2 nvarchar(50) not null,
	[Who_Won?] nvarchar(50) not null, 
)
Go
Insert into GamesResolut values ('Chess', 'Ellsworth', 'Jed', 'Jed')
Insert into GamesResolut values ('checkers', 'Sima', 'Arline', 'Sima')
Insert into GamesResolut values ('Backgammon', 'Faviola', 'Rocky', 'Faviola')
Insert into GamesResolut values ('Dominoes', 'Cammy', 'Anibal', 'Cammy')
Insert into GamesResolut values ('RISK', 'Dong', 'America', 'America')
Insert into GamesResolut values ('Chess', 'Anastasia', 'Rodolfo', 'Rodolfo')
Insert into GamesResolut values ('BATTLESHIP', 'Freda', 'Joan', 'Freda')
Insert into GamesResolut values ('Connect4', 'Tashia', 'Pandora', 'Pandora')
Insert into GamesResolut values ('Reversi', 'Delpha', 'Bobbie', 'Delpha')
Insert into GamesResolut values ('Blooop', 'Chasity', 'Ariel', 'Chasity')