<?php

require_once __DIR__ . '/../../core/BaseController.php';
require_once __DIR__ . '/../Services/PropertyService.php';

use core\BaseController;
use app\Services\PropertyService;

class PropertyController extends BaseController
{
    private $service;

    public function __construct()
    {
        parent::__construct();
        $this->service = new PropertyService();
    }

    public function show()
    {
        $id = $_GET['id'] ?? null;
        if (!$id) {
            return $this->jsonError('Missing id', 400);
        }

        $result = $this->service->get($id);
        if (!$result) return $this->jsonError('Not found', 404);

        return $this->jsonSuccess($result, "success findById process");
    }

    public function showWithNotes()
    {
        $id = $_GET['id'] ?? null;
        if (!$id) {
            return $this->jsonError('Missing id', 400);
        }

        $result = $this->service->getWithNotes($id);
        if (!$result) return $this->jsonError('Not found', 404);

        return $this->jsonSuccess($result, "success findById process");
    }

    public function create()
    {
        $data = [
            'name' => $_POST['property'],
            'address' => $_POST['address'],
        ];

        if (empty($data)) {
            return $this->jsonError('Invalid form data', 400);
        }

        $result = $this->service->create($data);

        if (isset($result['error'])) return $this->jsonError($result['error'], 422);

        return $this->jsonSuccess($result, 'Property Saved Successfully');
    }
}
