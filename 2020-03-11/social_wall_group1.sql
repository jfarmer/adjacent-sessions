ALTER TABLE messages
ADD COLUMN likes INTEGER DEFAULT 0;

UPDATE messages
SET likes = likes + 1
WHERE id = 1;

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  message_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

INSERT INTO likes (message_id) VALUES (1);
