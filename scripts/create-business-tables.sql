-- Create tables for local business data and SEO tracking

CREATE TABLE IF NOT EXISTS business_locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    business_hours JSONB,
    services JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS local_keywords (
    id SERIAL PRIMARY KEY,
    keyword VARCHAR(255) NOT NULL,
    location VARCHAR(100) NOT NULL,
    search_volume INTEGER,
    competition_level VARCHAR(20),
    target_page VARCHAR(255),
    ranking_position INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customer_reviews (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_location VARCHAR(255),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    service_type VARCHAR(100),
    review_date DATE,
    is_featured BOOLEAN DEFAULT FALSE,
    google_review_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS seo_tracking (
    id SERIAL PRIMARY KEY,
    page_url VARCHAR(500) NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    target_keywords TEXT[],
    local_keywords TEXT[],
    schema_markup_type VARCHAR(100),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample business data
INSERT INTO business_locations (name, address, city, state, zip_code, phone, email, latitude, longitude, business_hours, services) VALUES
('Treasure Elegance', '123 Luxury Lane', 'Beverly Hills', 'CA', '90210', '+1-555-TREASURE', 'info@treasureelegance.com', 34.0736, -118.4004, 
'{"monday": "9:00-18:00", "tuesday": "9:00-18:00", "wednesday": "9:00-18:00", "thursday": "9:00-18:00", "friday": "9:00-18:00", "saturday": "10:00-16:00", "sunday": "closed"}',
'["luxury gift packaging", "custom boxes", "corporate gifts", "wedding favors", "gift wrapping"]');

-- Insert local keywords for tracking
INSERT INTO local_keywords (keyword, location, search_volume, competition_level, target_page, ranking_position) VALUES
('luxury gift packaging Beverly Hills', 'Beverly Hills, CA', 320, 'medium', '/', NULL),
('custom boxes Los Angeles', 'Los Angeles, CA', 480, 'high', '/services', NULL),
('gift wrapping service Beverly Hills', 'Beverly Hills, CA', 210, 'low', '/services', NULL),
('corporate gifts LA', 'Los Angeles, CA', 390, 'medium', '/services/corporate-gifts', NULL),
('wedding favors packaging California', 'California', 150, 'low', '/services/wedding-favors', NULL);

-- Insert sample reviews
INSERT INTO customer_reviews (customer_name, customer_location, rating, review_text, service_type, review_date, is_featured) VALUES
('Sarah Johnson', 'Beverly Hills, CA', 5, 'Absolutely stunning packaging! The attention to detail is incredible and made our corporate gifts truly memorable.', 'Corporate Gifts', '2024-12-01', TRUE),
('Michael Chen', 'West Hollywood, CA', 5, 'The engagement ring packaging was beyond our wildest dreams. Every element was perfect, from the velvet interior to the custom engraving.', 'Luxury Packaging', '2024-11-28', TRUE),
('Emma Davis', 'Santa Monica, CA', 5, 'Working with Treasure Elegance for our wedding favors was the best decision we made. Their creativity and professionalism made our special day even more magical.', 'Wedding Favors', '2024-11-25', TRUE);
