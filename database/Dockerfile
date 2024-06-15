# Stage 1: install git and pull config file
FROM ubuntu:latest AS git_installer

RUN apt-get update && \
    apt-get install -y git

ARG BRANCH=main

WORKDIR /app

RUN git init \
    && git remote add origin https://github.com/GangBean/mybasket.git \
    && git config core.sparseCheckout true \
    && echo "database/config/" >> .git/info/sparse-checkout \
    && git pull origin $BRANCH

RUN if [ ! -f '/app/database/config/my.cnf' ]; then \
        echo "Error: my.cnf file not found. Existing... \n $(pwd) \n $(ls -l ./database/config/)" && exit 1; \
    fi

# Stage 2: build mysql image
FROM mysql:8.0.37

WORKDIR /app

# pull config file from stage 1
COPY --from=git_installer /app/database/config/my.cnf /etc/mysql/my.cnf

# Define MySql data directory
VOLUME /var/lib/mysql

# Expose 3306 port
EXPOSE 3306

# Run MySQL server
CMD ["mysqld"]

