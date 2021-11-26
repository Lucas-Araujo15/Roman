USE ROMAN;
GO

INSERT INTO professor (email, senha, nomeProfessor)
VALUES ('saulo@email.com', '1234', 'Saulo'),
	   ('lucas@email.com', '4567', 'Lucas'),
	   ('odirlei@email.com', '8910', 'Odirlei'),
	   ('thiago@email.com', '0198', 'Thiago');
GO

INSERT INTO tema (tituloTema)
VALUES ('Gest�o'),
	   ('HQ'),
	   ('Contabilidade'),
	   ('Medicina'),
	   ('Jogos'),
	   ('Automa��o'),
	   ('Educa��o');
GO

INSERT INTO projeto (idProfessor, idTema, tituloProjeto, descricao)
VALUES (1, 3, 'Projeto de Gest�o de Despesas', 'Um projeto de contabilidade'),
	   (2, 6, 'Projeto de Automa��o Industrial', 'Um projeto de automa��o'),
	   (4, 5, 'Projeto de Gerenciamento de Jogos', 'Um projeto de jogos'),
	   (3, 2, 'Projeto de Listagem de Personagens', 'Um projeto de HQs');
GO