<?php

require_once __DIR__ . '/../../core/BaseController.php';
require_once __DIR__ . '/../Services/NotesService.php';

use core\BaseController;
use app\Services\NotesService;

class NotesController extends BaseController
{
    private $service;

    public function __construct()
    {
        parent::__construct();
        $this->service = new NotesService();
    }

    /**
     * GET /api/notes.php?property_id=XX
     */
    public function list()
    {
        $propertyId = $_GET['property_id'] ?? null;

        if (!$propertyId) {
            return $this->jsonError('Missing property_id', 400);
        }

        $result = $this->service->listByProperty($propertyId);

        return $this->jsonSuccess($result, "Notes list loaded");
    }

    /**
     * POST /api/notes.php
     */
    public function create()
    {
        if (empty($_POST['property_id']) || empty($_POST['note'])) {
            return $this->jsonError('property_id and note are required', 400);
        }

        $data = [
            'property_id' => $_POST['property_id'],
            'note'        => $_POST['note'],
        ];

        $result = $this->service->create($data);

        return $this->jsonSuccess($result, "Note created successfully");
    }
}
