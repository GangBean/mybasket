# Base Image
ARG AIRFLOW_VERSION=slim-latest-python3.11
FROM apache/airflow:${AIRFLOW_VERSION}

# Airflow home
ENV AIRFLOW_HOME=/opt/airflow
ENV AIRFLOW__CORE__LOAD_EXAMPLES=True

# Working directory
WORKDIR /app

# Copy dags
COPY ./ /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose port 8080
EXPOSE 8080

CMD ["standalone"]

