USE ROMAN;
GO

SELECT * FROM professor;
GO

SELECT * FROM tema;
GO

SELECT * FROM projeto;
GO

--Listagem de projetos
SELECT nomeProfessor Professor, tituloProjeto [Título], descricao [Descrição], tituloTema Tema FROM projeto 
LEFT JOIN professor ON projeto.idProfessor = professor.idProfessor
LEFT JOIN tema ON projeto.idTema = tema.idTema;
GO


--Login

SELECT * FROM professor WHERE email = 'saulo@email.com' AND senha = '1234';
GO