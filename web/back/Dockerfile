# Stage 1: Build Spring Boot application
FROM amazoncorretto:17-al2-native-headless AS build

WORKDIR /app

# Copy Gradle build files
COPY build.gradle .
COPY gradle.properties .
COPY settings.gradle .
COPY gradlew .
COPY gradle/ ./gradle/

# Copy the entire source code
COPY src ./src/

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
