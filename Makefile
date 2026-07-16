.PHONY: help doctor install bootstrap lint

help:
	@echo "KAIRO Cloud IDE"
	@echo ""
	@echo "  make doctor     Run health checks"
	@echo "  make install    Bootstrap the environment"
	@echo "  make bootstrap  Alias for install"

 doctor:
	./doctor.sh

install:
	./install.sh

bootstrap: install

lint:
	@echo "Linting will be expanded in later phases"
