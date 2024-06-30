# Stage 1: Build Spring Boot application
FROM amazoncorretto:17-al2-native-headless AS build

WORKDIR /app

# Configure google oauth 2.0 variables
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG GOOGLE_REDIRECT_URI

ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV GOOGLE_REDIRECT_URI=$GOOGLE_REDIRECT_URI

# Check if environment variables are set
RUN if [ -z "$GOOGLE_CLIENT_ID" ]; then echo "GOOGLE_CLIENT_ID is not set"; exit 1; fi
RUN if [ -z "$GOOGLE_CLIENT_SECRET" ]; then echo "GOOGLE_CLIENT_SECRET is not set"; exit 1; fi
RUN if [ -z "$GOOGLE_REDIRECT_URI" ]; then echo "GOOGLE_REDIRECT_URI is not set"; exit 1; fi

RUN echo "GOOGLE_CLIENT_ID is $GOOGLE_CLIENT_ID"
RUN echo "GOOGLE_CLIENT_SECRET is $GOOGLE_CLIENT_SECRET"
RUN echo "GOOGLE_REDIRECT_URI is $GOOGLE_REDIRECT_URI"

# Copy Gradle build files
COPY build.gradle .
COPY gradle.properties .
COPY settings.gradle .
COPY gradlew .
COPY gradle/ ./gradle/

# Copy the entire source code
COPY src ./src/

# Replace placeholders in application.yaml with actual values
RUN sed -i "s/\${GOOGLE_CLIENT_ID}/$GOOGLE_CLIENT_ID/" ./src/main/resources/application.yaml
RUN sed -i "s/\${GOOGLE_CLIENT_SECRET}/$GOOGLE_CLIENT_SECRET/" ./src/main/resources/application.yaml
RUN sed -i "s#\${GOOGLE_REDIRECT_URI}#$GOOGLE_REDIRECT_URI#" ./src/main/resources/application.yaml
RUN cat ./src/main/resources/application.yaml

# Build the application excluding test
RUN ./gradlew build -x test

# Stage 2: Run Spring Boot application
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Command to run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
