ALTER TABLE messages ADD COLUMN likes INTEGER DEFAULT 0 NOT NULL;

-- ALTER TABLE messages DROP COLUMN likes;

UPDATE messages SET likes = likes + 1 WHERE id = 3;
