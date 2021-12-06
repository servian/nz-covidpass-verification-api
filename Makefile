start:
	docker-compose up -d

restart:
	docker restart nz-covidpass-api

stop:
	docker-compose down

lint:
	docker exec -t nz-covidpass-api yarn lint

fix:
	docker exec -t nz-covidpass-api yarn fix

build:
	docker exec -t nz-covidpass-api yarn build

exec:
	docker exec -it nz-covidpass-api sh

logs:
	docker logs -f nz-covidpass-api

build-docker:
	docker build -t covidpass-api:generic.v1 -f docker/general/Dockerfile .