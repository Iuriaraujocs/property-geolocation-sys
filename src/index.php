<?php
// index.php
$path = __DIR__ . '/public/property.html';

if (file_exists($path)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($path);
    exit;
} else {
    echo "File not found!";
}