package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}

// JPA permite confecção de métodos a partir de métodos padrão trazidos pelo framework, como neste caso (ver revisão de Nélio para mais sobre o tema)