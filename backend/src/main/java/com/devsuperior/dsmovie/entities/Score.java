package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK();
	
	private Double value;
	
	public Score() {}
	
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	
}

// Tratando-se de classe de associação, teremos uma chave primária composta 
// Lembre-se que não se pode haver duas referências como identificador do objeto (eg.: movie e user) 
// Para solucionar neste caso, criou-se a classe ScorePK
// Passa-se "new ScorePK()" para garantir que o objeto (ScorePK) estará instanciado. Afinal, não se pode haver objeto sem sua respectiva PK na base de dados