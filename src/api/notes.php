<?php

require_once __DIR__ . '/../app/Controllers/NotesController.php';

$controller = new NotesController();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $controller->create();
    exit;
}

if ($method === 'GET') {
    // GET /api/notes.php?property_id=62
    if (isset($_GET['property_id'])) {
        $controller->list($_GET['property_id']);
        exit;
    }

    echo json_encode([
        "success" => false,
        "message" => "Missing parameters"
    ]);
    exit;
}

echo json_encode([
    "success" => false,
    "message" => "Invalid request method"
]);
exit;
