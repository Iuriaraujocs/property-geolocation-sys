FROM php:8.3-apache

# Instala PDO MySQL
RUN docker-php-ext-install pdo_mysql

# (Opcional) habilita mod_rewrite para Apache
RUN a2enmod rewrite

