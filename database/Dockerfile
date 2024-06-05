# Base version: 8.0.37
FROM mysql:8.0.37

# Write mysqld config file
RUN echo "[mysqld]\n\
sql_mode=STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION\n\
max_connections=200\n\
bind-address = 0.0.0.0\n" > /etc/mysql/conf.d/my.cnf

# Define MySql data directory
VOLUME /var/lib/mysql

# Expose 3306 port
EXPOSE 3306

# Run MySQL server
CMD ["mysqld"]

