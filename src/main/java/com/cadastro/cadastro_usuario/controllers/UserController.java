package com.cadastro.cadastro_usuario.controllers;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cadastro.cadastro_usuario.User.User;
import com.cadastro.cadastro_usuario.User.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserRepository repository;
    private User user;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/listaUsuarios")
    public List<User> listar() {
        return repository.findAll();
    }
    
    @GetMapping("{id}")
    public ResponseEntity<User> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public User criarUsuario(@RequestBody User user) {
        return repository.save(user);
    }
}
