CREATE TABLE IF NOT EXISTS Product(
    product_id UUID PRIMARY KEY,
    product_name varchar(50) NOT NULL,
    description varchar(255),
    category varchar(20),
    price float NOT NULL,
    stock_quantity integer NOT NULL,
    added_date TIMESTAMP
);