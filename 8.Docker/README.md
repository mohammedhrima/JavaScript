-   Build image:

```bash
  docker build -t myapp:v1 .
  # -t to give image costume name
  # :v1 to specify version (TAG)
```

-   List images:

```bash
  docker images
```

-   Remove image:

```bash
  docker image rm image_name
```

-   In case image is already used:

```bash
  docker image rm image_name -f
```

-   create container:

*   method 1:

```bash
  docker run --name container_name -p PORT_map_to:PORT_exposed_by_container --rm -d -v full_path:docker_workdir -v folder_to_be_saved_even_we_remove_it image_name
  # --name to give container costume name
  # -p to specify port to map to
  # --rm to remove container in case we don't need it
  # -d terminal detach from container process
  # -v specify volume, so project in be syncronized with our project in the local machine
```

*   method 2:
    - use docker-compose

-   start existing container:

```bash
  docker start container_name
```

-   list containers:

```bash
  docker ps     # see active containers
  docker ps -a  # see all containers
```

-   stop container:

```bash
  docker ps
  docker stop container_name
```

-   remove container:

```bash
  docker container rm container_name
```

-   remove all images, containers, volumes:

```bash
  docker system prune -a
  docker volume prune
  docker image prune
```

-   docker-compose:

    -   feed docker compose file with necessary data
    -   run the following commands:

```bash
  docker-compose build
  docker-compose up
```

-   stop container:

```bash
  docker-compose down --rmi all # --rmi all to remove all images and volumes when stoping
```

-    to copy something from container to host:
```bash
    docker exec -it continer_id bash
    docker cp -R continer_id:/path/to/dir ~/path/to/dir
```

-   Important notes:
    - if you are using vite react app, go to vite.config.js and add the following settings

```javascript
  export default defineConfig({
    plugins: [react()],
    server: {
    host: true,
    strictPort: true,
    port: 8080 // optional
    }
  })

```
