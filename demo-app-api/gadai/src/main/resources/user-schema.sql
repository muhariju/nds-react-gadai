-- Delete user table if exist
DROP TABLE IF EXISTS user;
-- Create user table
CREATE TABLE user(
    user_id VARCHAR(15) PRIMARY KEY NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    user_hp VARCHAR(12) NOT NULL,
    user_desc VARCHAR(50) NULL,
    user_txn_limit NUMERIC(17,2) NOT NULL,
    user_reg_date DATE NOT NULL,
    rec_status VARCHAR(1) NULL DEFAULT 'N'::VARCHAR
)
WITH (
    OIDS=FALSE
);

-- Query All data in user table
SELECT * FROM user;