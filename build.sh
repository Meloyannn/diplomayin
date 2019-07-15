#!/bin/bash

install_dep (){
	pwd_tmp=$PWD
	cd $1/files && npm install && cd $pwd_tmp   
}

install_dep api
docker-compose build
