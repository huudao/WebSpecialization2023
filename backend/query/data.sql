use perfumania;

DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS brand;

DROP TABLE IF EXISTS user;
CREATE TABLE user
(
    user_id              INT          NOT NULL AUTO_INCREMENT,
    username             VARCHAR(255) NOT NULL,
    password             VARCHAR(255) NOT NULL,
    email                VARCHAR(255) NOT NULL,
    first_name           VARCHAR(255) NOT NULL,
    last_name            VARCHAR(255) NOT NULL,
    telephone            VARCHAR(20)  NOT NULL,
    active               BOOLEAN   default 0,
    reset_password_token VARCHAR(255),
    inserted_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role
(
    role_id     INT         NOT NULL AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id)
);

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles
(
    user_id     INT NOT NULL,
    role_id     INT NOT NULL,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id),
    FOREIGN KEY (role_id) REFERENCES role (role_id)
);

DROP TABLE IF EXISTS brand;
CREATE TABLE brand
(
    brand_id    INT          NOT NULL AUTO_INCREMENT,
    name        VARCHAR(255) NOT NULL,
    description TEXT,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (brand_id)
);

DROP TABLE IF EXISTS discount;
CREATE TABLE discount
(
    discount_id         INT           NOT NULL AUTO_INCREMENT,
    discount_code       VARCHAR(255)  NOT NULL,
    name                VARCHAR(255),
    description         TEXT,
    discount_percentage DECIMAL(5, 2) NOT NULL,
    active              BOOLEAN       NOT NULL DEFAULT 1,
    inserted_at         TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at          TIMESTAMP,
    PRIMARY KEY (discount_id)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product
(
    product_id      INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand_id        INT          NOT NULL,
    name            VARCHAR(255) NOT NULL,
    gender          VARCHAR(50),
    description     TEXT,
    image_url       VARCHAR(255),
    shipping_policy TEXT,
    inserted_at     TIMESTAMP             DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    product_views   INT          NOT NULL DEFAULT 0,
    FOREIGN KEY (brand_id) REFERENCES brand (brand_id)
);
-- ALTER TABLE product
-- ADD CONSTRAINT fk_product_variant
-- FOREIGN KEY (selected_variant_id) REFERENCES product_variant (variant_id);

-- ALTER TABLE product
-- DROP FOREIGN KEY fk_product_variant;

DROP TABLE IF EXISTS product_variant;
CREATE TABLE product_variant
(
    variant_id  INT            NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id  INT,
    size        VARCHAR(255),
    price       DECIMAL(10, 2) NOT NULL,
    quantity    INT            NOT NULL,
    discount_id INT,
    FOREIGN KEY (product_id) REFERENCES product (product_id),
    FOREIGN KEY (discount_id) REFERENCES discount (discount_id)
);

-- ALTER TABLE product_variant
-- DROP FOREIGN KEY product_variant_ibfk_1;

DROP TABLE IF EXISTS product_review;
CREATE TABLE product_review
(
    review_id   INT NOT NULL AUTO_INCREMENT,
    product_id  INT NOT NULL,
    user_id     INT NOT NULL,
    rating      INT,
    review      TEXT,
    inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (review_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

-- Add Role ----------------------------------------------
INSERT INTO role (name)
VALUES ('ROLE_USER'),
       ('ROLE_ADMIN');

-- Add USER ----------------------------------------------
INSERT INTO user (username, password, email, first_name, last_name, telephone, active, inserted_at, updated_at)
VALUES ('huudao', '1', '19130029@gmail.com', 'Dao', 'Nguyen Huu', '555-1234', 1, NOW(), NOW());

INSERT INTO user (username, password, email, first_name, last_name, telephone, active, inserted_at, updated_at)
VALUES ('dao', '$2a$12$KRkRIiLQT6sqO9Q7ls0WM.fEoJqJEbrCzzOCinTBa0/JrYWSHbrvC', '19130029@st.hcmuaf.edu.vn', 'Dao',
        'Nguyen Huu', '555-1234', 1, NOW(), NOW());

-- Add USER_ROLES ----------------------------------------------
INSERT INTO user_roles (user_id, role_id)
VALUES ('1', '1'),
       ('1', '2');

-- Add DISCOUNT ----------------------------------------------
INSERT INTO discount (discount_code, name, description, discount_percentage, active, inserted_at, updated_at)
VALUES ('DISCOUNT10', '10% OFF', 'Get 10% off on all orders', 10, true, NOW(), NOW()),
       ('DISCOUNT20', '20% OFF', 'Get 20% off on all orders', 20, true, NOW(), NOW());

-- Add BRAND ----------------------------------------------
INSERT INTO brand(name, description)
VALUES ("Azzaro",
        "Releasing his first clothing line in 1962, Loris Azzaro has since become an icon of the fashion industry. Best known for refined gowns and dresses as well as his use of bright, dynamic colors, Azzaro’s success soon prompted him to launch his first fragrance. Released in 1975, the first Loris Azzaro perfume was an instant success, receiving prai"),
       ("GUCCI", "One of the world’s best-known fashion houses, Gucci began as a humble Florence, Italy-based saddler and luggage designer in 1906. The first Gucci store opened in the late 1930s, but it wasn’t until the 40s that Gucci’s trademarked bamboo-handle leather bag - which would launch it into fame - was released. By the 1960s, Gucci could be seen on some of the world’s most popular celebrities like Audrey Hepburn and Grace Kelly. Today, Gucci remains synonymous with luxury and wealth, and the brand has expanded to include clothes, accessories, cosmetics, and Gucci perfumes like Gucci Bloom, Guilty, and more. Still featuring traditional Italian elements to honor its roots, the Gucci brand today is at the forefront of the fashion industry.

What are the most popular Gucci Perfume fragrances for women?
Gucci Bloom is one of the most iconic fragrances from the fashion house. It contains notes of tuberose & jasmine creating a rich white floral aroma.

Which Gucci colognes are best-selling for men?
Released in 2011, Gucci Guilty Pour Homme is one of the most popular woody fragrances for men. Some of the most prominent notes in this cologne are lavender, Amalfi lemon, Virginia cedar & vanilla."),
       ("Paco Rabanne",
        "With origins in architecture, Paco Rabanne made his debut in the fashion industry in 1966, and released his first fragrance in 1968. Lauded for their unconventional and flamboyant craftsmanship, colognes and perfumes by Paco Rabanne are designed with the goal of making a statement. Today, Rabanne’s fragrances are known for being the image of opulence and boldness, a mirror image of their creator’s pioneering spirit."),
       ("Dior",
        "With creative minds like Christian Dior, Yves Saint Laurent, and John Galliano at the helm, Dior has become one of the world's most admired and well-known fashion houses. Dior’s brand interests span ready-to-wear clothing, leather goods, skin care products, fashion accessories, and fragrances. Cutting-edge and luxurious, Christian Dior colognes and Dior perfumes are highly desirable and well-regarded for their timeless elegance. Dior cologne like Sauvage Dior for men and Dior perfumes for women like Miss Dior are just some of the trend-setting products that have contributed to the brand’s numerous accolades, which include the Neiman Marcus award, Fashion Industry Foundation award, Parsons School of Design Distinguished Achievement award, and the International Designer of the Year award."),
       ("Mont Blanc",
        "Originally founded in 1908 by a banker, an engineer, and a stationer as the Simplo Filler Pen Company, today, the company has ventured into producing leather goods, watches, jewelry, and fragrances as well as their signature luxury pens. This expansion of products came with the new company name Montblanc and the current ownership by the Richmont Group. The name comes from the beautiful white snow-covered peak of the highest peak in the Alps, Mont Blanc. The first Montblanc fragrance was launched in 2001, and today Montblanc perfumes for women as well as Montblanc colognes remain the perfect luxurious fragrance for any collection."),
       ("Coach",
        "The brand Coach was born in 1941 as a small shop run by several leather workers. In 1950, shop management was taken over by Miles and Lillian Cahn, a husband and wife team who bought out the company in 1961. Coach is best-known for the quality of their leather products, as the Cahn’s knowledge and experience let them devise techniques to make leather sturdier, more flexible, and buttery soft. Men’s wallets and women’s handbags were their initial products, and the brand now has a wide range that includes watches, jewelry, bags, footwear, ready-to-wear outerwear, travel accessories, scarves, sunwear, and fragrances. Their fragrances, like Coach Signature Perfume, Coach Perfume New York, and Coach Blue Cologne, are prized for their clear expression and subtle strength."),
       ("Jimmy Choo",
        "Founded in 1996 by fashion designer Jimmy Choo and Vogue editor Tamara Mellon, the Jimmy Choo fashion house has since gained a reputation that can be described as nothing less than elite. The first perfume by Jimmy Choo was released in 2011, and immediately, the brand skyrocketed in popularity, even receiving praise from British royalty. The Choo name has not lost its luster since then, continuing to design fragrances praised the world over, often lauded as the best there is."),
       ("Estee Lauder", "Estée Lauder founded her namesake company in 1946 with four products and a dream to help everyday women feel beautiful. Known today for luxury skincare and Estée Lauder perfumes, the brand today can be purchased from high-end retailers around the world, but has its headquarters in New York City. Estée Lauder’s entrepreneurial spirit earned her and her namesake brand multiple labels and spawned the creation of multiple best-selling beauty products like Youth Dew and Beautiful perfumes. Discover Estee Lauder perfumes and fragrances carried by Perfumania!

What does Estée Lauder Beautiful smell like?
Beautiful by Estée Lauder is an iconic floral fragrance for women best known for its notes of rose, lily, black currant,  carnation, chamomile, sandalwood, amber and cedar!"),
       ("Issey Miyake", "Issey Miyake’s trademark is pushing the cutting edge of fashion using innovative technological methods. His garments are practical and extremely stylish at the same time. Born in Hiroshima 1938, Miyake may be best known for his innovations in garment pleating, such as his technique in which pleated fabric is wrapped in paper and then heat pressed to make the pleats permanent. His other signature pieces include the A-POC unisex collection, which comprises tubes of machine-processed fabric that can be customized by the consumer, and the famous black turtlenecks worn by Steve Jobs. Issey Miyake fragrances are similarly unique and fashionable, appealing to people who love the ultra-modern and the ultra-fabulous. fumania is proud to carry Issey Miyake perfumes & colognes!

What is the most popular Issey Miyake perfume fragrance?
L’Eau D’Issey is one of the best-selling fragrances from Issey Miyake with notes of lotus, freesia, cyclamen, rose water and fresh peonies!"),
       ("Vince Camuto",
        "Recognized for his high-quality footwear, apparel, and accessories, Vince Camuto extends that same passion and quality to his fragrances & colognes. While relatively new to the perfume industry with his first fragrance created in 2011, Camuto’s fragrances remain the high quality that we expect from this luxury brand. In collaboration with well-known perfumers Laurent Le Guernec, Steve Demercado, Harry Fremont, and Claude Dir he has created tempting scents. Vince Camuto perfumes & colognes include the Bella and Amore perfumes and Vince Camuto body spray that keep us feeling and smelling good all day.");

-- Add PRODUCT ----------------------------------------------
INSERT INTO product (brand_id, name, gender, description, image_url, shipping_policy)
VALUES (1, 'Azzaro Chrome For Men By Azzaro Eau De Toilette Spray', 'MEN',
        'CHROME cologne was launched by AZZARO in 1996. AZZARO CHROME is an intoxicatingly masculine fragrance with bergamot, lavender, and ginger. Enriched with cardamom, sandalwood, rosewood, ivy, oakwood, and neroli this cologne is sure to tantalize the senses. Combine AZZARO CHROME with the aftershave for a long lasting scent. This fragrance is recommended for daytime use.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (1, 'Mademoiselle Leau Tres Charmante by Azzaro for Women - EDT Spray', 'WOMEN',
        'Launched by the designer house of Azzaro in the year 2019. This fragrance has blend of Grapes and Black Currant, Peony and Pear, Musk and Sandalwood.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (2, 'Gucci Bloom For Women By Gucci Eau De Parfum Spray', 'WOMEN',
        'Gucci Bloom for women was released by Gucci in 2017. This feminine floral fragrance features notes of Tuberose blended with Jasmine capturing the essence of walking through a spring garden. Rangoon Creeper, an exotic plant from India, adds a powdery finish to this contemporary and diverse fragrance.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (2, 'Gucci Guilty For Men By Gucci Eau De Toilette Spray', 'MEN',
        'Gucci takes as a catalyst its iconic entwined Gs and brings us a hero who sees this emblem as an incitement to provoke, challenging convention. For this most modern of mavericks, Gucci represents a powerful mix of excitement, allure and sensuality. In Gucci Guilty for Him, this man instinctively recognizes a strong representation of himself in the scent.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (3, 'Paco Rabanne For Men By Paco Rabanne Eau De Toilette Spray', 'MEN',
        'PACO RABANNE, created by PACO RABANNE, wasintroduced in 1973. This fine fragrance contains rosemary, lavender, bergamot and is accented with sage, carnation and cedar making PACO RABANNE perfect forcasual and formal use.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (3, 'Lady Million Eau de Parfum Spray for Women by Paco Rabanne', 'WOMEN', 'Lady Million is an Eau de Parfum for women by Paco Rabanne. It is a feminine fragrance that has fruity notes with floral and woody undertones. The fragrance stands for fiery passion, sensuality and freshness blended in with luxury. Raspberry makes it playful, while orange blossoms and honey make it seductive and sweet.

SCENT
Top Notes: Bitter Orange, Neroli, Raspberry
Middle Notes: Jasmine Sambac, Orange Blossom, Gardenia
Base Notes: Honey, Patchouli, Amber', null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (3, 'Invictus For Men By Paco Rabanne Eau De Toilette Spray', 'MEN', 'ABOUT THE PRODUCT
Invictus was launched in 2014 by Paco Rabanne. The Invictus Man is all about winning, nothing can stand between him and victory. This fresh and sporty scent features notes of grapefruit, patchouli and oak moss.

Notes: fresh grapefruit peel, marine accord, bay leaves, Hedione jasmine, guaiac wood, patchouli, oak moss and ambergris.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.'),
       (4, 'J\'Adore Eau de Parfum Spray for Women by Dio', 'WOMEN', 'In just a few applications, you\'ll say \'J\'adore\' or \'I adore you\' to this sensual and feminine fragrance from the esteemed Dior line of perfumes. J\'adore has won the \'U.S. Women\'s Fragrance Star of the Year\' title at the FiFi Awards, the fragrance industry\'s most prestigious celebratory event. Its subtle floral bouquet tantalizes your senses without overpowering them. Ivy supplies the woody tones while petitgrain adds a distinctly fruity character. Refreshing and sophisticated, J\'adore is the perfect final touch to your work outfit.

SCENT
Top Notes are Ivy and Petitgrain
Middle Notes are Violet, Orchid and Rose
Base Notes are Black Currant, Damask Plum, Musk and Tangerine', null, 'Free shipping on orders over $50'),
       (4, 'Fahrenheit For Men By Christian Dior Eau De Toilette Spray', 'MEN', 'Fahrenheit by Christian Dior is a woody floral musk fragrance for men. Â Created in 1988, this bold and powerful signature scent defines masculinity and sensuality. Fahrenheit features notes of mandarin orange, nutmeg, sandalwood and amber.

Notes: lavender, mandarin orange, hawthorn, nutmeg flower, cedar, bergamot, chamomile, lemon, nutmeg, honeysuckle, carnation, sandalwood, violet leaf, jasmine, lily-of-the-valley, cedar, leather, tonka bean, amber, patchouli, musk and vetiver.',
        null, 'Return Policy
You may return any unopened merchandise in its original condition, including original sealed packaging within 30 days of invoice date and you will receive a full refund, less shipping and gift-wrapping charges.

Due to health reasons, we do not offer refunds on cosmetics, hair care and skincare items. Please make your selections carefully.

All online orders must be shipped back to our warehouse. We do not accept online returns in stores.
You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. You will be notified via email when you return has been processed.

Shipping
We currently only ship within the United States.

Orders over $59 (after discounts have been applied and excluding taxes) ship FREE.. Orders of $59 or less (after discounts have been applied and excluding taxes) will incur a standard shipping charge of just $7.50. HI, AK and U.S. Territories add $6.00..

Standard shipping typically takes about 4-7 business days to arrive. Expedited services are available at checkout.');

INSERT INTO product_variant(product_id, size, price, quantity, discount_id)
VALUES (1, '1.0 oz.', 52.00, 17, 1),
       (1, '1.7 oz.', 72.00, 17, 1),
       (1, '3.4 oz.', 98.00, 17, 1),
       (2, '1.7 oz.', 45.00, 17, 1),
       (3, '1.0 oz.', 82.00, 17, 1),
       (3, '1.7 oz.', 108.00, 17, 1),
       (4, '1.0 oz.', 59.00, 17, 1),
       (4, '1.7 oz.', 80.00, 17, 1),
       (4, '3.4 oz.', 100.00, 17, 1),
       (5, '1.7 oz.', 60.00, 17, 1),
       (5, '3.4 oz.', 80.00, 17, 1),
       (5, '6.8 oz.', 98.00, 17, 1),
       (6, '1.0 oz.', 57.00, 17, 1),
       (6, '2.7 oz.', 90.00, 17, 1),
       (6, '1.7 oz.', 120.00, 17, 1),
       (7, '1.7 oz.', 74.00, 17, 1),
       (7, '3.1 oz.', 95.00, 17, 1),
       (7, '6.7 oz.', 118.00, 17, 1),
       (8, '1.0 oz.', 90.00, 17, 1),
       (8, '1.7 oz.', 118.00, 17, 1),
       (8, '2.5 oz.', 130.00, 17, 1),
       (9, '1.7 oz.', 88.00, 17, 1),
       (9, '3.4 oz.', 112.00, 17, 1),
       (9, '6.7 oz.', 165.00, 17, 1);

