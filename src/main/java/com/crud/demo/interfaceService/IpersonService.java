package com.crud.demo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.crud.demo.models.*;
public interface IpersonService {
	public List<Person>listar();
	public Optional<Person>listarId(int id);
	public int save(Person p);
	public void delete(int id);
	
}
