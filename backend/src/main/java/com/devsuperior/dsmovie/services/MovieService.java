package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
	
}

// Anotação "Autowired" permite que o gerenciador de dependências (eg.: JPA) do framework (Spring) instancie o objeto adequado automaticamente (manualmente, neste caso, new MovieRepository())

// Método findAll() paginado: Utiliza-se Pageable para trazer o resultado abrigado em página (será exibido na View dentro de uma página, eg.: site exibirá 12 filmes por página)
// Nesta hipótese, será retornado um objeto especial de classe Page
// PS.: Page substituiu List, no caso

// Função de alta ordem possui 02 espécies:
// A - Aquelas funções que recebem uma ou mais funções como argumentos
// B - Aquelas funções que devolvem outra função como valor de retorno

//  @Transactional annotation is used when you want the certain method/class(=all methods inside) to be executed in a transaction.
// Let's assume user A wants to transfer 100$ to user B. What happens is:
// We decrease A's account by 100$
// We add 100$ to B's account
// Let's assume the exception is thrown after succeeding 1) and before executing 2). Now we would have some kind of inconsistency because A lost 100$ while B got nothing. Transactions means all or nothing. If there is an exception thrown somewhere in the method, changes are not persisted in the database. Something called rollback happens.
// If you don't specify @Transactional, each DB call will be in a different transaction.
// https://stackoverflow.com/questions/54326306/what-is-the-use-of-transactional-with-jpa-and-hibernate#54326437

//readOnly -> Identifica o método como somente para leitura, resultando em maior eficiência 

// Lembrar que findByID() retorna um Optional<>, sendo necessário seguir com .get() para acessar o objeto armazenado (no caso, Movie). Lembre também que, caso não exista um valor a ser acessado pelo .get(), será gerada uma exceção
