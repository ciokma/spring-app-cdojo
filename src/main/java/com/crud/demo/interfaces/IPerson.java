package com.crud.demo.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crud.demo.models.Person;
@Repository
public interface IPerson extends CrudRepository<Person, Integer> {

}
