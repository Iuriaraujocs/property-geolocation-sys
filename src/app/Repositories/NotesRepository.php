<?php

namespace app\Repositories;

require_once __DIR__ . '/../../core/BaseRepository.php';

use core\BaseRepository;

class NotesRepository extends BaseRepository
{
    protected $table = 'notes';

    public function __construct()
    {
        parent::__construct();
    }

    public function listByPropertyId($propertyId)
    {
        $sql = "SELECT * FROM {$this->table} 
                WHERE property_id = ?
                ORDER BY id DESC";

        return $this->db->fetchAll($sql, [$propertyId]);
    }
}
