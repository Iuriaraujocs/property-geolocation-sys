<?php

namespace app\Services;

require_once __DIR__ . '/../Repositories/NotesRepository.php';

use app\Repositories\NotesRepository;

class NotesService
{
    private $repo;

    public function __construct()
    {
        $this->repo = new NotesRepository();
    }

    /**
     * Create a new note
     */
    public function create($data)
    {
        return $this->repo->create($data);
    }

    /**
     * Get note by ID
     */
    public function find($id)
    {
        return $this->repo->findById($id);
    }

    /**
     * List notes from a property
     */
    public function listByProperty($propertyId)
    {
        return $this->repo->listByPropertyId($propertyId);
    }
}
