-- Insert default scopes data
-- This migration adds default OAuth2 scopes

INSERT OR IGNORE INTO clients (id, client_id, client_secret, redirect_uris, grant_types, scope, name, created_at, updated_at)
VALUES (
    'default-client-id',
    'default_client',
    'default_secret_change_in_production',
    '["http://localhost:3000/callback"]',
    '["authorization_code", "client_credentials", "password", "refresh_token"]',
    'read write admin',
    'Default Client',
    datetime('now'),
    datetime('now')
);

-- Insert a test user (password is 'password' hashed with argon2)
INSERT OR IGNORE INTO users (id, username, password_hash, email, enabled, created_at, updated_at)
VALUES (
    'test-user-id',
    'testuser',
    '$argon2id$v=19$m=19456,t=2,p=1$test$test',
    'test@example.com',
    1,
    datetime('now'),
    datetime('now')
);
