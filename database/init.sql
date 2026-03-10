-- Create test_table if it doesn't exist
CREATE TABLE IF NOT EXISTS test_table (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
