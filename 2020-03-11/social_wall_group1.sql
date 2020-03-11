-- Add "likes" column to "messages" table
ALTER TABLE messages
ADD COLUMN likes INTEGER DEFAULT 0;

-- Increment the "likes" column by 1 for the message with id = 1
UPDATE messages
SET likes = likes + 1
WHERE id = 1;

-- Create a new table called "likes"
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  message_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

-- Insert a row into the "likes" table, corresponding to liking the message with id = 1
INSERT INTO likes (message_id) VALUES (1);
