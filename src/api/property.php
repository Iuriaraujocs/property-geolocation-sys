<?php

require_once __DIR__ . '/../app/Controllers/PropertyController.php';

$controller = new PropertyController();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    if (!isset($_GET['id'])) {
        echo json_encode([
            "success" => false,
            "message" => "Missing id parameter"
        ]);
        exit;
    }

    $controller->show();
    exit;
}

if ($method === 'POST') {
    $controller->create();
    exit;
}

echo json_encode([
    "success" => false,
    "message" => "Invalid request method"
]);
exit;
