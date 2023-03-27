package com.webspecialization.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
public class Role {
    @Id
    @GeneratedValue
    private Integer roleId;
    private String name;

    @ManyToMany(mappedBy = "roles")
    private List<User> users;

}
