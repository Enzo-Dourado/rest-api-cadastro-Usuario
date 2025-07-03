package com.cadastro.cadastro_usuario.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{

    List<User> findAllById(Long id);
    
}
