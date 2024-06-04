# Stage 1: Build React application
FROM node:14 AS build

# in web/front
WORKDIR /app

# Copy react package dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy front project
COPY . ./

# Build the React application
RUN npm run build

# Stage 2: Nginx
FROM nginx:alpine

# Copy built React files from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Create Nginx configuration file
RUN echo 'server { \
	listen 80; \
	server_name localhost; \
	location / { \
		root /usr/share/nginx/html; \
		try_files $uri /index.html; \
	} \
}' > /etc/nginx/conf.d/default.conf

# open port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"] 
