dev:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build

prod:
	docker-compose up --build