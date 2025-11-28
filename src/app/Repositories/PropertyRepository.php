<?php

namespace app\Repositories;

require_once __DIR__ . '/../../core/BaseRepository.php';

use core\BaseRepository;

class PropertyRepository extends BaseRepository
{
    protected $table = 'properties';

    public function __construct()
    {
        parent::__construct();
    }
}
