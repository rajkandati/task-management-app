-- Create database
CREATE DATABASE taskdb;

-- Connect to the database
\c taskdb;

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO tasks (title) VALUES 
    ('Setup ECS cluster'),
    ('Deploy application'),
    ('Configure load balancer');