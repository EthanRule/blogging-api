# blogging-api

project_url=https://roadmap.sh/projects/blogging-platform-api

### Start Docker Container:

` sudo docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:16`

### List Docker Containers:

`sudo docker ps -a`

### Stop and Remove with:

` sudo docker stop <id>`
` sudo docker rm <id>`

### Test docker connection:

`sudo psql -h localhost -p 5432 -U postgres -d postgres`
